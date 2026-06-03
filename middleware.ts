import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { verifyDemoJwt, DEMO_JWT_COOKIE } from "@/lib/demo-jwt";

const LANDING_URL =
  process.env.NEXT_PUBLIC_LANDING_URL ?? "https://bookcover.cercalabs.com";

/** Public demo origin (must be *.cercalabs.com so __bc_demo_jwt is sent). */
const DEMO_URL = (
  process.env.NEXT_PUBLIC_DEMO_URL ?? "https://bcmemberdemo.cercalabs.com"
).replace(/\/$/, "");

const { auth } = NextAuth(authConfig);

function demoReturnUrl(req: NextRequest): string {
  if (DEMO_URL) {
    return new URL(
      req.nextUrl.pathname + req.nextUrl.search,
      DEMO_URL + "/"
    ).href;
  }
  return req.nextUrl.href;
}

function redirectToLanding(req: NextRequest) {
  const landing = new URL(LANDING_URL);
  landing.searchParams.set("login", "1");
  landing.searchParams.set("return", demoReturnUrl(req));
  return NextResponse.redirect(landing);
}

function redirectToCanonicalDemo(req: NextRequest) {
  if (!DEMO_URL) return null;
  const canonical = new URL(DEMO_URL);
  if (req.nextUrl.hostname === canonical.hostname) return null;
  const target = new URL(
    req.nextUrl.pathname + req.nextUrl.search,
    DEMO_URL + "/"
  );
  return NextResponse.redirect(target);
}

export default auth(async (req) => {
  const path = req.nextUrl.pathname;

  const canonical = redirectToCanonicalDemo(req);
  if (canonical) return canonical;

  if (path.startsWith("/admin")) {
    if (!req.auth) {
      const u = new URL("/login", req.nextUrl.origin);
      u.searchParams.set("callbackUrl", path);
      return Response.redirect(u);
    }
    return;
  }

  if (path === "/") {
    const session = await verifyDemoJwt(
      req.cookies.get(DEMO_JWT_COOKIE)?.value
    );
    if (!session) {
      return redirectToLanding(req);
    }
  }
});

export const config = {
  matcher: ["/", "/admin/:path*"],
};

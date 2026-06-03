import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { verifyDemoJwt, DEMO_JWT_COOKIE } from "@/lib/demo-jwt";

const LANDING_URL =
  process.env.NEXT_PUBLIC_LANDING_URL ?? "https://bookcover.cercalabs.com";

const { auth } = NextAuth(authConfig);

function redirectToLanding(req: NextRequest) {
  const landing = new URL(LANDING_URL);
  landing.searchParams.set("login", "1");
  landing.searchParams.set("return", req.nextUrl.href);
  return NextResponse.redirect(landing);
}

export default auth(async (req) => {
  const path = req.nextUrl.pathname;

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

export {};

declare global {
  interface Window {
    render?: (idx: number, dir: number) => void;
    nav?: (dir: number) => void;
    switchFlow?: (n: number) => void;
    jump?: (i: number) => void;
  }
}

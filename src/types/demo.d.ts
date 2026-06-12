export {};

declare global {
  interface Window {
    __bcInitDemo?: () => void;
    __bcResumeDemo?: () => void;
    render?: (idx: number, dir: number) => void;
    nav?: (dir: number) => void;
    switchFlow?: (n: number) => void;
    jump?: (i: number) => void;
    switchToOverview?: () => void;
    switchToWhyItWorks?: () => void;
    autorunStart?: () => void;
    autorunBeginTour?: () => void;
    autorunExit?: () => void;
    autorunTogglePause?: () => void;
    autorunPrev?: () => void;
    autorunNext?: () => void;
    autorunSkipFlow?: () => void;
    autorunRestart?: () => void;
    autorunToggleSpeedMenu?: () => void;
    autorunSetSpeed?: (speed: number) => void;
  }
}

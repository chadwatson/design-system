import { rem } from "./typography";

export type BreakpointValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

const breakpoints = {
  100: 480,
  200: 600,
  300: 768,
  400: 960,
  500: 1024,
  600: 1220,
  700: 1440,
  800: 1620,
  900: 2000,
};

export const bp = (value: BreakpointValue): number => breakpoints[value] ?? 0;

bp.max = (value: BreakpointValue) => `(max-width: ${rem(bp(value) - 1)})`;
bp.min = (value: BreakpointValue) => `(min-width: ${rem(bp(value))})`;

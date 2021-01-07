import { cache } from "./utils";
export { cache, defineColor } from "./utils";
export {
  elevation,
  shadowOutline,
  shadowInner,
  ElevationValue,
} from "./effects";

export type FontSizeValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100;

export type SpaceValue =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1300
  | 1400
  | 1500
  | 1600;

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

export const createDesignSystem = (base: number) => {
  const rem = (value: number) => `${value / base}rem`;

  const bp = (value: BreakpointValue): number => breakpoints[value] ?? 0;

  bp.max = (value: BreakpointValue) => `(max-width: ${rem(bp(value) - 1)})`;
  bp.min = (value: BreakpointValue) => `(min-width: ${rem(bp(value))})`;

  return {
    fontSize: cache((value?: FontSizeValue) => {
      switch (value) {
        case 100:
          return base * 0.75;
        case 200:
          return base * 0.875;
        case 300:
          return base;
        case 400:
          return base * 1.125;
        case 500:
          return base * 1.25;
        case 600:
          return base * 1.5;
        case 700:
          return base * 1.875;
        case 800:
          return base * 2.25;
        case 900:
          return base * 3;
        case 1000:
          return base * 3.75;
        case 1100:
          return base * 4.5;
        default:
          return base;
      }
    }),
    rem,
    space: cache((value?: SpaceValue) => {
      switch (value) {
        case 100:
          return base * 0.25;
        case 200:
          return base * 0.5;
        case 300:
          return base * 0.75;
        case 400:
          return base;
        case 500:
          return base * 1.5;
        case 600:
          return base * 2;
        case 700:
          return base * 3;
        case 800:
          return base * 4;
        case 900:
          return base * 6;
        case 1000:
          return base * 8;
        case 1100:
          return base * 12;
        case 1200:
          return base * 16;
        case 1300:
          return base * 24;
        case 1400:
          return base * 32;
        case 1500:
          return base * 40;
        case 1600:
          return base * 48;
        default:
          return base;
      }
    }),
  };
};

export const { space, rem, fontSize } = createDesignSystem(16);

import { fontSize, rem } from "./typography";
import { cache } from "./utils";

export const space = cache((value) => {
  switch (value) {
    case 100:
      return fontSize() * 0.25;
    case 200:
      return fontSize() * 0.5;
    case 300:
      return fontSize() * 0.75;
    case 400:
      return fontSize();
    case 500:
      return fontSize() * 1.5;
    case 600:
      return fontSize() * 2;
    case 700:
      return fontSize() * 3;
    case 800:
      return fontSize() * 4;
    case 900:
      return fontSize() * 6;
    case 1000:
      return fontSize() * 8;
    case 1100:
      return fontSize() * 12;
    case 1200:
      return fontSize() * 16;
    case 1300:
      return fontSize() * 24;
    case 1400:
      return fontSize() * 32;
    case 1500:
      return fontSize() * 40;
    case 1600:
      return fontSize() * 48;
    default:
      return fontSize();
  }
});

export const breakpoint = cache((value) => {
  switch (value) {
    case 100:
      return `(min-width: ${rem(480)})`;
    case 200:
      return `(min-width: ${rem(600)})`;
    case 300:
      return `(min-width: ${rem(768)})`;
    case 400:
      return `(min-width: ${rem(960)})`;
    case 500:
      return `(min-width: ${rem(1024)})`;
    case 600:
      return `(min-width: ${rem(1220)})`;
    case 700:
      return `(min-width: ${rem(1440)})`;
    case 800:
      return `(min-width: ${rem(1620)})`;
    case 900:
      return `(min-width: ${rem(2000)})`;
    default:
      return "(min-width: 0px)";
  }
});

import { cache } from "./utils";

export const fontSize = cache((value) => {
  switch (value) {
    case 100:
      return 12;
    case 200:
      return 14;
    case 300:
      return 16;
    case 400:
      return 18;
    case 500:
      return 20;
    case 600:
      return 24;
    case 700:
      return 30;
    case 800:
      return 36;
    case 900:
      return 48;
    case 1000:
      return 60;
    case 1100:
      return 72;
    default:
      return 16;
  }
});

export const rem = (value: number) => `${value / fontSize()}rem`;

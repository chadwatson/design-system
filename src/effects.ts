import { cache, always } from "./utils";

export type ElevationValue = 0 | 100 | 200 | 300 | 400 | 500;

export const elevation = cache((value?: ElevationValue) => {
  switch (value) {
    case 0:
      return "box-shadow: none;";
    case 200:
      return "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);";
    case 300:
      return "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);";
    case 400:
      return "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);";
    case 500:
      return "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);";
    default:
      return "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);";
  }
});

export const shadowInner = always(
  "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);"
);

export const shadowOutline = always(
  "box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);"
);

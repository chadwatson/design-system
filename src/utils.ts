export function always<A>(x: A) {
  return () => x;
}

export function cache<R, TValue extends number = number>(
  fn: (x?: TValue) => R
) {
  const results: { [key: string]: R } = {};

  return (x?: TValue) => {
    const key = x ?? "()";
    if (!(key in results)) {
      results[key] = fn(x);
    }

    return results[key];
  };
}

export type ColorValues = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

export function defineColor(
  values: ColorValues,
  defaultValue: keyof ColorValues
) {
  return function color(value?: keyof ColorValues) {
    return value ? values[value] : values[defaultValue];
  };
}

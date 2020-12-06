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

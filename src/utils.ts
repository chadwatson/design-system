export function always<A>(x: A) {
  return () => x;
}

export function cache<R>(fn: (x: number) => R) {
  const results: { [key: number]: R } = {};

  return (x: number | undefined = 0) => {
    if (!(x in results)) {
      results[x] = fn(x);
    }

    return results[x];
  };
}

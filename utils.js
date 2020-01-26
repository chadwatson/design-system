export const always = x => () => x;

export const cache = fn => {
  const results = {};

  return x => {
    if (!(x in results)) {
      results[x] = fn(x);
    }

    return results[x];
  };
};

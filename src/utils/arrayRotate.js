export const arrayRotate = (arr, reverse) => {
  reverse ? arr.unshift(arr.pop()) : arr.push(arr.shift());
  return arr;
};

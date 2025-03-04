function missingNumber(arr) {
  if (arr.length === 1 && arr[0] === 1) {
    return 2;
  }
  if (arr.length === 1 && arr[0] > 1) {
    return arr[0] - 1;
  }
  arr.sort((a, b) => a - b);
  if (arr[0] > 1) {
    return arr[0] - 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      return arr[i] - 1;
    }
  }

  return arr[arr.length - 1] + 1;
}

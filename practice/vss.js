function sumOfSquare(k) {
    let left = 0;
  let right = Math.floor(Math.sqrt(k));

  while (left <= right) {
    const sumOfSquares = left * left + right * right;
    if (sumOfSquares === k) {
      console.log("true")
      return
    } else if (sumOfSquares < k) {
      left++;
    } else {
      right--;
    }
  }

  console.log("false")

}
let val = 7
sumOfSquare(val)

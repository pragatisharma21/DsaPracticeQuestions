function solve(N, S, L, R) {
  let arr = S.split("");
  while (L <=
     R) {
    let temp = arr[L];
    arr[L] = arr[R];
    arr[R] = temp;
    L++;
    R--;
  }
  console.log(arr.join(""));
}
let N = 8;
let S = "fxavixem";
let L = 0;
let R = 1;

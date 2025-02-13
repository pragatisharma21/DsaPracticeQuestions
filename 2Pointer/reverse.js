let arr = [7, 4, 9, 6, 21, 8, 11, 17];
let n = arr.length;

let i = 0;
let j = n - 1;
let temp;
while (i <= j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++
  j--
}
console.log(arr)

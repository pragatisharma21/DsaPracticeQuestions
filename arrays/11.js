let n = 8;
let str = "somil";
let L = 0, R = 1;

let left = str.slice(0, L);
let middle = str.slice(L, R + 1).split("").reverse().join("");
let right = str.slice(R + 1);

console.log(left + middle + right);
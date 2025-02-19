let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = 3;

let res = [];
 

for(i=n-1; i>=0; i--){
    res.push(arr[i][0])
}
for(let i = 1 ; i<n; i++){
    res.push(arr[i][i])
}
for(i = n-2 ; i>=0; i--){
    res.push(arr[i][n-1])
}
console.log(res.join(" "))

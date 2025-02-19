let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [3, 2, 5, 4, 6],
  [7, 8, 9, 1, 2],
];


n = 4
m = 5

let res = []

for(let i = m-1 ; i>=0; i--){
    res.push(arr[0][i])
}
for(let i = 0; i<=m-1; i++){
    res.push(arr[n-3][i])
}
for(let i = m-1 ; i>=0 ; i--){
    res.push(arr[n-2][i])
}
for(let i=0; i<=m-1; i++){
    res.push(arr[n-1][i])
}

console.log(res.join(" "))
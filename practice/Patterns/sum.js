let arr = [
  [1, 2, 7],
  [3, 4, 6],
  [5, 6, 10],
];

n = 3
let res = []
let sum = 0
 

for(let i = 0; i<n; i++){
    res.push(arr[i][0])
  
}
for(let i = 0; i<n; i++){
    res.push(arr[i][n-1])
  
}

for(let i = 0; i<res.length ; i++){
    sum += res[i]
}
console.log(sum)


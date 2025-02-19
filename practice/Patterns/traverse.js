let arr = [
    [1, 8, 9],
    [2, 7, 10],
    [3, 6, 11],
    [4, 5, 12],
  ];
  
  n = 4
  m = 3
  
  let res = []
  

for(let i=0; i<n; i++){
    res.push(arr[i][m-1])
}

for(let i=0; i<n; i++){
    res.push(arr[i][m-2])
}
for(let i=0; i<n; i++){
    res.push(arr[i][0])
}

console.log(res.join(" "))
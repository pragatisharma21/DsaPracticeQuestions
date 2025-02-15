let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
 let row = 4
 let col = 4

//  for(let i = row-1; i>=0; i--){
//     console.log(mat[i][0])

//  }

//  // 1,1 2,2 3,3
//  for(let i = 1; i<row-1; i++){
//     console.log(mat[i][i])
//  }
//  for(let i = row-1 ; i>=0; i-- ){
//     console.log(mat[i][row-1])
//  }

for(let i = 0; i<col; i++){
    console.log(mat[0][i])
}

//1,2 2,1 3,0
for(let i = 1; i<row-1; i++){
    console.log(mat[i][row-i-1])
}
for(let i = 0; i<=col-1; i++){
    console.log(mat[row-1][i])
}
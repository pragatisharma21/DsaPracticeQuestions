// arr = [[1,2,3,4],
//       [5,6,7,8],
//       [9,10,11,12],
//       [13,14,15,16]
// ]
//  n= 4
// for(let i = 0; i<=n-1; i++){
//     console.log(arr[i][i])
// }
// let i=0
// let j = n-1
// while(i<=n-1 && j>=0){
//     console.log(arr[i][j])
//     j++;
//     i--;
// }
// let i = 0;
// let j = n - 1; // Start at top-right corner
// while(i <= n - 1 && j >= 0) {
//     console.log(arr[i][j]);
//     i++; // Move down the rows
//     j--; // Move left in the columns
// }


// Copy code
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
let n = 5;
// let res = []

// // Print left-to-right diagonal
// for(let i = 0; i <= n - 1; i++) {
//     res.push(arr[i][i]);
// }


// // Print right-to-left diagonal
// let i = 0;
// let j = n - 1; // Start at top-right corner
// while(i <= n - 1 && j >= 0) {
//    res.push(arr[i][j]);
//     i++; // Move down the rows
//     j--; // Move left in the columns
// }
// console.log(res.join(" "))
for(i=n-1; i>= 0; i--){
    console.log(arr[i][0])
}
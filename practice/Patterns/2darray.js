let mat = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]


let n = 5
let m = 3
let sum1 = 0
let mid = Math.ceil(n/2-1)
for(let i = n-1; i>=mid; i--){
   sum1 +=mat[0][i]
}
// console.log(sum1)

for(let i = 1; i<m-1 ; i++){
    sum1+= mat[i][mid]
}
for(let i = mid ; i>=0; i--){
    sum1 += mat[m-1][i]
}
// console.log(sum1)


let sum2 = 0
let mid2 = Math.ceil(m/2-1)

for(let i = 0 ; i<mid2; i++){
    sum2 += mat[i][0]

}
for(let i = 0; i<=n-1; i++){
    sum2 += mat[mid2][i]
}
for(let i = mid2+1; i<=m-1; i++ ){
    sum2 += mat[i][n-1]
}
console.log(Math.abs(sum1-sum2))


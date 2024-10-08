// let N = 4; 
// let M = 3; 

// let matrix = [
//     [1, 8, 9 ],
//     [2, 7, 10],
//     [3, 6, 11 ],
//     [4, 5, 12 ],
// ];
// let res = []
// for(i=M; i>=0; i--){
//     res.push(matrix[i][0])
// }
// for(i=M; i>=0; i--){
//     res.push(matrix[i][1])
// }
// for(i=M; i>=0; i--){
//     res.push(matrix[i][2])
// }
// console.log(res.join(" "))
var x = ["1", "10", "12", "14"]
var res = []
for(i=0; i<x.length; i++){
    res.push(Number(x[i]))
}
console.log(res)
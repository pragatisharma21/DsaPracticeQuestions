let totalSum = 0;
let A = [12, 34, 56, 78]; // Example array
let N = A.length; // Array ki length

for(let i = 0; i<N; i++){
    let element = A[i]
    let digitSum = 0
    while(element > 0){
        let digit = element % 10
        digitSum += digit
        element = Math.floor(element/10)
    }
    totalSum += digitSum
}
console.log(totalSum)
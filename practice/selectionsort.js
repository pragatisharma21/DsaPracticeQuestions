// arr = [5, 3, 8, 4, 2]
// for(i = 0; i<arr.length-1 ; i++){
//     let minIndex = i
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[j] < arr[minIndex]){
//             minIndex = j
//         }
//     }
//     let temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
// }
// console.log(arr)
arr = [13, 46, 24, 52, 20, 9]
for(let i = 0; i<arr.length-1; i++){
    let minIndex = i
    for(let j = i ; j< arr.length; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j

        }
            
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
}
console.log(arr)
// for(i = 0; i< arr.length-1; i++){

// }


let arr = [2,3,4,5,6,1,4,4]

let min = arr[0]
for(let i = 0; i<arr.length; i++){
    if(arr[i] < min)
        min = arr[i]
}

console.log(min)
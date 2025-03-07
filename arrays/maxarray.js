arr = [1,2,4,6,7,4,9]
max = arr[0]

for(let i = 0; i<arr.length; i++){
    if(arr[i] > max)
        max = arr[i]
}

console.log(max)
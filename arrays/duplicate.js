let arr = [1,2,3,44,4,4,12]

let duplicate = false
for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++)
    if(arr[i] === arr[j]){
        duplicate = arr[i]
        break;
    }
}
console.log(duplicate )
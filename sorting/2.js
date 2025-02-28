let arr = [1,2,4,5,8] 
let n = arr.length

for(let i = 0; i<n-1; i++){
    let minindex = i
    for(let j = i+1; j<n; j++ ){
        if(arr[j] < arr[minindex]){
            minindex = j
        }
    }
    let temp = arr[i]
    arr[i] = arr[minindex]
    arr[minindex] = temp
}

console.log(arr)

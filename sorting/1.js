let arr = [2,5,67,8,2]
let n = arr.length


// by bubble sortt
for(let i=0; i<n-1 ; i++){
    for(let j = 0; j<n-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)
// bubble sort ?? bubble swapping hotii hai valuesss jisme hum check krte hai ek element ko jo agey ba
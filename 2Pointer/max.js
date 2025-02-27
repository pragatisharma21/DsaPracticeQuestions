let arr = [1,3,4,6,7,1]

let max = arr[0]

for(i=0; i<arr.length; i++){
    if(arr[i]> max){
        max = arr[i]
    }
}
console.log(max)
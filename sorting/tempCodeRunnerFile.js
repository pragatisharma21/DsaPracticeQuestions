arr = [2,3,4,5,6,7]
key = 5
let start = 0
let end = arr.length-1
let ans = -1
while(start <=end){
    mid  = Math.floor(start + (end-start) / 2)
    if(arr[mid] === key){
        ans = mid
        break
        
    }else if(arr[mid] < key){
        start = mid + 1

    }else{
        end = mid-1
    }

}
console.log(ans)
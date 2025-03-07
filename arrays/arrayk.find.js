let arr = [1,2,3,4,6,7,8,9]

let target = 12
found = false
for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
        found = true
        break;

    }
}
console.log(found ? "true" : "false")
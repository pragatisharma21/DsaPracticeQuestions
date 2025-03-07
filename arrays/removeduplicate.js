let arr = [2,2,2,2]

let uniqueArr = []

for(let i = 0; i<arr.length; i++){
    let found = false
    for(let j = 0; j<uniqueArr.length; j++){
        if(arr[i] === arr[j])
            found = true
        break;

    }
    if(!found){
        uniqueArr.push(arr[i])
    }
}
console.log(uniqueArr.join(""))
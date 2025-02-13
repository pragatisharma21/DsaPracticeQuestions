let arr1 = [2,4,9,12]
let arr2=  [1,3,8]


let i = 0
let j = 0

let n = arr1.length
let m = arr2.length
let res = []

while(i<=n-1 && j<=m-1){
    if(arr1[i] < arr2[j]){
        res.push(arr1[i])
        i++
    }else{
        res.push(arr2[j])
        j++
    }
}

while(i<=n-1){
    res.push(arr1[i])
    i++
}
while(j<=m-1){
    res.push(arr2[j])
    j++
}

console.log(res)
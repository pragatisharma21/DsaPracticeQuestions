let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8, 10]

let res = []
let i = 0
let j = 0
let k = 0
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        res[k] = arr1[i]
        i++
        k++
    }else{
        res[k] = arr2[j]
        j++
        k++
    }
}
while(i<arr1.length){
    res[k] = arr1[i]
    i++
    k++
}
while(j<arr2.length){
    res[k]= arr2[j]
    j++
    k++
}
console.log(res)
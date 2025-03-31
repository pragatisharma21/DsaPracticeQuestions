var a = "pragatuu"
const b = "Shiviii"
const arr = [1,2,3,4,5]

// const func = ()=>{
//     console.log(a)
//     console.log(b)
//     let c = "shivuu"

//     const func2 = ()=>{
//         console.log(a)
//         console.log(b)

//     }
//     func2()
//     if(c){
//         let d = "pshivi"
//         console.log(d)
//     }
//     console.log(d)

// }
// // console.log(c)
// func()


// for(word of a){
//     word = "a"

// }
for(let i = 0; i<arr.length; i++){
   arr[i] = 1

}
console.log(arr)
// console.log(a)


if(arr === null || (typeof arr !== 'object' && typeof arr !== 'function' )){
    console.log("primitive")

}else{
    console.log("non primitive")
}
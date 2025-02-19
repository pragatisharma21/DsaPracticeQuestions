let num = 123
let reversednum = 0
while(num > 0){
let digit = num % 10
reversednum = reversednum * 10 + digit
 num = Math.floor(num/10)
}
console.log(reversednum)

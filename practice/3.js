

num = 179
rev = 0
while(num > 0){
    rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num/10)
    
}
console.log(rev)

num1 = 5
count = 0
for(i= 1; i<num1; i++){
    if(i % 2  === 0){
      count += 1

    }
    

}
console.log(count)



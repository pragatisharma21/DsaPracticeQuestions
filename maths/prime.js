let n = 3
let isPrime = true


for(i = 2; i<n; i++){
    if(n%i==0){
        isPrime = false
        break;
    }
}
console.log(isPrime? "prime" : "not prime")
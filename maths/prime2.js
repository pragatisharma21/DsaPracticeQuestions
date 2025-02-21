let n = 123

let isprime = true

for(i=2; i*i<=n; i++){
    if(n%i==0){
        isprime = false
        break
    }

    

}

console.log(isprime? "prime": "notprime")
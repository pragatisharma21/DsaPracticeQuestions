n = 5
for(i=0; i<n; i++){
    let bag = ""
    for(j=0; j<n; j++){
        if(i==0|| i==n-1|| j==n-1-i){
            bag = bag + "*"
        }
        else {
            bag = bag + " "

        }
    }
    console.log(bag)
}
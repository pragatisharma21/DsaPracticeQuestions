let sum = 0
for(i= 0; i<A.length; i++ ){
    let el = A[i]
    let factor = 0
    for(j= 1; j<= el; j++){
        if(el % j === 0){
            factor++
        }
    }
    if(factor === 2){
        sum = sum + el
    }
    
    }
    for(i= 0; i<B.length; i++ ){
    let el = B[i]
    let factor = 0
    for(j= 1; j<= el; j++){
        if(el % j === 0){
            factor++
        }
    }if(factor === 2){
        sum = sum + el
    }
    
  
    }
  console.log(sum)

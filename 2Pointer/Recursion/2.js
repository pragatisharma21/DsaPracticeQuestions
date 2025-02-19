function call(x){
    if(x >= 1){
        console.log(2*call(x-1)+2) 

    }else{
        return 1
    }
    
}




call(3)
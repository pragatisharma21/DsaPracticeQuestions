function pattern(n) {
    for(i=0; i<n; i++){
        let bag="" 
        for(j=0; j<n; j++){
            bag += "* "
        }
        console.log(bag)
        
    }
   

}
pattern(4)
function triangle(n) {
    for(i=0; i<=n; i++){
        let bag="" 
        for(j=0; j<i; j++){
            bag += "* "
        }
        console.log(bag)
        
    }
   

}
triangle(5)
function number(n) {
    for(i=1; i<=n; i++){
        let bag = ""
        for(j=1; j<i; j++){
            bag += j
        }
        console.log(bag)
        
    }
}
    number(5)
    function numbers(n) {
        for(i=0; i<=n; i++){
            bag = ""
            count=1
            for(j=0; j<i; j++){
                bag += i
                
            }
            console.log(bag)
            
        }
    }
        numbers(5)
        function reverse(n){
            for(let i = 1; i<=n; i++){
                let bag = ""
                for(let j = 0; j<n-i+1; j++){
                    bag  += "*"
                }
                console.log(bag)
            }
        }
        reverse(5)
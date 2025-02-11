function patterns(n){
    for(i = 1; i<=n ; i++){ // this is outer loop yeh hum lines ke liye karte hai ki humare me line kitni haiii
        let bag = "" // yeh hum ek hi line me likhne ke liye karte h ki niche 2nd line me nh jaye code
        for(let j = 1 ; j<i; j++){ // yeh hum andar k collumns kitne h usko calculate krne ko use karte hai 
            bag += "*" + " "
        }
        console.log(bag) // yaha hum print krdenge apne bag ko
    }

}

patterns(10) // or yaha pe fir humari function call hogiii


function pattern2(n){
    for(i=1; i<n; i++){
        let  bag = ""
        for(j=i; j<n; j++){
            bag += "*" + " "

        }
        console.log(bag)
    }
}

pattern2(10)

function pattern3(n){
    for(let i = 0; i<n; i++){
        let bag = ""
        for(let j = 1 ; j<=i ; j++){
            bag += j
        }
        console.log(bag)
    }
}

pattern3(5)




function pattern4(n){
    for(i=1; i<=n; i++){
        let bag = ""
        for(let j = n ; j>=i; j--){
            bag += j
        }
        console.log(bag)
    }

}
pattern4(5)







function solvearr(testArr, n){
    
    // for(i=0; i<n; i++){
    //     for(j=i+1; j<n; j++){
    //         if(testArr[i] == 2*testArr[j] || testArr[j]== 2*testArr[i]){
    //             console.log("Yes")
    //             return;
    //         }
    //     }
    
    // }

    testArr.sort()
    let i = 0
    let j = n-1

    while(i<j){
        if(testArr[i] == 2*testArr[j]){
            console.log("yes")
            return 
        }
        else if(testArr[i] < testArr[j]){
            i++
        }
        else{
            j--
        }
    }

    console.log("No")


// console.log("No")

}

testArr = [5, 0, 9, 7, 10]
n = testArr.length
solvearr(testArr, n)

// [1, 2, 3, 4, 5, 6, 7 ]

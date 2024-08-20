A = [1, 3, 2]
let largest = A[0]; 
    for (let i = 1; i < A.length; i++) {
        if (A[i] > largest) {
            largest = A[i];
        }
    }
    bag = ""
    for (let i = 0; i < A.length; i++) {
        if (A[i] < largest) {
          bag = bag + "-1" + " "
        }
        else{
            bag = bag + A[i] + " "
        }
    }
    
    console.log(bag);

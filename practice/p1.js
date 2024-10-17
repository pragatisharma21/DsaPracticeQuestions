let n = 4

for(i=1; i<=n; i++){
    let bag = ""
    for(j=1; j<=n; j++){
       bag = bag + j + " "
    }
    console.log(bag)
}

for(i=1; i<=n; i++){
    let bag = ""
    for(j=1; j<=n; j++){
        bag = bag + "*" + " "

    }
    console.log(bag)
}
for (let i = 0; i < n; i++) {
    let bag = "";  // Initialize bag to an empty string
    for (let j = 0; j < n; j++) {
        bag = bag + String.fromCharCode(65 + j) + " ";  // 65 is ASCII value of 'A'
    }
    console.log(bag);
}

let m = 3;
let count = 1;  // To keep track of the numbers

for (let i = 0; i < m; i++) {
    let bag = "";  // Initialize bag to an empty string
    for (let j = 0; j < m; j++) {
        bag = bag + count + " ";  // Append the current number
        count++;  // Increment the number
    }
    console.log(bag);
}
k = 4
count = 1
for(i=0; i<k; i++){
    let bag = ""
    for(j=0; j<k; j++){
        bag = bag + count + ""
    }
    count++
    console.log(bag)
}
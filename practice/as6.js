function createNumberPyramid(rows) {
    for (let i = 1; i <= rows; i++) { 
        let row = ""; 

        for (let j = 1; j <= i; j++) 
           
            if (j % 3 === 0) {
                continue;
            }
           
            if (j % 7 === 0) {
                break;
            }
            row += j + " ";
        }

        
        if (row.trim() !== "") {
            console.log(row.trim());
        }
    }
}


let userInput = prompt("Enter number of rows (1-10): ");
let rows = parseInt(userInput);


if (rows >= 1 && rows <= 10) {
    createNumberPyramid(rows);
} else {
    console.log("Please enter a number between 1 and 10.");
}
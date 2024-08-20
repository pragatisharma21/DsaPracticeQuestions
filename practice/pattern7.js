// Define the value of N
const N = 3; // You can change this value to any number between 1 and 10

// Generate and print the pattern
for (let i = 0; i < N; i++) {
    let line = '';
    for (let j = 0; j < N; j++) {
        // Determine the number to print
        // Start with 1 if the row index is even, otherwise start with 0
        let num = (i + j) % 2;
        line += num + ' ';
    }
    console.log(line.trim()); // Print the line and remove trailing space
}


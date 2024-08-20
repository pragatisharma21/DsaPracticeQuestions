// Define the values of N and M
const N = 1; // Number of times to repeat the pattern (rows)
const M = 2; // Number of segments

// Generate and print the pattern
for (let i = 0; i < N; i++) {
    let line1 = '';
    let line2 = '';
    
    for (let j = 0; j < M; j++) {
        line1 += '+/\\';  // Adding segment for the first row
        line2 += '+\\/';  // Adding segment for the second row
    }
    
    // Add the final '+' to complete the pattern
    line1 += '+';
    line2 += '+';

    // Print the pattern lines
    console.log(line1);
    console.log(line2);
}

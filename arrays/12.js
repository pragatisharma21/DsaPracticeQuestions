let n = 1
matrix = [20]


let result = [];

// Diagonal traversal
for (let col = 0; col < n; col++) {
    let i = 0, j = col;
    while (j >= 0) {
        result.push(matrix[i][j]);
        i++;
        j--;
    }
}

for (let row = 1; row < n; row++) {
    let i = row, j = n - 1;
    while (i < n) {
        result.push(matrix[i][j]);
        i++;
        j--;
    }
}

console.log(result.join(" "));

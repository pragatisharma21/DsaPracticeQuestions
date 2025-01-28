let arr = [5, 3, 8, 4, 2];

for (let i = 0; i < arr.length - 1; i++) {  // Total passes
    for (let j = 0; j < arr.length - i - 1; j++) {  // Adjacent compare
        if (arr[j] > arr[j + 1]) {  // Agar wrong order hai, swap karo
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Bubble Sort Result: ", arr);
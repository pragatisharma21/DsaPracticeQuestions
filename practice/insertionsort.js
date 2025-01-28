let arr = [5, 3, 8, 4, 2];

for (let i = 1; i < arr.length; i++) {  // Start from second element
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {  // Backward compare aur shift karo
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = current;  // Correct position par insert karo
}

console.log("Insertion Sort Result: ", arr);
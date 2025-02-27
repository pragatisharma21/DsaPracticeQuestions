// Insertion Sort Implementation in JavaScript

arr = [64, 34, 25, 12, 22, 11, 90];
n = arr.length;

for (i = 1; i < n; i++) { // Loop from the second element to the last
    key = arr[i]; // Store the current element
    j = i - 1;

    while (j >= 0 && arr[j] > key) { // Shift elements to the right if they are greater than key
        arr[j + 1] = arr[j];
        j--;
    }
    
    arr[j + 1] = key; // Place the key at its correct position
}

console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]
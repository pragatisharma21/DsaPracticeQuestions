// Bubble Sort Implementation in JavaScript

arr = [64, 34, 25, 12, 22, 11, 90];
n = arr.length;

for (i = 0; i < n - 1; i++) { // Loop for passes
    for (j = 0; j < n - 1 - i; j++) { // Loop for comparisons
        if (arr[j] > arr[j + 1]) { // Swap if elements are in wrong order
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]

// Selection Sort Implementation in JavaScript

arr = [64, 34, 25, 12, 22, 11, 90];
n = arr.length;

for (i = 0; i < n - 1; i++) { // Loop to select the minimum element
    minIndex = i;

    for (j = i + 1; j < n; j++) { // Find the minimum element in the remaining array
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Swap the found minimum element with the first element
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]
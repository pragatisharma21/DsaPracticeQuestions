// Merge Sort Implementation in JavaScript

function mergeSort(arr, left, right) {
    if (left >= right) return; // Base case: Jab sirf ek element bacha ho, return kar do

    let mid = Math.floor((left + right) / 2); // Midpoint nikalna

    mergeSort(arr, left, mid);  // Left half ko recursively sort karo
    mergeSort(arr, mid + 1, right);  // Right half ko recursively sort karo

    merge(arr, left, mid, right); // Dono sorted halves ko merge karo
}

function merge(arr, left, mid, right) {
    let temp = []; // Temporary array to store sorted elements
    let i = left, j = mid + 1; // i -> left half ka start, j -> right half ka start

    // Jab tak dono halves me elements hain, compare karke chhota element add karo
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]); // Left half ka element chhota hai toh use add karo
            i++;
        } else {
            temp.push(arr[j]); // Right half ka element chhota hai toh use add karo
            j++;
        }
    }

    // Agar left half me kuch elements bache ho toh unhe add kar do
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    // Agar right half me kuch elements bache ho toh unhe add kar do
    while (j <= right) {
        temp.push(arr[j]);
        j++;
    }

    // Sorted elements ko wapas original array me daalna
    for (let k = 0; k < temp.length; k++) {
        arr[left + k] = temp[k];
    }
}

// Example usage:
let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);  // Output: [3, 9, 10, 27, 38, 43, 82]

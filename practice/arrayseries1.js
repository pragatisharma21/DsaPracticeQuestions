

function reverseArray(arr) {
    let len = arr.length; // Get the length of the array
    for (let i = 0; i < Math.floor(len / 2); i++) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

reverseArray(arr);

console.log("Reversed Array:", arr);


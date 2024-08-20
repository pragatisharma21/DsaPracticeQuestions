function checkSortedAndRotated(nums) {
    let count = 0; // Transition count track karne ke liye
    let n = nums.length;

    // Array ko loop karte hain aur transition count karte hain
    for (let i = 0; i < n; i++) {
        // Check karte hain agar current element agle element se bada hai
        if (nums[i] > nums[(i + 1) % n]) {
            count++; // Transition point count karte hain
        }
        // Agar transition count 1 se zyada ho jaye, toh false return karte hain
        if (count > 1) {
            return false;
        }
    }

    // Agar transition count 0 ya 1 hai, toh array valid rotated sorted array hai
    return count === 1 || count === 0;
}

// Example usage
console.log(checkSortedAndRotated([3, 4, 5, 1, 2])); // Output: true
console.log(checkSortedAndRotated([2, 1, 3, 4])); // Output: false
console.log(checkSortedAndRotated([1, 2, 3])); // Output: true

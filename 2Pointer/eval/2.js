function maxApples(weights, r) {
    // Sort the array of weights
    weights.sort((a, b) => a - b);

    // Use a Set to track picked apples
    const picked = new Set();

    // Iterate through the sorted array
    for (const weight of weights) {
        // Check if neither weight/r nor weight*r exists in the set
        if (!picked.has(weight / r) && !picked.has(weight * r)) {
            // Add the weight to the set
            picked.add(weight);
        }
    }

    // Return the size of the set
    return picked.size;
}

// Example usage:
const weights = [1 ,2, 3, 4, 5];
const r = 1; // Dynamic value of r
console.log(maxApples(weights, r)); // Output: 3
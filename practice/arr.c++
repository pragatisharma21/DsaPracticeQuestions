#include <iostream>
#include <algorithm> // for std::swap

void reverseArray(int arr[], int len) {
    for (int i = 0; i < len / 2; ++i) {
        std::swap(arr[i], arr[len - i - 1]);
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int len = sizeof(arr) / sizeof(arr[0]); // Calculate the array length

    std::cout << "Original Array: ";
    for (int i = 0; i < len; ++i) {
        std::cout << arr[i] << " ";
    }

    reverseArray(arr, len);

    std::cout << "\nReversed Array: ";
    for (int i = 0; i < len; ++i) {
        std::cout << arr[i] << " ";
    }

    return 0;
}

// This function takes two arrays as inputs
function same (arr1, arr2) {
  // If the length of the two arrays is not equal, return false
  if (arr1.length !== arr2.length) {
    return false
  }

  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // Find the index of the squared value of the current element in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2)

    // If the squared value does not exist in the second array, return false
    if (correctIndex === -1) {
      return false
    }

    // If the squared value exists in the second array, remove it from the array using splice
    arr2.splice(correctIndex, 1)
  }

  // If all elements in the first array have a squared value in the second array, return true
  return true
}

// Call the same function with two arrays as inputs
same([1, 2, 3, 2], [9, 1, 4, 4])

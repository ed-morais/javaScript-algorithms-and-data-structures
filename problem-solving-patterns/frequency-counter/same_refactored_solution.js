// This function takes two arrays as inputs
function same (arr1, arr2) {
  // If the length of the two arrays is not equal, return false
  if (arr1.length !== arr2.length) {
    console.log('Length of the two arrays is not equal')
    return false
  }

  // Create two empty objects to store the frequencies of elements in both arrays
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // Loop through the first array and count the frequency of each element
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  // Loop through the second array and count the frequency of each element
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  // Print the frequency counters for debugging purposes
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  // Loop through the keys in the first frequency counter object
  for (let key in frequencyCounter1) {
    // Check if the squared key exists in the second frequency counter object
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }

    // Check if the frequency of the squared key in the second frequency counter object is the same as the frequency of the original key in the first frequency counter object
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  // If all keys in the first frequency counter object have a squared key with the same frequency in the second frequency counter object, return true
  return true
}

// Call the same function with two arrays as inputs
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function anagram (str1, str2) {
  if (str1.length !== str2.length) {
    console.log('Words have different lengths')
    return false
  }
  for (let char of str1) {
    console.log(char)
  }

  for (let char of str2) {
    console.log(char)
  }
}

anagram('dictionary', 'indicatory')

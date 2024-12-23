/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    return str.toLowerCase().split("").filter(vowel => ["a","e","i","o","u"].includes(vowel)).length
}
console.log(countVowels("element is in here"))
module.exports = countVowels;
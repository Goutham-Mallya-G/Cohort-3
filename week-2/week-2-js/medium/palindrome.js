/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function filtering(str){
    let filter = ""
    for(let char of str){
      if((char >= 'a' && char<="z" ) || (char >= 'A' && char <= "Z") || (char >= "0" && char<= "9")){
        filter += char.toLowerCase()
      }
    }
    return filter
}

function isPalindrome(str) {
  let filtered = filtering(str)
  for (let i=0; i < filtered.length/2;i++){
    if(filtered[i]!=filtered[filtered.length-i-1]){
      return false;
    }
  }
  return true
}
console.log(isPalindrome("Madam"))
module.exports = isPalindrome;

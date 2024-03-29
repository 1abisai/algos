/* 
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "def";
const expected3 = "fed";


/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if(str.length === 0) return '';
    return reverseStr(str.slice(1)) +
    str[0];
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr(str3))
/*****************************************************************************/
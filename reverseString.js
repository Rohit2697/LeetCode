// Write a function that reverses a string. 
//The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
var reverseString = function (s) {
    const newArr = []
    let len = s.length - 1
    for (let i = len; i >= 0; i--) {
        newArr[len - i] = s[i]
    }
    for (let i = 0; i <= len; i++) {
        s[i] = newArr[i]
    }


};
let s=["h", "e", "l", "l", "o"]
reverseString(s)
console.log(s)
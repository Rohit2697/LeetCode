//link:https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
let s = "a good      example"
var reverseWords = function (s) {
    return s.split(' ').filter(word=>word).reverse().join(' ')
    
};

console.log(reverseWords(s))
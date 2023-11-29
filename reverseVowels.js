//link:https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

/*
Input: s = "hello"
Output: "holle"
*/

let s = "leetcode"
var reverseVowels = function (s) {
    const sttToarr = s.split('')
    const vowelArr = "aeiouAEIOU".split('')
    const getVowels = []
    sttToarr.forEach((letter, index) => {
        if (vowelArr.includes(letter)) {
            getVowels.push({ letter, index })
        }
    });

    for (let i = 0; i < getVowels.length; i++) {
        sttToarr[getVowels[i].index] = getVowels[getVowels.length - i - 1].letter
    }
    return sttToarr.join('')
};

console.log(reverseVowels(s))
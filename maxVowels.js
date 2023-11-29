//link:https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75


var maxVowels = function (s, k) {
    let t0=performance.now()
    let right = 0;
    let left = 0;
    let maxVowel = -Infinity
    let vowel = 0;
    let vowelOb = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    }
    for (right; right < s.length; right++) {
        if (vowelOb[s[right]]) vowel++
        if (right - left + true == k) {
            maxVowel = Math.max(maxVowel, vowel)
            if (vowelOb[s[left]]) {
                vowel -= 1;
            }
            left++
        }
    }
    console.log(performance.now()-t0)
    return maxVowel
    
};

let s = "abciiidef"
let k = 3

console.log(maxVowels(s, k))
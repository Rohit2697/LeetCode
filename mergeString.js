//link:https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&id=leetcode-75

var mergeAlternately = function (word1, word2) {
    let finalStr = ''
    let maxlen = word1.length >= word2.length ? word1.length : word2.length
    for (let i = 0; i < maxlen; i++) {
        finalStr = `${finalStr}${word1[i] ? word1[i] : ''}${word2[i] ? word2[i] : ''}`
    }
    console.log(finalStr)
};

let word1 = "ab"
let word2 = "pqrs"

mergeAlternately(word1, word2)
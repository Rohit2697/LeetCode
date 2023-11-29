// Given a string containing digits from 2-9 inclusive,
//  return all possible letter combinations that the number could represent.
//   Return the answer in any order.

// A mapping of digits to letters 
// (just like on the telephone buttons) is given below.
//  Note that 1 does not map to any letters.
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Input: digits = ""
// Output: []
// Input: digits = "2"
// Output: ["a","b","c"]

const digitObj = {
    "2": "abc",
    "3": "def",
    "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
}

const cartesian = (str1, str2) => {
    let newArr = []
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            newArr.push(str1[i] + str2[j])
        }
    }
    return newArr

}
var letterCombinations = function (digits) {
    if (!digits) return []
    else if (digits.length == 1) return digitObj[digits].split("")

    let i = 0;
    let newArr = digitObj[digits[i]]
    while (true) {
        if (!digits[i + 1]) return newArr
        newArr = cartesian(newArr, digitObj[digits[i + 1]])
        i++
    }
};

console.log(letterCombinations("232"))
// const str1=cartesian(digitObj["2"], digitObj["3"])
// console.log(cartesian(str1,digitObj["2"]))
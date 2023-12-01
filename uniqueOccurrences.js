//link:https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let obj = {}
    arr.forEach(ele => {
        if (obj[ele]) obj[ele]++
        else obj[ele] = 1
    })
    let occurrencesArr = []
    for (key in obj) {
      occurrencesArr.push(obj[key])
    }
    return Array.from(new Set(occurrencesArr)).length==occurrencesArr.length
};
let arr = [26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16, 17, 16, 2, 16, 20, 26, 16]
console.log(uniqueOccurrences(arr))
//link: https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
let nums = [1, 2, 3, 4, 5]
var increasingTriplet = function (nums) {
    let firstnum = undefined;
    let secondnumber = undefined
    for (element of nums) {
        if (element > secondnumber) return true
        else if (element > firstnum) secondnumber = firstnum
        else firstnum = element
    };
    return false



};

console.log(increasingTriplet(nums))
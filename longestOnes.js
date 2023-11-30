//link:https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
var longestOnes = function (nums, k) {

    let right = 0;
    let left = 0;
    let cpyK = k
    let maxOne = 0;
    let oneCount = 0;
    let sum = 0;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) oneCount++
        else if (nums[i] == 0 && cpyK != 0) {
            oneCount++
            cpyK--
        }
        else {
            maxOne = Math.max(maxOne, oneCount)
            i = right;
            right++
            oneCount = 0
            cpyK = k
        }

        console.log("one clunt: ", oneCount, nums[i], cpyK)

    }
    return Math.max(maxOne, oneCount)
};

let nums = [1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0,
    1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
let k = 9

console.log(longestOnes(nums, k))
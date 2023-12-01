//link:https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let sum = nums.reduce((prev, newVal) => prev + newVal)
    let leftSum = 0;
    // nums.forEach((nums[i], i) => {
    //     if (sum - leftSum - nums[i] == leftSum) return i
    //     else leftSum += nums[i]
    // })

    for (let i = 0; i < nums.length; i++) {
        if (sum - leftSum - nums[i] == leftSum) return i
        else leftSum += nums[i]
    }
    return -1


};
let nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))
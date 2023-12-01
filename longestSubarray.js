//link:https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75

var longestSubarray = function (nums) {
    let mustDelete = 1;
    let start = 0;
    let maxOne = 0;
    let oneCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) oneCount++
        else if (nums[i] == 0 && mustDelete != 0) mustDelete--
        else {
            maxOne = Math.max(maxOne, oneCount)
            i = start - 1;
            oneCount = 0
            mustDelete = 1;
            start++
        }



    }
    return oneCount == nums.length ? oneCount - 1 : Math.max(maxOne, oneCount)
};

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
console.log(longestSubarray(nums))
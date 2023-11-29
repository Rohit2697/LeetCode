//link:https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75

let nums = [-1, 1, 0, -3, 3]
var productExceptSelf = function (nums) {
    const suffix = [];
    const prefix = [];
    nums.forEach((element, index) => {
        if (index == 0) {
            prefix[index] = 1
        }

        else {
            prefix[index] = prefix[index - 1] * nums[index - 1]
        }
    });

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == nums.length - 1) {
            suffix[i] = 1
        }
        else {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }
    }

    return prefix.map((ele, index) => {
        return (ele * suffix[index]) == -0 ? 0 : (ele * suffix[index])
    })


};

console.log(productExceptSelf(nums))
//link:https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let distinctSet2Obj = {}
    nums2.forEach(ele => distinctSet2Obj[ele] = true);
    let distinctSet1Obj = {}
    nums1.forEach(ele => distinctSet1Obj[ele] = true);
    let arr1 = []
    for (key in distinctSet1Obj) {
        if (!distinctSet2Obj[key]) arr1.push(Number(key))
    }
    let arr2 = []
    for (key in distinctSet2Obj) {
        if (!distinctSet1Obj[key]) arr2.push(Number(key))
    }
    return [arr1, arr2]
};

let nums1 = [1, 2, 3, 3]
let nums2 = [1, 1, 2, 2]
console.log(findDifference(nums1, nums2))
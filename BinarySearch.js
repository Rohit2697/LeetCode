// Given an array of integers nums which is sorted in ascending order,
//  and an integer target, write a function to search target in nums. If target exists, 
//  then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let isFound = -1
    // if (low == high) {
    //     if (nums[low] == target) return isFound = low
    //     else return isFound
    // }
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target == nums[mid]) {
            isFound = mid

            break;
            //return isFound
        }
        else if (target > nums[mid]) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return isFound
};

console.log(search([-1,0,3,5,9,12], 9))
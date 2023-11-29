// Given an integer array nums, move 
// all 0's to the end of it while maintaining the relative
//  order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
let test = [0]


var moveZeroes = function (nums) {
    const newArr = []
    let countOf0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            newArr.push(nums[i])
        }
        else {
            countOf0++
        }
    }

    for (let i = 0; i < countOf0; i++) {
        newArr.push(0)
    }
    for (let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i]
    }
};
moveZeroes(test)
console.log(test)
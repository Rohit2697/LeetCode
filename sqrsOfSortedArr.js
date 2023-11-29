// Given an integer array nums sorted in non-decreasing order,
//  return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(nums) {
    let sqrArr=[];
    for (x in nums){
      sqrArr[x]=nums[x]*nums[x]  
    }
    return sqrArr.sort((a,b)=> a-b)
};
console.log(sortedSquares([-4,-1,0,3,10])) 
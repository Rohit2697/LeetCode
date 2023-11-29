//link:https://leetcode.com/problems/single-number/

//Input:
let nums =[1]
//Output: 4
var singleNumber = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) obj[nums[i]]++
        else obj[nums[i]] = 1
    }
    for(x in obj) {
        if(obj[x]==1) return x
    }
};
console.log(singleNumber(nums))

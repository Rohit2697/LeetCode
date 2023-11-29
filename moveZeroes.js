//link:https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
var moveZeroes = function (nums) {
    //let s=nums.filter(ele=>ele!=0).join(",")
    let count = 0
    let s = ""
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) count++
        else {
            s = s + nums[i] + ","
        }
    }
    for (let i = 1; i <= count; i++) {
        s = s + "0" + ","
    }
    nums.length = 0;
    s = s.slice(0, s.length - 1).split(",")
    for (let i = 0; i < s.length; i++) {
        //console.log(first)
        //if (s[i] == ",") continue
        nums.push(s[i])
    }

    //console.log(s)

};

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)
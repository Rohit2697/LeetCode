//Link:https://leetcode.com/problems/container-with-most-water/

let height = [1, 1]
var maxArea = function (height) {
    let max = 1;
    let pointer1 = 0
    let pointer2 = height.length - 1;

    while (pointer1 < pointer2) {
        const water = (height[pointer1] > height[pointer2] ? height[pointer2] : height[pointer1]) * (pointer2 - pointer1)
        if (water > max) max = water
        if (height[pointer1] > height[pointer2]) pointer2--
        else pointer1++
    }
    //console.log((height[pointer1] > height[pointer2] ? height[pointer2] : height[pointer1]) * (height - pointer1))
    //return max
    return max == 1 ? (height[0] > height[height.length - 1] ? height[height.length - 1] : height[0]) * (height.length - 1) : max

};
console.log(maxArea(height))

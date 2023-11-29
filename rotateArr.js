// // Given an array, rotate the array to the right by k steps, where k is non-negative.
// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]
// // const swap = (a, b) => {
// //     const x = b;
// //     b = a;
// //     a = x
// // }
// // const newArr = [];
// // let i = 0

// var rotate = function (nums, k) {
//     const last = nums.length - 1
//     if (k == 0) {

//         return nums

//     }
//     else {
//         const lastNumber = nums[last]
//         const remainingNum = nums.slice(0, last)
//         nums = [lastNumber, ...remainingNum]
//         // console.log(lastNumber, remainingNum, last,nums)
//         k--
//         // console.log("from else")
//         return rotate(nums, k)
//     }

// };
//const testArr = [3,99,-1,-100]
const testArr=[1,2]
//const testArr = [1,2,3,4,5,6,7]

var rotate = function (nums, k) {

    //const newArr=[]
   const len=nums.length-1
    for(let i=len;i>=0;i--){
        nums[i+k]=nums[i];
    }
    for(let j=k-1;j>=0;j--){
        nums[j]=nums.pop()
    }
        
    

}
   // nums=arr3



//rotate(testArr, 3)
//rotate([3,99,-1,-100],2)
rotate(testArr,5)

console.log(testArr)
// let x=[1,2,3,4]
// console.log(x.slice(1,3))


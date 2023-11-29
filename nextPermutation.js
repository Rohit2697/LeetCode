//link:https://leetcode.com/problems/next-permutation/
let nums = [3,2,1]

const returnNum = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
    }
    return str
}


const swap = (arr, pos1, pos2) => {
    let temp = arr[pos1]
    arr[pos1] = arr[pos2]
    arr[pos2] = temp

    return arr

}

var nextPermutation = function (nums) {

    const actualArr = [...nums]
    const actualNum = returnNum(nums)
  
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i == 0) return console.log(actualArr.reverse())
        if (nums[i] > nums[i - 1]) {
            nums = [...swap(nums, i, i - 1)]
            if (actualNum < returnNum(nums)) {
                return console.log( nums)
            }
        }
    }



};
const a='test'
const b='test1'

const c= `${a}${b}`
console.log(c)
//nextPermutation(nums)
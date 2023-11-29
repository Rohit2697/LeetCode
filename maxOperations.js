//link:https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75

var maxOperations = function (nums, k) {
    const obj = {}
    nums.forEach(num => {
        if (obj[num]) obj[num]++
        else obj[num] = 1
    })
    // console.log(obj)
    let operation = 0
    console.log("obj", obj, obj[undefined])
    nums.forEach(num => {
        let anothernum = (k - num)

        if (anothernum < 0) return
        if (anothernum == num) {
            if (obj[anothernum] > 1) {
                obj[anothernum] -= 2
                operation++
            }
        }
        else if (obj[anothernum] && obj[num] > 0 && obj[anothernum] > 0) {
            console.log(num, obj[num], anothernum, obj[anothernum])
            operation++
            obj[num]--
            obj[anothernum]--
        }

    })
    return operation

};
let nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2]
let k = 3
//maxOperations(nums, k)
console.log(maxOperations(nums, k))
// You are given two non-empty 
// linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading 
// zero, except the number 0 itself.

// Input: 
l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const convertToNumber = (arr) => {
    let num = ""
    for (let i = arr.length - 1; i >= 0; i--) {
        num = num + "" + arr[i]
    }
    return Number(num)
}
var addTwoNumbers = function (l1, l2) {
    const num1 = convertToNumber(l1)
    const num2 = convertToNumber(l2)
    const sum = num1 + num2
   
    return (sum + "").split("").reverse()
};

console.log(addTwoNumbers(l1, l2))
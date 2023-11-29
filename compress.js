//link: https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
var compress = function (chars) {
    if (chars.length == 1) {
        return 1
    }
    let current = chars[0]
    let count = 0;
    let s = "";
    for (ele of chars) {
        //console.log(ele)
        if (current == ele) {
            count++
        }
        else {
            // console.log(ele,current)
            if (count == 1) {
                s += current
            }
            else {
                s += current + count
            }
            current = ele
            count = 1


        }
    }
    if (count == 1) {
        s += current
    }
    else {
        s += current + count
    }

    chars.length=0;
    for(ele of s){
        chars.push(ele)
    }
    
    return chars.length
};




compress(chars)
 console.log(chars)

// let a = [1, 2, 3];

// function x(arr) {
//     arr.length = 0; // Clear the original array
//     arr.push(4, 5, 6); // Push new elements to the original array
// }

// x(a);
// console.log(a); // Output: [4, 5, 6]

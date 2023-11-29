//link:https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

var isSubsequence = function (s, t) {
    // let big = s.length >= t.length ? s : t
    // let small = big == s ? t : s
    //if (small == "") return true
    let pointer = 0;
    for (let i = 0; i < t.length; i++) {
        // console.log(pointer)
        //if (pointer == small.length - 1) return true
        if (t[i] == s[pointer]) pointer++
        else continue;
    }
    return pointer == s.length ? true : false
};

let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s, t))
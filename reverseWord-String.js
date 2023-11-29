// Given a string s, reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
const s = "Let's take LeetCode    con  test"
const reverseString = (str) => {
    const cpyStr = []
    const len = str.length - 1
    for (let x in str) {

        cpyStr.push(str[len-x])

    }
     //console.log(cpyStr.join(''))
    return cpyStr.join('')

}
var reverseWords = function (s) {
    const newStringArr = s.split(" ")
    const len = s.length - 1
    for (let x in newStringArr) {
        newStringArr[x] = reverseString(newStringArr[x])
        //console.log(newStringArr[x])
    }
    return newStringArr.join(" ")

};
//console.log("xyz".pop())
let x= reverseWords(s)
console.log(x)
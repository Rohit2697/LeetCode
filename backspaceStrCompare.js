//link: https://leetcode.com/problems/backspace-string-compare/?envType=daily-question&envId=2023-10-19


const removeHastag = (s) => {

    let condition = true;
    let newStr = s;
    while (newStr.includes('#')) {
        let findHasInx = s.indexOf('#');

        let newstrArr = newStr.split('')
        newstrArr.splice(findHasInx - 1, 2)
        newStr = newstrArr.join('')
        console.log(newStr)

    }
    return newStr
}
console.log(removeHastag("ab##"));

var backspaceCompare = function (s, t) {

};
//link: https://leetcode.com/problems/longest-common-prefix/

strs = ["flower", "flower", "flower", "flower"]
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) {
        return strs[0]
    }
    let substr = "";
    for (let i = 0; i < strs.length; i++) {

        if (!strs[i]) return substr
    }
    let x = strs[0];

    for (let a = 0; a < x.length; a++) {
        let included = false
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][a] == x[a]) {
                included = true
            }
            else {
                return substr
            }
        }
        if (included) {

            substr += x[a]

        }
    }
    return substr
};

console.log(longestCommonPrefix(strs))

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

s = "babad"
const isPalindrom = (s) => {
    return s == s.split('').reverse().join('')
}

var longestPalindrome = function (s) {
    let palindromSub = ''
    //let finalPalindromStr=''
    let high = -1
    if (!s) return
    if (s.length < 2) {
        return s[0]
    }
    let sub = s[0]
    let j = 0
    for (let i = 1; i < s.length; i++) {
        sub += s[i]

        const isPalindromStr = isPalindrom(sub)
        if (isPalindromStr) {
            
            palindromSub += longestPalindrome(s.substr(i+1))
            high = palindromSub.length

        }
        else if (!isPalindrom(sub)) {
           // const str = sub.slice(0, sub.length - 1)
            // if (str.length > high) {
            //     high = str.length
            //     palindromSub = str

            // }
            // j++
            // i = j
            // sub = s[j]
            return longestPalindrome(s)
        }
    }

    if (!palindromSub) {

        return longestPalindrome(s.substr(j + 1))
    }

    return palindromSub
};
console.log(longestPalindrome(s))



function isPalindrome(string) {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function findPalindromeSubstrings(string) {
    let result = '';
    let cut = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            let substring = string.slice(i, j);
            if (isPalindrome(substring)) {
                if (substring.length > 1 && result.length < substring.length) result = substring
                // result.push(substring);
            }
        }
    }
    const revStr = result.split('').reverse().join('')
    console.log(revStr)
    for (let i = 0; i < result.length; i++) {
        if (revStr[i] !== result[i])  return cut;
        cut++

    }
    return cut;
}

let string = "xyxale";
console.log(findPalindromeSubstrings(string));
// Output: ["aba", "bab", "aba"]
//xyxale
string = "banana";
//console.log(findPalindromeSubstrings(string));
// Output: ["anana", "nana", "ana", "na", "a", "a", "n", "n"]

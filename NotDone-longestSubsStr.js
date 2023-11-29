// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
//asjrgapa
const s = "asjrgapa"
var lengthOfLongestSubstring = function (s) {
   let subStrArr = []

   for (let x = 0; x < s.length; x++) {
      let str = s[x]

      subStrArr.push(str)
      for (let j = x + 1; j < s.length; j++) {

         if (str.includes(s[j])) j = s.length
         else {
            str += s[j]
            subStrArr.push(str)
         }
      }
   }
   let high = -1
   for (let i = 0; i < subStrArr.length; i++) {
      if (subStrArr[i].length > high) high = subStrArr[i].length
   }
   return high<0?0:high


};

console.log(lengthOfLongestSubstring(s)) 
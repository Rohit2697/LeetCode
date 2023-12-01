//link:https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75

var largestAltitude = function (gain) {
    let previosGain = gain[0]
    let newArr = [0, previosGain]
    let maxAltitude=Math.max(0,previosGain)
    for (let i = 1; i < gain.length; i++) {
        let nextAltitude=previosGain+gain[i]
        newArr.push(nextAltitude)
        previosGain=nextAltitude;
        maxAltitude=Math.max(maxAltitude,nextAltitude)
    }
    return maxAltitude
};

let gain = [-4, -3, -2, -1, 4, 3, 2]

console.log(largestAltitude(gain))
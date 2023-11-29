let nums1 = [3]
let nums2 = [-2,-1]
var findMedianSortedArrays = function (nums1, nums2) {
    const meargedArr = [...nums1, ...nums2].sort((a,b)=>a-b)
    console.log(meargedArr)
    //return meargedArr
    if (meargedArr.length % 2 === 0) {
        return ((meargedArr[Math.floor(meargedArr.length / 2 - 1)] + meargedArr[Math.floor(meargedArr.length / 2)]) / 2).toFixed(5)
    }
    else return (meargedArr[Math.floor(meargedArr.length / 2)]).toFixed(5)

};

console.log(findMedianSortedArrays(nums1, nums2))
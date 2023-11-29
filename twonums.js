var twoSum = function (nums, target) {

    // for (let i = 0; i < nums.length; i++) {
    //     let toBeFound = undefined;
    //     let toBeFoundIndex = undefined
    //     if (nums[i] == 0) {
    //         toBeFoundIndex = nums.findIndex((ele,index) => (target == ele && index!== i))
    //         return [i, toBeFoundIndex]
    //     }

    //     // if(target<0){
    //     //     toBeFound = nums[i] > target ? -nums[i] + target : -target + nums[i]
    //     // }
    //     // else{
    //         toBeFound =target-nums[i] 

    //     toBeFoundIndex = nums.findIndex((ele, index) => {
    //         return (toBeFound == ele && index !== i)
    //     });

    //     if (toBeFoundIndex == -1) continue
    //     return [i, toBeFoundIndex]


    // }
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        console.log("tes",map)
        if (map[diff]!==undefined) {
            
            return [map[diff], i]
        }
        map[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 11, 15], 9))


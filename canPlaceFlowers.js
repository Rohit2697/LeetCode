//link :https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

let flowerbed = [0, 0, 1, 0, 0]
let n = 1
var canPlaceFlowers = function (flowerbed, n) {
    let plantedFlower = n;
    for (let i = 1; i <= n; i++) {
        console.log("i",i)
        for (let j = 0; j < flowerbed.length ; j++) {
            console.log("j",j)
            if (flowerbed[j] == 1) {
                continue
            }
            else if (j == 0 && flowerbed[j] == 0) {
                if (flowerbed[j + 1] !== 1) {
                    flowerbed[j]=1
                    plantedFlower--
                    break;
                }
            }
            else if (j == flowerbed.length - 1 && flowerbed[j] == 0) {
                if (flowerbed[flowerbed.length - 2] !== 1) {
                    flowerbed[j] = 1
                    plantedFlower--
                    break;
                }
            }
            else {
                if (flowerbed[j - 1] !== 1 && flowerbed[j + 1] !== 1){
                    flowerbed[j] = 1
                    plantedFlower--
                    break;
                } 
            }
            console.log(flowerbed,j)
        }
    }
    return plantedFlower == 0 ? true : false
};

console.log(canPlaceFlowers(flowerbed,n))
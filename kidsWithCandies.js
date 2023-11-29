//link:https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/?envType=study-plan-v2&envId=leetcode-75

var kidsWithCandies = function (candies, extraCandies) {

    return candies.map((candie) => {
        let addedCandie = candie + extraCandies;
        return candies.every(candie => addedCandie >= candie)
    })

};
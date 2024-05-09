/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;
    for(val of nums) {
        if(val === 1) {
            currentCount++;
            if(currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
};

//----------------------------------------------
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, curr = 0;
    for (let k of nums) {
        max = Math.max(max, curr += k);
        if (!k) curr = 0;
    }
    return max;
};

//---------------------------------------------
var findMaxConsecutiveOnes = function(nums) {
    return nums.join('').split('0').reduce((max, ones) => Math.max(max, ones.length), 0);
};

//---------------------------------------------
var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(ones => ones.length));
};

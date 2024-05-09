/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] > nums[i + 1]) {
                count++;
            }
            if((i === nums.length - 1) && nums[0] < nums[nums.length - 1]) { //This is basically checking first and last element of array
                count++;
            }
            if (count > 1) {
                return false;
            }
        }
        return true;
};

//If you dont want to check first and last element of array using a seperate loop you can add this %
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] > nums[(i + 1) % nums.length]) { //add this % nums.length instead of extra if
                count++;
            }
            if (count > 1) {
                return false;
            }
        }
        return true;
};
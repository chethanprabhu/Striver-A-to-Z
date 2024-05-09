//https://leetcode.com/problems/single-number/description/
//My solution
var singleNumber = function(nums) {
    let obj = {};
    for(let i = 0 ; i < nums.length ; i++) {
        obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1
    }

    for(key in obj) {
        if(obj[key] === 1) {
            return key;
        }
    }
};


//XOR approach
var singleNumber = function(nums) {
    for(i = 1 ; i < nums.length ; i++) {
        nums[0] = nums[0] ^ nums[i]; //I am using nums[0] as res variable. You make it simple just use another res variable.
    }

    return nums[0];
};

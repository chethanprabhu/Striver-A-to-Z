//https://leetcode.com/problems/two-sum/description/
var twoSum = function(nums, target) {
    let obj = {}

    for(let i = 0 ; i < nums.length ; i++) {
        let diff = target - nums[i];
        if(diff in obj) {
            return [i, obj[diff]]
        }
        obj[nums[i]] = i
    }
};

//with map
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i <= nums.length - 1 ; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};
var removeDuplicates = function(nums) {
    let obj = {}
    for(index in nums) {
        obj[nums[index]] = obj[nums[index]] ? obj[nums[index]] + 1 : 1
    }
    return Object.keys(obj).map(Number);
};

//LESS INFLUENCE OF JS

var removeDuplicates = function(nums) {

    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    let j = 1;
    //2 pointer. One will hold at position where to add the next unique element. Other to iterate through the array
    while (j <= nums.length) {
        if(nums[i] !== nums[j]) {
            nums[i + 1] = nums[j];
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i;
};

var moveZeroes = function(nums) {
    let i = 0;
    let count = 0;
    while(i < nums.length && count < nums.length) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0)
        } else {
            i++;
        }
        count++
    }
};

//With less influence of JS - Better solution.
var moveZeroes = function(nums) {
    let zeroIndex = -1;
    for(let i = 0 ; i <= nums.length - 1 ; i++) {
        if(nums[i] === 0) {
            zeroIndex = i;
            break;
        }
    }

    if(!(zeroIndex + 1)) {
        return;
    }

    for(let i = zeroIndex ; i <= nums.length - 1 ; i++) {
        if(nums[i] !== 0) {
            nums[zeroIndex] = nums[i];
            nums[i] = 0; //this and above line we are basically swapping 2 numbers. But since we know 1 no is 0 we can assign directly
            zeroIndex++;
        }
    }
};

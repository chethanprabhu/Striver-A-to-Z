var missingNumber = function(nums) {
    let sum = 0;
    let maxElementInArray = -1;
    for(let i = 0 ; i <= nums.length - 1 ; i++) {
        sum += nums[i];
        if(nums[i] > maxElementInArray) {
            maxElementInArray = nums[i];
        }
    }

    if(maxElementInArray === nums.length - 1) {
        return maxElementInArray + 1;
    }

    return ((maxElementInArray * (maxElementInArray + 1)) / 2 ) - sum;
};

//--------------------------------------------------
//some other solitions
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);
	
	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};

//--------------------------------------------------------------
var missingNumber = function(nums) {
    return -nums.reduce((acc,num,i)=> acc+num-i-1,0);
};


//NON JS solution
var missingNumber = function(nums) {
    let res = 0;
    for(i = 0 ; i < nums.length ; i++) {
        res = res + nums[i];
    }

    return ((nums.length * (nums.length + 1)) / 2 ) - res;
};

//XOR method - BEST
var missingNumber = function(nums) { //XOR of 2 same numbers is 0. XOR of 2 different numbers is addition of those.
    let xor1 = 0;
    let xor2 = 0;

    for(i = 0 ; i < nums.length ; i++) {
        xor1 = xor1 ^ nums[i];
        xor2 = xor2 ^ (i)
    }
    xor2 = xor2 ^ nums.length

    return xor2 ^ xor1;
};

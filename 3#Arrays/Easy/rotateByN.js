/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * This is my solution. Passes all test cases but time complexity is bad
 */
var rotate = function(nums, k) {
    k = k % nums.length //if k is 8 and nums.length is 5. We need to rotate 3 times instead of 8
    for(let i = 1 ; i <= k ; i++) {
        nums.unshift(nums.splice(nums.length - 1,1)[0])
    }
};

//Better time complexity
var rotate = function(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    } // suppose  ----->---> [1,2,3,4,5] and k = 3
     reverse(0, nums.length-1); // reverse   <--<------ [5,4,3,2,1]
      reverse(0, k-1) // reverse first part ---><---- [3,4,5,2,1]
    reverse(k, nums.length-1)// reverse second part --->-----> [3,4,5,1,2]
     
 };
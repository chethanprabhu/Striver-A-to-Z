//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    x = x.toString().split("").map(Number);
    for(let i = 0 ; i < x.length/2 ; i++){
        if(x[i] !== x[x.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(123));
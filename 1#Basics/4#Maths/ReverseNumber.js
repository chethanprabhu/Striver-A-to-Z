//https://leetcode.com/problems/reverse-integer/
var reverse = function(x) {
    x = x.toString().split("").map(Number);
    let isNegative = isNaN(x[0]) ? true : false
    let end = 0;
    if(isNegative) {
        end = 1
    }
    let res = [];
    for(let i = x.length - 1 ; i >= end ; i--) {
        res.push(x[i]);
    }
    if(isNegative) {
        return 0 - res.join("")
    }
    return res.join("")
};

console.log(reverse(-123))

//BELOW IS ONLY FOR FAILING TEST CASES WHERE IF NUMBER IS MORE THAN INT LIMIT WE SHOULD RETURN 0

// var reverse = function(x) {
//     x = x.toString().split("").map(Number);
//     let isNegative = isNaN(x[0]) ? true : false
//     let end = 0;
//     if(isNegative) {
//         end = 1
//     }
//     let res = [];
//     for(let i = x.length - 1 ; i >= end ; i--) {
//         res.push(x[i]);
//     }
//     if(isNegative && 0 - res.join("") > -1 * 2**31) {
//         return 0 - res.join("")
//     } else if(res.join("") < 2**31){
//         return res.join("") 
//     } else {
//         return 0
//     }
// };

// console.log(reverse(-123))



//WITH LESS INFLUENCE OF JS - BETTER SOLUTION
// const n = 12350;

// const reverseNumber = (num) => {
//     let temp = num;
//     let result = 0;
//     while(temp) {
//         const digit = temp % 10;
//         result = (result * 10) + digit;
//         temp = Math.floor(temp / 10)
//     }
//     return result;
// }

// console.log(reverseNumber(n));
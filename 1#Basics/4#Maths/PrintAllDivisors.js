const number = 24; 

const allDivisors = (num) => {
    let res = [];
    for(let i = 1 ; i <= num ; i++) {
        if(num % i === 0) {
            res.push(i);
        }
    }
    return res;
}

console.log(allDivisors(number)); //1, 2, 3, 4, 6, 8, 12, 24

//The above solution is valid. But we are doing too many unnesassary iterations.
//Because if 1 is divisor. Then num / 1 is also a divisor. i.e 24
//If 2 is divisor. Then 24/2 is also a divisor.
// Let us list all
//  n    num/n
//  1    24
//  2    12
//  3    8
//  4    6
//  6    4
//  8    3 
//  12   2
//  24   1
//If you notice above. By the time n is 4, We got all the divistor i.e check n and num/n
//Hence for any number. We check no of divisors of sqrt(num). Then for every divisor. We do num/n. It will also be a divisor.

const allDivisors2 = (num) => {
    let res = [];
    let sqrtN = Math.floor(Math.sqrt(num))
    for(let i = 1 ; i <= sqrtN ; i++) {
        if(num % i === 0) {
            if(i !== num / i) { //important. Ex for 36. When i is 6. i and num/i is same. We should not push 6 twice
                res.push(i);
                res.push(num / i)
            } else {
                res.push(i);
            }
            
        }
    }
    return res;
}

console.log(allDivisors2(number)); //[1, 24, 2, 12, 3,  8, 4,  6]

//Note: This solution you won't get sorted list. If you want sorted then apply sorting logic.
// Time complexity is till O(n). But technically its O(sqrt(n)). Which means lot faster.
//https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1

const sumOfDivisors = (n) => {
    let final = 0;
    for(let i = 1 ; i <= n ; i++) {
        final = final + sumOfNth(i);
    }
    return final;
}

const sumOfNth = (num) => {
    let res = 0;
    for(let j = 1 ; j <= num ; j++) {
        if(num % j === 0) {
            res = res + j;
        }
    }
    return res;
}

console.log(sumOfDivisors(4));
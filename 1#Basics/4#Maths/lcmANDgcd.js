//https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1

const lcmANDgcd = (num1, num2) => {
    const numbers = [num1, num2]; //storing the original numbers bcoz we will manupulate these values for gcd
    const res = [];
    //GCD
    while(num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    res[0] = num1;

    //LCM
    [num1, num2] = numbers;
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let temp = max;
    while(temp % min !== 0) {
        temp = temp + max;
    }
    res[1] = temp;

    return res;

}

console.log(lcmANDgcd(14,8));
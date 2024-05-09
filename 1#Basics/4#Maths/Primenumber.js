//https://practice.geeksforgeeks.org/problems/prime-number2314/1
const isPrimeNumber = (num) => {
    let count = 0;
    for(let j = 1 ; j <= num ; j++) {
        if(num % j === 0) {
            count++;
        }
    }
    return count < 3 ? true : false;
}

console.log(isPrimeNumber(3));
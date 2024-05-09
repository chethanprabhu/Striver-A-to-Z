//https://practice.geeksforgeeks.org/problems/count-digits5716/1

CountDigits = (number) => {
    num = number.toString().split("").map(Number);
    return num.filter((n) => {
        return !(number % n) && n !== 0
    }).length
}

console.log(CountDigits(101));

// const n = 120;

// const countEvenlyDividingDigits = (num) => {
    
//     let count = 0;
//     let temp = num;
    
//     while(temp !== 0) {
//         const digit = temp % 10;
//         count = num % digit === 0 ? ++count : count;
//         temp = Math.floor(temp / 10);
//     }
    
//     return count;
// }

// console.log(countEvenlyDividingDigits(n));
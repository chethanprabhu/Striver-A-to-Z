//brute force - Kinda better brute force.
let number1 = 24 // 1, 2, 3, 4, 6, 8, 12 , 24
let number2 = 15 // 1, 3, 5, 15

const gcd = (n1, n2) => {
    for(let i = Math.min(n1, n2) ; i > 0 ; i--) {
        if(n1 % i == 0 && n2 % i == 0) {
            return i;
        }
    }
}

console.log(gcd(number1, number2)); // 3

//Using Euclidean Algorithm

// while(num2) {
//     let temp = num2;
//     num2 = num1 % num2;
//     num1 = temp;
// }
// return num1;
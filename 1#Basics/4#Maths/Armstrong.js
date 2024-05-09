//https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1
const armstrongNumber = n => {
    numArray = n.toString().split("").map(Number);
    let res = 0;
    numArray.forEach((item) => {
        res += item*item*item;
    })
    return res === n ? true : false;
}

console.log(armstrongNumber(153));
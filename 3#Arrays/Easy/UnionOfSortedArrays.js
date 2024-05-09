const findUnion = (arr1, arr2, n, m) => {
    let res = {};
    for(let i = 0 ; i < n + m ; i++) {
        if(i < n) {
            res[arr1[i]] = res[arr1[i]] ? ++res[arr1[i]] : 1
        } else {
            res[arr2[i - n]] = res[arr2[i - n]] ? ++res[arr2[i - n]] : 1
        }
    }
    return Object.keys(res);
}

//Without JS influence - Better solution
let arr1 = [2, 2, 3, 4, 5];
let arr2 = [1, 1, 2, 3, 4];

// arr1 = [...arr1, ...arr2];

// let obj = {}
// for(let i = 0 ; i <= arr1.length -1; i++) {
//     obj[arr1[i]] = obj[arr1[i]] ? ++obj[arr1[i]] : 1
// }

// arr1 = Object.keys(obj).map(Number)
// console.log(arr1)
let i = 0;
let j = 0
let res = [];
while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
        if(res[res.length - 1] !== arr1[i]) {
            res.push(arr1[i]);
        }
        i++;
    } else {
        if(res[res.length - 1] !== arr2[j]) {
            res.push(arr2[j]);
        }
        j++;
    }
}
while(i < arr1.length) {
    if(res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i])
    }
    i++
}

while(j < arr2.length) {
    if(res[res.length - 1] !== arr2[j]) {
        res.push(arr2[j])
    }
    j++
}
console.log(res)
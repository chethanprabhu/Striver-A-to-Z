const findIntersection = (arr1, arr2, n, m) => {
    let res = {};
    for(let i = 0 ; i < n + m ; i++) {
        if(i < n) {
            res[arr1[i]] = res[arr1[i]] ? ++res[arr1[i]] : 1
        } else {
            res[arr2[i - n]] = res[arr2[i - n]] ? ++res[arr2[i - n]] : 1
        }
    }
    let final = [];
    for(key in res) {
        if(res[key] > 1) {
            final.push(key);
        }
    }
    return final;
}

//With less influence of JS
let arr1 = [3,4,4,4,6,9,12];
let arr2 = [1,3,4,4,7,9,10, 12] // [3, 4, 4, 9]

let i = 0;
let j = 0;
let res = [];
while (i < arr1.length && j < arr2.length) {
    if(arr1[i] > arr2[j]) {
        j++;
    } else if(arr1[i] < arr2[j]) {
        i++;
    } else {
        res.push(arr1[i]);
        i++;
        j++;
    }
}

console.log(res);

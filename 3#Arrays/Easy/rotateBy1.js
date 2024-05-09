let arr = [1,4,1,6,7,2];

arr.push(arr.splice(0,1)[0]);

console.log(arr); //[4,1,6,7,2,1]

//WITH LESS INFLUENCE OF JS

let arr = [1,2,3,4,5]; // [5,1,2,3,4]

let temp = arr[arr.length - 1];

for(i = arr.length - 1 ; i > 0 ; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = temp;

console.log(arr);

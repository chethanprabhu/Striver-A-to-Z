const largest = (arr) => {
    if(!arr.length) {
        return "Empty array"
    }
    let tempLarge = arr[0];
    arr.forEach((item) => {
        if(tempLarge < item) {
            tempLarge = item;
        }
    })
    return tempLarge;
}

let arr = [1,2,7,1,8,5,2];
console.log(largest(arr));
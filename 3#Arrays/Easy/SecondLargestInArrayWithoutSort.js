const secondLargest = (arr) => {
    let first = -99999999999;
    let second = -99999999999;
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i]
        } else if (arr[i] < first && arr[i] > second) {
            second = arr[i]
        }
    }
    return second;
}

let arr = [1,2,7,1,8,5,2];
console.log(secondLargest(arr));
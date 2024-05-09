searchInSorted = (arr, K) => {
    for(let val of arr) {
        if(val === K) {
            return 1;
        }
    }
    return -1;
}

searchInSorted([1,2,3,4,5], 3);
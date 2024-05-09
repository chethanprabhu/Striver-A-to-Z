let x = [[0, 1, 1, 1],
           [0, 0, 1, 1],
           [1, 1, 1, 1],
           [0, 0, 0, 0]]
           
 const MaxOnes = (arr) => {
     let obj = {};
     for(let i = 0 ; i < arr.length ; i++) {
         for(let j = 0 ; j < arr[i].length ; j++) {
             if(arr[i][j] === 1) {
                 obj[i] = obj[i] ? ++obj[i] : 1
             }
         }
     }
     let max = 0;
     for(key in obj) {
         if(obj[key] > obj[max]) {
             max = key;
         }
     }
     return max;
 }
 
 console.log(MaxOnes(y));
 //others
const rowWithMax1s = (arr, n, m) => {  
    let row = 0;
    let col = m-1;
    let ans= -1;

    while(row<n&&col>=0){
        if(arr[row][col]== 0){
            row++;
        } else if(arr[row][col]== 1){
            ans = row;
            col--;
        }
    }
    return ans;
}
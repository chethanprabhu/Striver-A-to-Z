//https://leetcode.com/problems/search-a-2d-matrix/description/
//My Solution
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let found = false;
    matrix.forEach((arr) => {
        arr.forEach((item) => {
            if(item === target) {
                found = true
            }
        })
    })
    return found;
};

//Online solutions
// This is using binary search approach on each row. Since in leetcode the matrix will be
//sorted in asc order. But my above solution works for unsorted array. Because I did not know
// that the array will be sorted
var searchMatrix = function(matrix, target) {
    let start = 0, end = (matrix.length * matrix[0].length) - 1
      
      while(start <= end) {
          let mid = Math.floor((start + end) / 2)
          let midNum = 
              matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length]
          
          if(midNum === target) return true    
          else if(midNum < target) start = mid + 1
          else end = mid - 1
      }
      return false
  }
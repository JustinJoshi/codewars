//take in an array, and array
//return sum of array elements
function arrayPlusArray(arr1, arr2) {
  //take all elements from both arrays, add them together
  //loop through arrays, add numbers to a sum
    console.log(arr1.reduce((acc,c) => acc + c, 0) + arr2.reduce((acc,c) => acc + c, 0))
}

arrayPlusArray([2,2,2],[1,1,1]) // 9
arrayPlusArray([1,2,3],[4,5,6]) // 21
arrayPlusArray([3,3,3],[4,4,4]) // 21
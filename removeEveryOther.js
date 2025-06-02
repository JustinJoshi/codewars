//P: array, and any type of element
//R: we will be returning a new array that does not contain any of the second elements
//E: [a,b,c,d] [a,c]
//P:
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
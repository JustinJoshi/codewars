// function sumOfMinimums(arr) {
//     let newArr = []
//   arr.forEach( (x) => newArr.push(x.sort(function (a,b){return a-b})[0]) )
//   return (newArr.reduce( (acc,c) => +acc + +c, 0 ))
// }

// Success!!

// Better solution
// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}
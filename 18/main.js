// function flattenAndSort(array) {
//     return (array.join().split(',').sort(function (a,b){ return (a-b) })).map( (x) => +x )
//   }



function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}


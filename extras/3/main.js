let sum = []
function dontGiveMeFive(start, end){

  for(let i = 0; i < end; i++){
    sum.push(i+1)
  }
const filtered = sum.filter( (x) => x.slice('')!==5 )
console.log(filtered)

}

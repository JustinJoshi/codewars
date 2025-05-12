let sum = []
function dontGiveMeFive(start, end){

  for(let i = 0; i < end; i++){
    sum.push(i+1)
  }
const filtered = sum.filter( (x) => x.slice('')!==5 )
console.log(filtered)

}


function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }


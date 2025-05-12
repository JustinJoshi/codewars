function gimme (triplet) {
    let newArr = []
    triplet.map( (x,i) => {
        newArr.push(x)
    } )
    triplet.sort( (a, b) => a - b)
    console.log(triplet)
    triplet.forEach( (x) => {
        if(x === triplet[1]){
            newArr.forEach( (x,i) => {
                if(x === triplet[1]){
                    return i
                }
            } )
        }
    } )
}

function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }
function oddOrEven(array) {
    let sum = 0
    array.forEach( (x) => sum += x )
    if(sum % 2 === 0){
        console.log('even')
    }else{
        console.log('odd')
    }
  }
oddOrEven([0, 1, 7])

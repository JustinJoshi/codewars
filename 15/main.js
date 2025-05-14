function smallEnough(a, limit){
    let arr = []
    a.map( (x) => {
        if(x > limit){
            arr.push(false)
        }else{
            arr.push(true)
        }
    } )
    if(arr.includes(false)){
        return false
    }else{
        return true
    }
}

// Success!!

// Better solution:

function smallEnough1(a, limit){
    return Math.max(...a) <= limit
  }

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

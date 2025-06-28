//2 args, array of nums, divisor as number
//return all numbers divisible by divisor, return array of numbers
function divisibleBy(numbers, divisor){
    //take numbers, loop through, filter elements divisible by divisor
    return numbers.filter((e) => e%divisor === 0 )
}

// const divisibleBy = (n,d) => n.filter((e) => e%d)

divisibleBy([1,2,3,4,5,6],2) //[2,4,6]
divisibleBy([3,6,9,12],3) //[3,6,9,12]
divisibleBy([10,20,21,30],10) //[10,20,30]
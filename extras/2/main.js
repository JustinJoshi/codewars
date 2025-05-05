function plegtbter(arr){
    let newArr = []
    arr.split('').forEach( (x,i) =>{
        if(x == x.toUpperCase()){
            newArr.push(i)
        }
    } )
    return newArr
}

// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]


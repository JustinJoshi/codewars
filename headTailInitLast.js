//PREP
//P: array, numbers, no empty arrays
//R: a value from the array
//E:
//P:

//return the first value, by grabbing the fist element
function head(arr){
    return arr[0]
}

//return all elements in the array except for the first element
function tail(arr){
//return a shallow copy of the array, except for the first element
    return arr.slice(1, arr.length)
}

//return all elements of the array, excluding the last element
function init(arr){
//return a shallow copy of the array, that does not include the last index
    return arr.slice(0, arr.length - 1)
}

//return the last value, grab the length of the array and subtract 1 to get the last element of the array
function last(arr){
    return arr[arr.length - 1]
}

//https://www.codewars.com/kata/54592a5052756d5c5d0009c3
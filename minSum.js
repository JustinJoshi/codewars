//PREP
// given array of integers, find min sum from summing each two integer product
//P: given array of numbers, positives, intigers only, even
//R: return a number
//E:
//P:

// minSum([12,6,10,26,3,24]) // 26*3 + 24*6 + 12*10 === 342
// minSum([9,2,8,7,5,4,0,6]) // 9*0 + 2*8 + 7*4 + 5*6 === 74

minSum([5,4,2,3]) // 5*2 + 4*3 === 22

    //Lets use the above example to explain our code. What we need to do to solve this challenge is sort the array, create a copy of half of the array (the smallest numbers), then multiply them by the largest numbers, and finally add them together to get our answer
function minSum(arr) {
    //sort the array in ascending order, 
  return    arr.sort( (a,b) => a-b )
    //returns [2,3,4,5]
    //now, create a copy of just the first half of the array
            .slice(0, arr.length/2)
    //returns [2,3]
    //Finally, we perform the reduction on the shallow copy. This method will loop through the array, and grab each element. 
    // Then will take each element (curr), and multiplies it by some expression. This expression grabs a certain index of the array(notated by the []). 
    // The index is defined by arr.length(which is 4), minus the current index(at first run, is 0), then subtracts 1. 
    // This will give us the last index of the array, which will always be the largest element in our array. It will run for each element within the shallow copy.
    //Since our arrays are always even, the function will have successfully multiplied the smallest numbers with the largest numbers, and returned the sum of the result
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
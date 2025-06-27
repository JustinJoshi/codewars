//always taking in a number.  //return array, element are always numbers


function countBy(x, n) {
//iterate on X by itself N times
let newVar = x
    for(let i = 1; i<=n; i++){
        newVar += x
        console.log(newVar)
    }
}

countBy(1,10) //[1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) --> //[2,4,6,8,10]
// countBy(3,5) --> //[3,6,9,12,15]
 
function betterThanAverage(classPoints, yourPoints) {
  let total = 0
  classPoints.forEach((x) => total += x )
  if(total/classPoints.length >= yourPoints){
    return false
  } else{
    return true
  }
}
​
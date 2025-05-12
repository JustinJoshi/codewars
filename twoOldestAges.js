function twoOldestAges(ages){
    console.log(ages.sort(function(a,b){return a-b;}).slice(-2))
  }
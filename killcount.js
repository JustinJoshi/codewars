function killcount(counselors, jason){
  var arr = []
  for (var i = 0; i < counselors.length; i++){
    if (counselors[i][1] < jason) {
      arr.push(counselors[i][0])
    }
  }
  return arr;
}
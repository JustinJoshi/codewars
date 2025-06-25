//always space if two words, at least one word, always string
//return array, each element is a string, with word and a space then length

function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

addLength("apple ban"); // ["apple 5", "ban 3"]
addLength("you will win"); // ["you 3", "will 4", "win 3"]
addLength("you are awesome"); // ["you 3", "are 3", "awesome 7"]

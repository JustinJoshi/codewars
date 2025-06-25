//P: we are taking in a array of items, and a number representing one of the items
//R: we are returning the item that the number represents, and .name after it
//E: ([a,b,c,d], 1) returns a.name
//P
function duckDuckGoose(players, goose) {
//We use the return keyword to tell the function to spit out what comes after
//players is our array
  
//We use [] after players to index the array, so players[] will index the array with the number inside the brackets
  
//goose represents the element position of the number, which is always 1 more than its index. So we -1 to get its index
  
//We use the % (modulus) operator to divivde what comes before by what comes after. Then, we take whatever is the remainder
//from that operation
  
//Lastly, we add the .name property
  return players[(goose-1)%players.length].name
}
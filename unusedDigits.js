function unusedDigits(...args) {
  // Given: varying # of integer arguments
  // define the parameter
  // create a variable   
  
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // change the arguments from integer into a string   
  //join 
  let numStr = args.join('');  
  
  // filter out those that are not present in any of the arguments
  // Return: a sorted string of digits
  return numbers.filter(element => !numStr.includes(element)).join('')
}
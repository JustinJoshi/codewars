function chineseZodiac(year){
  let years =['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  let attribute = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  let current = year - 1924;
 
  let i = Math.floor(current%12); 
  let j = Math.floor((current/2)%5);

  return attribute[j] + ' '+years[i];
}
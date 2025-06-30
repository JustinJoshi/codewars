//take in string, spaces between new words
//return array, each word in an element
function stringToArray(string){
//use split method to seperate words into elements
    return string.split(' ')
}

// const newStringToArray = (string) => (string.split(' '))

// stringToArray('Hello World') //['Hello', 'World']
// stringToArray('Hello there Bob!') //['Hello', 'there', 'Bob!']
// stringToArray('My name is Justin') //['My', 'name', 'is', 'Justin']

// newStringToArray('Hi bob')
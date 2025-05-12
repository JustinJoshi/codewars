function filter_list(arr) {
    let newArr = []
    arr.filter( (word) => {
      if(!typeof word === 'string'){
        newArr.push(word)
      }else if(typeof word === 'number'){
        newArr.push(word)
      }
    })
    console.log(newArr)
  }

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
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
filter_list([1,2,"a","b"])
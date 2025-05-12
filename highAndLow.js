function highAndLow(numbers){
    let nums = []
    let temp = []
    let tempNums = 0
    let positive = 0
    let negative = 0
    let answer = 0
    numbers.split('').forEach ( (x) => {
        if(x > 0 || x < 0 || x === 0){
            temp.push((+x))
        }else if(x === '-'){
            temp.push((x))
        }else if(x === ' '){
            temp = temp.join()
            temp = temp.replaceAll(',','')
            nums.push(temp)
            temp = []
        }else{
            temp.push((+x))
        }
    })
    if(temp.length > 0){
        temp = temp.join()
        temp = temp.replaceAll(',', '')
        nums.push(temp)
        temp = []
    }
    positive = +nums[0]
    nums.forEach( (x) => {
        if(+x > positive){
            positive = +x
    }})
    negative = +nums[0]
    nums.forEach( (x) => {
        if(+x < negative){
            negative = +x
        }
    } )
    answer = `${positive} ${negative}`
    return answer
    }

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
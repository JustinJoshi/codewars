function rowWeights(array){
    let newArr = []
    let team2 = []
    for(let i = 0; i < array.length; i++){
        if(i%2 === 0){
            newArr.push(array[i])
        }else{
            team2.push(array[i])
        }
    }
    return [newArr.reduce( (acc,c) => +acc + +c ), team2.reduce( (acc,c) => acc + c )]
}



function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}
function checkExam(array1, array2) {
    var score = 0;
      
      for (var i = 0; i < array1.length; i++){
      
        if (array1[i] == array2[i]) {
        
        score += 4;
        
        }
        
          else if (array2[i] === ""){
    
              score += 0
        
          }
        
         
        else {
        
        score -= 1
        
        }
    
      
      }
      
      if (score < 0) {
      
        score = 0
        
      }  
     
     return score
     
    }
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))


function bubbleSorter(input){

  if(!Array.isArray(input)){
    throw new TypeError('Your input needs to be an array');
  }

 var theLength = input.length;
 var theNum;

    for(var i = 0; i < input.length; i++){

      if(input[i + 1] === undefined){
          console.log(input);
          return input;
      }else if(input[i] > input[i+1]){
          var tempNum = input[i];
          input[i] = input[i+1];
          input[i + 1] = tempNum;
      console.log(input);
      }
    }





}

module.exports = bubbleSorter;
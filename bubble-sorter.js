

function bubbleSorter(input){

  if(!Array.isArray(input)){
    throw new TypeError('Your input needs to be an array');
  }

 for(var j = 0; j < input.length; j++){
    for(var i = 0; i < input.length; i++){
      if(input[i] > input[i+1]){
        var tempNum = input[i];
        input[i] = input[i+1];
        input[i + 1] = tempNum;
      }
    }
  }

 return input;

}

module.exports = bubbleSorter;
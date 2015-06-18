

function bubbleSorter(input){

  if(!Array.isArray(input)){
    throw new TypeError('Your input needs to be an array');
  }

tempArr = [];



  input.forEach(function(currelement, index, arr){
    //validation of the last index
    if(typeof index[i+1] !== 'number'){
      //at the end, jsut take the last value and recurse here starting from the next index.. 0,1,2,3 etc..
      return false
    }


    if(currelement < currelement[index+1]){
      //the first number is smaller
      //don't switch the order, move on tp the next index/recurse?
    }
    else{
      //here current ele is smaller than the next ele
      //test for the above line

      //switch the elements place
      //splice out all from before,

    }



  })






  for(var i = 0; i < input.length; i++){


    if(input[i] < input[i+1]){
      //do nothing and move on to the next nums
    }
    else{

    }
  };






}

module.exports = bubbleSorter;
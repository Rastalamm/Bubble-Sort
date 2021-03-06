function _bubbleSorter(sortMe){

  if(!Array.isArray(sortMe)){
    throw new TypeError('Your sortMe needs to be an array');
  }

  for(var j = 0; j < sortMe.length; j++){
    for(var i = 0; i < sortMe.length; i++){
      if(sortMe[i] > sortMe[i+1]){
        var tempNum = sortMe[i];
        sortMe[i] = sortMe[i+1];
        sortMe[i + 1] = tempNum;
      }
    }
  }
  return sortMe;
}

//Setting the bubble short to the Array prototype
Array.prototype.bubbleSort = _bubbleSorter;

module.exports = {

  bubbleSorter : _bubbleSorter

};
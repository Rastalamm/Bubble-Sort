
function runBubbleSort(){



}


var bubbleSortApp = (function (){


  var sortingInputValue = [];

  var numberInput;
  var dotHouse = document.getElementById('dot_house');

    document.getElementById('submit_button').addEventListener('click', function(){
      _sorter([3, 4, 78, 89, 8, 1, 875, 994, 5, 2, 4, 56]);
      _display(sortedInput);
    });

var sortedInput;
  function _sorter(sortMe){

    if(!Array.isArray(sortMe)){
      throw new TypeError('Your sortMe needs to be an array');
    }

    for(var j = 0; j < sortMe.length; j++){
      for(var i = 0; i < sortMe.length; i++){
        if(sortMe[i] > sortMe[i+1]){
          var tempNum = sortMe[i];
          sortMe[i] = sortMe[i+1];
          sortMe[i + 1] = tempNum;
          console.log('running');
        }
      }
    }
    sortedInput = sortMe;
    return sortMe;
  }




  function _display(sortedArr){

    for(var i = 0; i < sortedArr.length; i++){
      var aBox = document.createElement('div');
      aBox.setAttribute('id', 'box' + i );
      aBox.setAttribute('class', 'a_box');
      aBox.innerHTML = i;
      aBox.style.width = sortedArr[i] *10 + 'px';
      console.log(aBox.offSetHeight)
      dotHouse.appendChild(aBox);
    }




  }



  return{
    bubbleSorter : _sorter,

  }

})();

// //Setting the bubble short to the Array prototype
// Array.prototype.bubbleSort = _bubbleSorter;


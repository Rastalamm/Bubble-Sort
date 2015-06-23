
var bubbleSortApp = (function (){

  var sortingInputValue = [];
  var numberInput;
  var dotHouse = document.getElementById('dot_house');
  var arrayInput = [];
  var sortedInput = [];
  var colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];;
  var colorArrayLength = colorArray.length;

  document.getElementById('sort_button').addEventListener('click', function (){

    arrayInput = [];

    if(typeof document.getElementById('numbers_to_sort').value === 'number' || document.getElementById('numbers_to_sort').value <1 ){
      alert('I need to be big number!')
    }

    _randomArray(document.getElementById('numbers_to_sort').value)

    _display(arrayInput);

    setInterval(function(){
      _sorter(arrayInput);

    } , 100);

  });



  function _randomArray(num){

    num = num > 600 ? 600 : num;

    for( var i = 0; i < num; i++){
      arrayInput.push(Math.floor(Math.random()* num));
    }
  }

  function _display(sortedArr){

    dotHouse.innerHTML = '';

    for(var i = 0; i < sortedArr.length; i++){
      var aBox = document.createElement('div');
      aBox.setAttribute('id', 'box' + i );
      aBox.setAttribute('class', 'a_box');
      randomColor = Math.floor(Math.random() * (colorArrayLength + 1))
      aBox.style.backgroundColor = colorArray[randomColor];
      aBox.style.height = sortedArr[i] + 'px';
      dotHouse.appendChild(aBox);
    }
  }

  function _sorter(){

    var first;
    var second;

    for(var i = 0; i < arrayInput.length - 1; i++){

      first = parseInt(document.getElementById('box' + i).style.height);
      second = parseInt(document.getElementById('box' + (1+i)).style.height);

      if(first > second){
        document.getElementById('box' + i).style.height = second + 'px';
        document.getElementById('box' + (1+i)).style.height = first + 'px';
      }
    }
  }

  return{
    sort : _sorter
  }

})();
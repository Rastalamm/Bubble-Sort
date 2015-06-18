var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var bubbleSorter = require('../bubble-sorter.js');

  console.log(bubbleSorter);

describe('Bubble Sorter', function () {
  describe('Bubble Function', function () {

    it('should be a function', function () {
      bubbleSorter.should.be.a.function;
    });

    it('the input should be an array', function () {

      bubbleSorter([1,3]).should.equal.true;

    });




  });
});
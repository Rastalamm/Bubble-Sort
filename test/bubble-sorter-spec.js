var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var bubbleSorter = require('../bubble-sorter.js');

describe('Bubble Sorter', function () {
  describe('Buble Function', function () {

    it('should be a function', function () {
      bubbleSorter.should.be.a.function;
    });

  });
});
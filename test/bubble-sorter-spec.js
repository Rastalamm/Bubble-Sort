var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var bs = require('../bubble-sorter.js');



describe('Bubble Sorter', function () {
  describe('Bubble Function', function () {

    it('should be a function', function () {
      bs.should.be.a.function;
    });

    it('depp equl', function () {
      bs.bubbleSorter([3,2,1]).should.deep.equal([1,2,3])
    });

  });
});
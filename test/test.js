var stringCalculator = require("../script");

var assert = require('chai').assert;

describe('step1', function() {
    it('should return 0 if empty argument', function() {
      assert.equal(stringCalculator.add(""),0);
    })
    it('should return the number passed as argument, here 1', function() {
        assert.equal(stringCalculator.add("1"),1);
    })
    it('should return the sum of the number passed as argument, here 3', function() {
        assert.equal(stringCalculator.add("1,2"),3);
    })
    it('should not return 3', function() {
        assert.notEqual(stringCalculator.add("1,1"),3);
    })
})
var stringCalculator = require("../script");

var assert = require('chai').assert;
var expect = require('chai').expect;

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

describe('step2', function() {
    it('should return 3 when infinite numbers added inside the argument string', function() {
      assert.equal(stringCalculator.add("1,1,1"),3);
    })
    it('should return 5', function() {
        assert.equal(stringCalculator.add("1,1,1,1,1"),5);
    })
})

describe('step3', function() {
    it('should return 6 if \n separator is used instead of ,', function() {
      assert.equal(stringCalculator.add("1\n2,3"),6);
    })
})

describe('step4', function() {
    it('should return 3 if \\[delimiter]\n[numbers...] is used', function() {
      assert.equal(stringCalculator.add("//;\n1;2"),3);
    })
})

describe('step5', function() {
  it('should throw an exception with the message "negatives not allowed: [negative number list]"', function() {
    expect(() => stringCalculator.add("1,4,-1")).to.throw(Error, "negatives not allowed:-1");
  })
})

describe('step6', function() {
  it('should return 2, if there are numbers > 1000 they will be skipped"', function() {
    assert.equal(stringCalculator.add("2,1000"),2);
  })
})
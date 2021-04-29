var stringCalculator = require("../script");

var assert = require('chai').assert;

describe('step1', function() {
    it('should return 0 if empty argument', function() {
      assert.equal(stringCalculator.add(""),0);
    })
})
var assert = require('assert');

describe('Tests for function one', () => {
    describe('Test Case 1 #fnOne()', () => {
        it ('should return -1 when the value is not present', () => {
            assert.equal([1,2,3,4,5].indexOf(4), 3);
        });
    });
});
import sum from './sum.js';
import { expect } from 'chai';

describe('sum', function() {

    it('should return the sum of two arguments', function () {
        expect(sum(1, 2)).to.equal(3);
    });
});
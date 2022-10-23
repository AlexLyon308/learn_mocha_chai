import person from "./message.js";
import { assert, expect } from 'chai';

describe('JS learn Chai Mocha ', function() {

  it('test 1', function () {
      
      expect(person.fullname()).to.equal("Avita Lisbaron");
      
  });

  it('test 2', function () {
      
    assert.equal(person.firstname + " " + person.lastname,"Avita Lisbaron","The firstname is not correct");

});
});
import person from "./js_collection.js";
import { assert, expect } from 'chai';

describe('JS learn Chai Mocha ', function() {

  it('test 1', function () {
      
      expect(person.fullName()).to.equal("Avita Lisbaron");
      
  });

  it('test 2', function () {
      
    assert.equal(person.firstName + " " + person.lastName,"Avita Lisbaron","The firstname is not correct");

});
});
import person from "./js_collection.js";
import { assert, expect } from 'chai';

describe('JS learn Chai Mocha ', function() {

  before('Execute Before All Tests', function(){
    console.log('Execute Before All Tests');
});

beforeEach('Execute Before Each Test', function(){
    console.log('Execute Before Each Test');
});

after('Execute After All Tests', function(){
    console.log('Execute After All Tests');

});

afterEach('Execute After Each Test', function(){
    console.log('Execute Before Each Test');
});

  it('test 1', function () {
      
      expect(person.fullName()).to.equal("Avita Lisbaron");
      
  });

  it('test 2', function () {
      
    assert.equal(person.firstName + " " + person.lastName,"Avita Lisbaron","The firstname is not correct");

});
});
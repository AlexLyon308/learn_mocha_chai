import person from "./js_collection.js";
import { assert, expect } from 'chai';

describe('JS learn Chai Mocha ', function() {
  
  this.timeout(1000); 

  before('Execute Before All Tests', function(){
    console.log('All tests are being executed');
});

beforeEach('Execute Before Each Test', function(){
    
    console.log('The test has started');
});

after('Execute After All Tests', function(){
    console.log('All tests have finished and showed the final result');

});

afterEach('Execute After Each Test', function(){
    
    console.log('The test has finished and showed result');
});

  it('test 1', function (done) {
      
      expect(person.fullName()).to.equal("Avita Lisbaron");
      setTimeout(done,500);

  });

  it('test 2', function (done) {
       
    assert.equal(person.firstName + " " + person.lastName,"Avita Lisbaron","The firstname is not correct");
    setTimeout(done,500); 
});
});
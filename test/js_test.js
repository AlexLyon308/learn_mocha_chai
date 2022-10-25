import person from "./js_collection.js";
import people from "./js_collection2.js";
import { assert, expect } from 'chai';

describe('JS learn Chai Mocha ', function() {
  
  this.timeout(10000); 

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

  it('Test 1 : Object test with expect', function (done) {
      
      expect(person.fullName()).to.equal("Avita Lisbaron");
      setTimeout(done,500);

  });

  it('Test 2 : Object test with assert', function (done) {
       
    assert.equal(person.firstName + " " + person.lastName,"Avita Lisbaron","The firstname is not correct");
    setTimeout(done,500); 
});
});
import person from "./js_collection.js";
import { people , people1 } from "./js_collection2.js";
import { assert, expect, should, } from 'chai';


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
       
    assert.equal(person.firstName + " " + person.lastName,"Avita","The fullname is not correct");
    setTimeout(done,500); 
});

it('Test 3 : Class test with expect', function (done) {
      
  expect(people1.getFullName()).to.equal("Giulia Ponzechi");
  setTimeout(done,500);

});

it('Test 4 : Class test with expect greaterThanOrEqual ', function (done) {
      
  expect(people1.age()).to.greaterThanOrEqual(27, 'Why his/her age is lower than??');
  setTimeout(done,500);

});

it('Test 5 : Class test with expect to.be.a ', function (done) {
      
  expect(people1.getFullName()).to.be.a('string', 'why not string??'); 
  setTimeout(done,500);

});

it('Test 6 : Class test with expect .include ', function (done) {
      
  expect(people1.getFullName()).to.include('Giulia','his/her name is different from guessing ??'); 
  setTimeout(done,500);

});

it('Test 7: Class test with expect .empty ', function (done) {
      
  expect("").to.be.empty; 
  setTimeout(done,500);

});

it('Test 8: Class test with expect .above ', function (done) {
      
  expect(people1.age()).to.be.above(27, 'Why his/her age is lower than??');
  setTimeout(done,500);

});

it('Test 9: Class test with expect .lengthOf ', function (done) {
      
  expect(people1.getFullName()).to.have.lengthOf(10, ' The name has more characters than expectation ??');
  setTimeout(done,500);

});

it('Test 10: Class test with expect .atleast ', function (done) {
      
  expect(people1.age()).to.be.at.least(18, 'His/Her age did not pass age requirement ??');
  setTimeout(done,500);

});

it('Test 11: Class test ', function (done) {

  let a=1, b=1;
  console.log(a);
  expect(1).to.be.equals(1, "a and b are not equal");
  
  //assert
  assert.equal(a,b, 'a and b are not equal');
  setTimeout(done,500);
  
});

});
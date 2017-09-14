let chai= require("chai");
let assert = chai.assert;

let converter = require("../app.js");


describe("Change English into Infamitory English ", () =>{
    it("if won sounds like one it shoudl return two", ()=>{
        assert.equal(converter("today i won"), "today i two");
    });
      it("if to or too sounds like two it should return three", ()=>{
        assert.equal(converter("i want to go."), "i want three go.");
    });
     it("if for sounds like four it should return five", ()=>{
        assert.equal(converter("i need that for cooking."), "i need that five cooking.");
    });
     it("if ate sounds like eight it should return nine", ()=>{
       assert.equal(converter("i ate all of the pumpkin pie."), "i nine all of the pumpkin pie.");
    });
     it("if multiple sound like numbers change and add one", ()=>{
       assert.equal(converter("i won the championship, for i am the best and ate hundreds of hot dogs."), "i two the championship, five i am the best and nine hundreds of hot dogs.");
    });

       it("should throw an error", ()=>{
       assert.throws(() => {converter(12)}, "str.toLowerCase is not a function");
  
    });

});
    
   

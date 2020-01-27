const assert = require("chai").assert; // Chai assertion libary (aka,built-in functions)
const expect = chai.expect;
const sinon = require("sinon"); // 'sinon', lets me use: spies, stubs and mocks

const contact = require('../../controllers/contact_controller');


// Test-suite to hold tests for entire 'contact_controller' file
describe("contact_controller test suite", function() {

  // getContacts() Function
  describe("getContacts()", function() {
    it("should return contacts", function() {
      let req = {};
      // `res` has a 'send' key with a function value coz we use `res.send()` in real func
      let res = {
        send: sinon.spy() // creates a dummy function from the real function. Can then use 'assert' to test return vals.
      };

      indexPage.getIndexPage(req, res);
      console.log(res.send);
    });
  });
});


//   getContacts = (req, res) => {
//     Contact.find()
//       .then(contacts => res.json(contacts))
//       .catch(err =>
//         res.status(404).json({ nocontactsfound: "No contacts found" })
//       );
//   };
// });
// USER TEST FILE
// May have to change route to '/users' instead of '/user'

'use strict';
/*
const expect = chai.expect;
chai.use(chaiHttp);

describe("Users API tests", () => {
  it("should return a 500 server error", done => {
    chai
      .request(app)
      .get("/api/users/11") // outside the range or contacts
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
*/




// Importing required files for the test to run successfully
let mongoose = require("mongoose");
let User = require("../database/models/user_model");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../server')
const should = chai.should();

chai.use(chaiHttp);
// chai.use(should)


// Parent block for tests
describe("Users", () => {
  // Clears DB before each test is executed:
  beforeEach(done => {
    User.remove({}, err => {
      done();
    });
  });

  // Test that error is successfully returned if user is created without email property:
  describe('/POST user', () => {
      it('should not create a user without email address', (done) => {
          let user = {
              name: "John Doe",
              password: "johndoe123" // Omitted the 'email' field so SHOULD return error
          }
          chai.request(server)
          .post('/users')
          .send(user)
          .end((err, res) => {
              res.should.have.status(200); // error: Cannot read property 'should' of undefined.
              res.body.should.be.a('object');
              res.body.should.have.property('error')
              res.body.errors.email.should.have.property('kind').eql('required'); // Email SHOULD be required
              done();
          });
      });

      // Tests that a user can NOT be created without an Email and that a user is actually created when the valid data is sent to 
      // ... /user
      it('should create a user', (done) => {
          let user = {
              name: "John Doe",
              email: "johndoe123@gmail.com",
              password: "johndoe123"
          }
          chai.request(server)
          .post('/users')
          .send(user)
          .end((err,res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have
                .property("msg")
                .eql("Contact added successfully");
                res.body.user.should.have.property('name')
                res.body.user.should.have.property('email');
                res.body.user.should.have.property('password');
                done();
          });          
      });
  });
});
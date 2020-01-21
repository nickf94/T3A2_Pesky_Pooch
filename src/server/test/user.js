// USER TEST FILE
// May have to change route to '/users' instead of '/user'


// Importing required files for the test to run successfully
let mongoose = require("mongoose");
let User = require("../database/models/user_model");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../server')
let should = chai.should();

chai.use(chaiHttp);


// Parent block for tests
describe("Users", () => {
  // Clears DB before each test is executed:
  beforeEach(done => {
    User.remove({}, err => {
      done();
    });
  });

  // Test the CREATION of a user:
  describe('/POST user', () => {
      it('should not create a user without email address', (done) => {
          let user = {
              name: "John Doe",
              email: "johndoe123@gmail.com",
              password: "johndoe123"
          }
          chai.request(server)
          .post('/user')
          .send(user)
          .end((err, res) => {
              res.should.have.status(200); // no error
              res.body.should.be.a('object');
              res.body.should.have.property('errors')
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
          .post('/user')
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
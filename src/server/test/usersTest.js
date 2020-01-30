const app = require("../server");
const User = require("../database/models/user_model");
const chai = require("chai");
const assert = require("chai").assert;
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);


// -- USER_ROUTES  --

// User.get('/test') route
describe("GET users route", function() {
  it("should respond with string data type and expected string value", function(done) {
    chai
      .request(app)
      .get("/api/users/test")
      .end(function(err, res) {
        expect(res.text).to.be.a("string");
        expect(res.text).to.equal("Test Users API route");
        done();
      });
  });

  it("connection should return 200 success status code", function(done) {
    chai
      .request(app)
      .get("/api/users/test")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});



// -- USER_CONTROLLER --

// Cleanup method to clear test_DB of users created
describe("Users", () => {
  beforeEach(done => {
    User.remove({}, err => {
      done();
    });
  });


  // NewUser: Email should be unique (email should not already exist in DB)
  describe("/POST user", function() {
    it("should not create a user if email is not unique", function(done) {
      // Email already exists in DB therefore is not created.
      const user = new User({
        email: "userWithUniqueEmail@email.com",
        password: "pass"
      });

      chai
        .request(app)
        .post("/api/users/new")
        .send(user)
        .end(function(err, res) {
          chai
            .request(app)
            .post("/api/users/new")
            .send(user)
            .end(function(err, res) {
              if (err) {
                done(err);
              } else {
                expect(res).to.have.status(422);
                expect(res.text).to.be.a("string");
                expect(res.text).to.equal("Email is taken");
                done();
              }
            });
        });
    });

    it("should create a user with unique email", function(done) {
      const user = new User({
        email: "userWithUniqueEmail@email.com",
        password: "JohnDoe12345"
      });

      chai
        .request(app)
        .post("/api/users/new")
        .send(user)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            expect(res.body).to.have.property("email");
            expect(res.body).to.have.property("password");
            done(err);
          }
        });
    });
  });
});


// -- USER_MODEL_AND_SCHEMA --

describe("User Mongoose Schema", function() {
  it("should have kind required for email and password properties", function(done) {
    const user = new User({
      // email and pass properties are omitted for this test.
      date: "01/03/2020",
      role: "admin"
    });

    chai
      .request(app)
      .post("/api/users/new")
      .send(user)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          // expect(res).to.have.status(422);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("date");
          expect(res.body).to.have.property("role");
          expect(res.body.errors.email).to.have.property('kind').eql('required');
          expect(res.body.errors.password).to.have.property('kind').eql('required');
          done();
        }
      });
  });
});




// ASSESSOR_NOTE:
/*
  - CreateUser_unique_email test method ensured that Users can not be created with an already existing email and works fine.
  - ALthough it allows the new user object to pass through and fails at mongoose (email: unique) validation instead.
  - Team members have affirmed to not fix this and leave as this, reason being that we have no front-end features allowing users
  ... to be created. Instead we are the only ones who create users (through postman), therefore mongoose validation is adequate.

  - Testing the Bcrypt password hashing method in user_controller was determined to be inadequate as we can clearly see it 
  ... is working via the hashed credentials in the DB.
*/


const app = require("../server");
const userController = require("../controllers/user_controller");
const chai = require("chai");
const assert = require("chai").assert;
const User = require("../database/models/user_model");
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

// describe("Users", function() {
//   beforeEach(function(done) {
//     User.remove({}, function(err) {
//       done();
//     });
//   });


// User should NOT be created without email
describe("/POST user", function() {
  it("should not create a user without email address", function(done) {
    const user = {
      // email is omitted so should sucessfully return an error
      password: "JohnDoe12345"
    };

    chai
      .request(app)
      .post("/new")
      .send(user)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          res.should.have.status(422);
          expect(res.body).to.be.a('string');
          expect(res.body).to.have.property("errors")
          expect(res.body)
            .errors.email.to.have.property("kind")
            .eql("required");
          done();
        }
      });
  });

  it("it should create a user ", function(done) {
    const user = {
      email: "johndoe@email.com",
      password: "JohnDoe12345"
    };
    chai
      .request(app)
      .post("/new")
      .send(user)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("statusMessage").eql("User successfully created");
          expect(res.body).to.have.property("email");
          expect(res.body).to.have.property("password");
          done(err);
        }
      });
  });
});
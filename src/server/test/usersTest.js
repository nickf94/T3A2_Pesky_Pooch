const app = require("../server");
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

// ASSESSOR NOTE:
/*
  - The first test below ensured that Users can not be created with an already existing email.
  - Test works as it should and exposed flaws in API routes: 
  - That unique email validation fails at the endpoint.
*/


// NewUser email should be unique (email should not already exist in DB)
describe("/POST user", function() {
  it("should not create a user if email is not unique", function(done) {
    const user = {
      email: "coen@admin.com",
      password: "password123"
    };
    
    chai
      .request(app) // connect to server
      .post("/api/users/new") // initiate server POST req using '/new' route (which contains createUser func)
      .send(user) // send user object above through request
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          console.log(res.json)
          expect(res).to.have.status(422);
          expect(res.text).to.be.a("string");
          expect(res.text).to.equal("Email is taken");
          // expect(res.text).to.equal("error: Email is taken");
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
      .post("/api/users/new")
      .send(user)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body)
            .to.have.property("statusMessage")
            .eql("User successfully created");
          expect(res.body).to.have.property("email");
          expect(res.body).to.have.property("password");
          done(err);
        }
      });
  });
});


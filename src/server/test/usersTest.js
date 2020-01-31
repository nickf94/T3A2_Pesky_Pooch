const { app, User, chai, assert, chaiHttp, expect } = require('../../server/config/testConfig')

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


  // createUser Test: Email 'unique' validation test.
  describe("/POST user_controller Method", function() {
    it("should not create a user if email is NOT unique", function(done) {
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

    // createUser Test: Successful User Creation test.
    it("should create a user if email IS unique", function(done) {
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


  // createUser_Test: Bcrypt 'password' validation test.
    it("Bcrypt method should return error if password is empty", function(done) {
      const user = new User({
        password: ""
      });

      chai
        .request(app)
        .post("/api/users/new")
        .send(user)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(500);
            expect(res.body).to.be.a("object");
            expect(res.body)
              .to.have.property("errors")
              .eql("Could not save");
            done(err);
          }
        });
    });

    // createUser_Test: Email 'required' validation test
    it("Email property should be required", function(done) {
      const user = new User({
        password: "password12345"
      });

      chai
        .request(app)
        .post("/api/users/new")
        .send(user)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(500);
            expect(res.body).to.be.a("object");
            expect(res.body).to.have.property("errors").eql("Could not save");
            done(err);
          }
        });
    });




// -- USER_MODEL_AND_SCHEMA --
/*
QUESTIONS FOR MATT - FRIJAN30th

1. Is it worth testing the user model/schema when the above tests tested all validation error-handling anyways? + tested the successfull creation of a user??

2. Could i put some of the above assertions inside of other 'it' blocks and reduce the amount of code? or is it good to have cleanly seperated 'it' blocks for different cases like above??
*/

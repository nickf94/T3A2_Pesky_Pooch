const { app, Event, chai, assert, chaiHttp, expect, jwt, keys, token } = require('../../server/config/testConfig')


// -- EVENT_ROUTES  --

// Event.get('/test') route
describe("GET event route", function() {
  it("should respond with string data type and expected string value", function(done) {
    chai
      .request(app)
      .get("/api/events/test")
      .end(function(err, res) {
        expect(res.text).to.be.a("string");
        expect(res.text).to.equal("Test Event API route");
        done();
      });
  });

  it("connection should return 200 success status code", function(done) {
    chai
      .request(app)
      .get("/api/events/test")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});





// -- EVENT_CONTROLLER/MODEL/SCHEMA --

// Cleanup method to clear test_DB of Events created
describe("Events", () => {
  beforeEach(done => {
    Event.remove({}, err => {
      done();
    });
  });

  describe("/GET getEvents Controller Method", function() {
    it("should find event(s) by Id and successfully retrieve from DB", function(done) {
      let token;
      chai
        .request(app)
        .get("/api/events/")
        .set('authorization', `Bearer ${token}`)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(200);
            done(err);
          }
        });
    });
  });



   // UPDATE_Event
  describe("/PUT UpdateEvent Controller Method", function() {
    it("Should successfuly find event by Id and update data", function(done) {
      let token;

      chai
        .request(app)
        .set('authorization', `Bearer ${token}`)
        .put("/api/events/update/5e26d3cfa075b006abb8c4c9")
        .send({ name: "TEST_NAME_123" })
        .end(function(err, res) {
          console.log(res.text);
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
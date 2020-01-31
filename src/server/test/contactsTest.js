const { app, chai, assert, chaiHttp, expect, Contact } = require('../../server/config/testConfig')

// -- CONTACT_ROUTES  --

// Contact.get('/test') route - SUCCESS
describe("/test - GET contacts route", function() {
  it("should respond with string data type and expected string value", function(done) {
    chai
      .request(app)
      .get("/api/contact/test")
      .end(function(err, res) {
        expect(res.text).to.be.a("string");
        expect(res.text).to.equal("Test Contacts API route");
        done();
      });
  });

  it("connection should return 200 success status code", function(done) {
    chai
      .request(app)
      .get("/api/contact/test")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});



// -- CONTACT_CONTROLLER/MODEL/SCHEMA --

// Cleanup method to clear test_DB of contacts created
describe("Contacts", () => {
  beforeEach(done => {
    Contact.remove({}, err => {
      done();
    });
  });

   // CREATE_CONTACT
  // createContact Controller Method Test - SUCCESS
  describe("/POST createContact Controller Method", function() {
    // Email 'required' validation test
    it("Email property should be required", function(done) {
      const contact = new Contact({
        // Email Omitted
        title: "TestTitle",
        message: "TestMessage"
      });

      chai
        .request(app)
        .post("/api/contact/")
        .send(contact)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(500);
            expect(res.body).to.be.a("object");
            expect(res.body)
              .to.have.property("errors")
              .eql("Unable to save new contact");
            done(err);
          }
        });
    });
  });

  // Title 'required' validation test - SUCCESS
  it("Title property should be required", function(done) {
    const contact = new Contact({
      email: "TestEmail@email.com",
      // Title Omitted
      message: "TestMessage"
    });

    chai
      .request(app)
      .post("/api/contact/")
      .send(contact)
      .end(function(err, res) {
        chai
            if (err) {
            done(err);
            } else {
            expect(res).to.have.status(500);
            expect(res.body).to.be.a("object");
            expect(res.body).to.have.property("errors").eql("Unable to save new contact");
            done(err);
            }
        });
    });

  // message' validation test. - SUCCESS
  it("Message property should be required", function(done) {
    const contact = new Contact({
      email: "TestEmail@email.com",
      title: "TestTitle"
      // Message omitted
    });

    chai
      .request(app)
      .post("/api/contact/")
      .send(contact)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res).to.have.status(500);
          expect(res.body).to.be.a("object");
          expect(res.body)
            .to.have.property("errors")
            .eql("Unable to save new contact");
          done(err);
        }
      });
  });

    // Contact form *successful* creation test
    it("Should create contact with all required fields provided", function(done) {
      const contact = new Contact({
        email: "Testemail@email.com",
        title: "TestTitle",
        message: "TestMessage"
      });

      chai
        .request(app)
        .post("/api/contact/")
        .send(contact)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
            done(err);
          }
        });
    });
});


// DELETE_CONTACT

  describe("/DELETE - deleteContact Controller Method", function() {
    it("should successfully find an existent contact by its Id and remove from DB", function(done) {
      chai
        .request(app)
        .delete("/api/contact/5e26aa05332efe0017190629")
        .end(function(err, res) {
          chai
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a("object");
                expect(err).to.be.null;
                expect(res.body)
                .to.have.property("msg")
                .eql("Contact entry deleted successfully");
                done(err);
            }
            });
        });


    it("should successfully return error if contact_Id is non-existent", function(done) {
      chai
        .request(app)
        .delete("/api/contact/99this_is_a_non_existent_post_Id99")
        .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                expect(res).to.have.status(404);
                expect(res.body).to.be.a("object");
                expect(res.body)
                .to.have.property("error")
                .eql('No such contact.');
                done(err);
            }
            });
        });
    });


// GET_CONTACT

describe("/GET contacts - getContacts Controller Method", function() {
  // getContacts successful retrieval test
  it("should find and retrieve all contacts from DB", function(done) {
    chai
      .request(app)
      .get("/api/contact/")
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.body).to.be.a("array");
          expect(res).to.have.status(200);
          done(err);
        }
      });
  });
});


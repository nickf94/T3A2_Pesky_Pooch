// Imports needed for tests... to keep code DRY.

// file imports
const app = require("../server");
const User = require("../database/models/user_model");
const Testimonial = require ('../database/models/testimonial_model')
const Contact = require('../database/models/contact_model')
const Event = require('../database/models/event_model')
// chai imports
const chai = require("chai");
const assert = require("chai").assert;
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

module.exports = { app, User, chai, assert, chaiHttp, expect, Testimonial, Contact, Event };

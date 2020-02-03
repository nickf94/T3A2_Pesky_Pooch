// Imports needed for tests... to keep code DRY.

// file imports
const app = require("../server");
const jwt = require("jsonwebtoken");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlkIiwiZW1haWwiOiJ0ZXN0QGVtYWlsLmNvbSIsImlhdCI6MTU4MDQ1MjI3OCwiZXhwIjoxNTgwNDYyMjc4fQ.yFH5Zvt409r_fl-V0nxJevBRPt9laLaCv8-nhA033sE";

const keys = require("../config/keys");
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

module.exports = { app, User, chai, assert, chaiHttp, expect, Testimonial, Contact, Event, jwt, keys, token };

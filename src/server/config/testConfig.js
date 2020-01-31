// This file holds imports needed to keep test files DRY.
const app = require("../server");
const User = require("../database/models/user_model");
const chai = require("chai");
const assert = require("chai").assert;
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

module.exports = { app, User, chai, assert, chaiHttp, expect };

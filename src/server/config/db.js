const mongoose = require('mongoose');
require('dotenv').config()
const config = require('config');
const db = process.env.CONNECTION_STRING_PT1

const connectDB = async (environment) => {
  console.log(
    `${db}${
      environment === "DEV"
        ? process.env.DEV_CONNECTION_STRING
        : environment === "MAIN" ? process.env.MAIN_CONNECTION_STRING : process.env.TEST_CONNECTION_STRING
    }`
  );
  try {
    await mongoose.connect(
      `${db}${
        environment === "DEV"
          ? process.env.DEV_CONNECTION_STRING
          : process.env.MAIN_CONNNECTION_STRING
      }`,
      {
        useNewUrlparser: true,
        useUnifiedTopology: true
      }
    )
    console.log('MongoDB Atlas is connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB
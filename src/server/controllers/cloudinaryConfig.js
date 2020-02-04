const { config, uploader } = require('cloudinary')
const dotenv = require('dotenv').config()
const cloudinaryConfig = (req, res, next) => {
  config({
      cloud_name: "peskypooch",
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
  });
  next();
}
module.exports = {
  cloudinaryConfig, uploader
}
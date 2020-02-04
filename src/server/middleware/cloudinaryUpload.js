const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: 'peskypooch',
  api_key: '555717654934968',
  api_secret: process.env.CLOUDINARY_SECRET
});

const cloudinaryUpload = (args) => {
  console.log(args)
}

module.exports = cloudinaryUpload
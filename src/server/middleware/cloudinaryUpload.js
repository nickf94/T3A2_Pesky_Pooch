let Datauri = require('datauri')
const dUri = new Datauri()
// const { uploader } = require('cloudinary')
const cloudinary = require('cloudinary').v2


cloudinary.config({
  cloud_name: 'peskypooch',
  api_key: '555717654934968',
  api_secret: process.env.CLOUDINARY_SECRET
})


function cloudUpload(file) {
  cloudinary.uploader.upload(file).then((result) => {
    const image = result.url
    return res.status(200).json({
    message: 'Your image has been uploded successfully to cloudinary',
    data: {
    image
    }
    })
  }).catch((err) => res.status(400).json({
    message: 'someting went wrong while processing your request',
    data: {
    err
    }
    }))

}

module.exports = cloudUpload
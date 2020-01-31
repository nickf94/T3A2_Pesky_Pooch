// Import image_model from database/models
var imageModel = require('./database/models/image_model');

// Import Cloudinary config file
var cloud = require('./cloudinaryConfig');

exports.createApp = (req, res) => {
  try{
    var imageDetails = {
      imageName: req.body.imageName,
    }

    // Use Mongo to find if Image-Name exists in the DB

    imageModel.find({imageName: imageDetails.imageName}, (err, callback) => {

      // Checking if an error occured
      if(err) {
        res.json({
          err: err,
          message: 'there was a problem uploading image'
        })
      } else if(callback.length >= 1) {
        res.json({
          message: 'file already exists'
        })
      } else {
        var imageDetails = {
          imageName: req.body.imageName,
          cloudImage: req.files[0].path,
          imageId: ''
        }

        // If all goes well, post the image to cloudinary

        cloud.uploads(imageDetails.cloudImage).then((result) => {
          var imageDetails = {
            imageName: req.body.imageName,
            cloudImage: result.url,
            imageId: result.id
          }

          // Then create the file in the database

          imageModel.create(imageDetails, (err, created) => {
            if(err){
              res.json({
                err: err,
                message: 'could not upload image, try again'
              })
            } else {
              res.json({
                created: created,
                message: "image uploaded successfully!!"
              })
            }
          })
        })
      }
    });
  }catch(execptions){
    console.log(execptions)
  }
}

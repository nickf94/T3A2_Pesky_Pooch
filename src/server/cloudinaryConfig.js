const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'nickfis',
    api_key: '514452994947154',
    api_secret: 'P3KZ5SQDCxVpbicOBFjSS0ytjGQ'
});

exports.uploads = (file) => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
  })
}

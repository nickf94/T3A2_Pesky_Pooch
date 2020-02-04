const Datauri = require('datauri')
const dUri = new Datauri();
const path = require('path');

/* Multer is imported, configured for memory storage using storage: storage, and a corresponding category name */

const multer = require('multer')
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image');


/* Cloudinary is unable to handle/store image buffers directly, so in order to upload it
this buffer must be returned to a file format for sending, using the 'datauri' node package - Coen */

const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
module.exports = { multerUploads, dataUri };
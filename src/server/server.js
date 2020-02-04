const path = require('path')
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const authorize = require('./middleware/authorize')
const port = process.env.PORT || 7001;
const environment = process.argv[2] || "TEST"
const { cloudinaryConfig } = require('./controllers/cloudinaryConfig')
const { multerUploads, dataUri } = require('./controllers/multerStuff')

app.use(cors())
connectDB(environment)
app.use(express.urlencoded({ 
  extended: true,
  limit: '50mb'
}))
app.use(express.json({
  limit: '50mb'
}))
app.use(morgan('dev'))

app.use(express.static(path.resolve(__dirname, 'src/public')));
app.use('*', cloudinaryConfig);
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));
// app.post('/api/events/new', multerUploads, (req, res) => {
//   if (req.file) {
//     const file = dataUri(req).content;
//     return uploader.upload(file).then((result) => {
//       const image = result.url;
//       return res.status(200).json({
//         message: 'Your image has been uploaded successfully to cloudinary',
//         data: {
//           image
//         }
//       })
//   }).catch((err) => res.status(400).json({
//     message: 'something went wrong while processing your request',
//     data: {
//       err
//     }
//     }))
//   }
// });


// routes

app.use('/api/events/new', authorize.checkToken, multerUploads)
app.use('/api/events/update', authorize.checkToken)
app.use('/api/events/delete', authorize.checkToken)
app.use('/api/services/new', authorize.checkToken, multerUploads)
app.use('/api/services/delete', authorize.checkToken)
app.use('/api/services/edit', authorize.checkToken)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/contact', require('./routes/api/contacts'))
app.use('/api/login', require('./routes/api/login'))
app.use('/api/events', require('./routes/api/events'))
app.use('/api/services', require('./routes/api/services'))
app.use('/api/testimonials', require('./routes/api/testimonials'))

// app.post("/imageUpload", upload.single('image'), (req, res) => {
//   res.status(200)
// })

// End routes

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app; // Need this for tests to connect to server

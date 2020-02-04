import app from '../server'
const authorize = require('../middleware/authorize')
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage })

app.use('/api/events/new', authorize.checkToken)
app.use('/api/events/update', authorize.checkToken)
app.use('/api/events/delete', authorize.checkToken)
app.use('/api/services/new', authorize.checkToken)
app.use('/api/services/delete', authorize.checkToken)
app.use('/api/services/edit', authorize.checkToken)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/contact', require('./routes/api/contacts'))
app.use('/api/login', require('./routes/api/login'))
app.use('/api/events', require('./routes/api/events'))
app.use('/api/services', require('./routes/api/services'))
app.use('/api/testimonials', require('./routes/api/testimonials'))

app.post("/imageUpload", upload.single('image'), (req, res) => {
  console.log(req.file)
  res.status(200)
})
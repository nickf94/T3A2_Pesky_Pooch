const dUri = new Datauri()
const parseImage = req => dUri.format(path.extname(req.file.name).toString(), req.file.buffer)


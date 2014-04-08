exports.fAjaxPost = (req, res, mimetype) ->
    body = ''
    filePath = __dirname + '/public/' + req.originalUrl
    data = fs.readFileSync(filePath).toString()
    res.contentType mimetype
    res.send data
    return
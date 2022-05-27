const DEFAULT_MESSAGE = 'Hello World!'

module.exports = (req, res) => {
  res.send({
      message: DEFAULT_MESSAGE
  })
}

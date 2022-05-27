const DEFAULT_MESSAGE = 'Olá, Mundo!'

module.exports = (req, res) => {
  res.send({
      message: DEFAULT_MESSAGE
  })
}

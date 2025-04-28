exports.add = (req, res) => {
  const { a, b } = req.query
  const result = parseFloat(a) + parseFloat(b)
  res.json( {result} )
}

exports.subtract = (req, res) => {
  const { a, b } = req.query
  const result = parseFloat(a) - parseFloat(b)
  res.json({ result })
}

exports.multiply = (req, res) => {
  const { a, b } = req.query
  const result = parseFloat(a) * parseFloat(b)
  res.json({ result })
}

exports.divide = (req, res) => {
  const { a, b } = req.query
  if (parseFloat(b) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" })
  }
  const result = parseFloat(a) / parseFloat(b)
  res.json({ result })
}
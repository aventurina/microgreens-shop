const products = require('../../server/products-data');

module.exports = (req, res) => {
  const { id } = req.query;
  const product = products.find((p) => String(p.id) === String(id));
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.status(200).json(product);
};

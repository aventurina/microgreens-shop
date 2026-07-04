const products = require('../server/products-data');

module.exports = (req, res) => {
  res.status(200).json(products);
};

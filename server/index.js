const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products ORDER BY id').all();
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

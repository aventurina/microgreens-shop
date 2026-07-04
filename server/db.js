const path = require('path');
const Database = require('better-sqlite3');
const seedProducts = require('./products-data');

const db = new Database(path.join(__dirname, 'products.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT NOT NULL
  )
`);

const productCount = db.prepare('SELECT COUNT(*) AS count FROM products').get().count;
if (productCount === 0) {
  const insert = db.prepare(
    'INSERT INTO products (name, description, price, image) VALUES (@name, @description, @price, @image)'
  );
  const insertAll = db.transaction((rows) => {
    for (const row of rows) insert.run(row);
  });
  insertAll(seedProducts);
}

module.exports = db;

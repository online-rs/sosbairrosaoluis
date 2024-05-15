const sqlite3 = require('sqlite3');

let db;

function connect() {
  db = new sqlite3.Database('sosbairrosaoluis.db');
  db.run('CREATE TABLE IF NOT EXISTS bairros (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT)');
}

function disconnect() {
  if (db) {
    db.close();
    db = null;
  }
}

module.exports = {
  connect,
  disconnect
};

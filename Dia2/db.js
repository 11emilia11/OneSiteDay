const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {


  // Criar a tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS clients(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      city TEXT,
      state TEXT,
      email TEXT,
      phone INTEGER,
      password TEXT
    ); 
  `)

  // Inserir dados na tabela
  /*

  const query = `
  INSERT INTO clients(
    name,
    city, 
    state, 
    email,
    phone,
    password
  ) VALUES (?,?,?,?,?,?);
  `
  values = [
    "Claire Golding",
    "Recife",
    "Pernambuco",
    "claire@gmail.com",
    34537867,
    "batata"
  ]
  
  */
  

  /*
   db.run(query, values, function(err) {
    if (err) return console.log(err)

    console.log(this)
  })
  */
 

  // Consultar dados na tabela

  /*
  db.all(`SELECT * FROM clients`, function(err, rows) {
    if (err) return console.log(err)

    console.log(rows)
  })
  
  
  */

  

  // Deletar um dado da tabela

})

module.exports = db
// Criando o servidor com o express

const express = require("express");
const server = express();
const db = require("./db");

/*

const clients = [
  {
    name: "Maria Silva",
    city: "Olinda",
    state: "Pernambuco",
    email: "marialinda@hotmail.com",
    phone: 99875643
  }, 
  {
    name: "Cristina Kuch",
    city: "Recife",
    state: "Pernambuco",
    email: "krisinhas2@hotmail.com",
    phone: 88575600
  },
  {
    name: "Laura Motta",
    city: "Caruaru",
    state: "Pernambuco",
    email: "laumota123@hotmail.com",
    phone: 34534118
  },
  {
    name: "Larissa Silva",
    city: "Bezerros",
    state: "Pernambuco",
    email: "larissinha@gmail.com",
    phone: 89764330
  }
  
]

 */


// configurando arquivos estáticos (css, script, imagens)
server.use(express.static("public"));


// configurando o nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
  express: server,
  noCache: true
})

// Criando uma rota /
// essa e a pagina do form
server.get("/", function(req, res) {
  return res.render("index.html");

})


// essa é a minha pagina inicial
server.get("/clientes", function(req, res) {
  db.all(`SELECT * FROM clients`, function(err, rows){
    if (err) {
      console.log(err);
      return res.send("Erro no banco de dados");

    }
    const reversedClients = [...rows].reverse();

    return res.render("clientes.html", {clients:reversedClients});
  })


})

server.post("/", function(req, res) {
  // inserir dados na tabela
  const query = `
    INSERT INTO clients(
      name, 
      city,
      state,
      email,
      phone,
      password,
    ) VALUES (?, ?, ?, ?, ?, ?)
  `
  const values = [
    req.body.name,
    req.body.city,
    req.body.state,
    req.body.email,
    req.body.phone,
    req.body.password,
  ]

  db.run(query, values, function(err) {
    if(err) {
      console.log(err)
      return res.send("Erro no banco de dados");
    }

    return res.redirect("/clientes")
  })
})



server.listen(3001);


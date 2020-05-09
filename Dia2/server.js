// Criando o servidor com o express

const express = require("express");
const server = express();

// configurando arquivos estáticos (css, script, imagens)
server.use(express.static("public"));


// Criando uma rota /

server.get("/", function(req, res) {
  return res.sendFile( __dirname+"/views/index.html");

})




server.listen(3001);


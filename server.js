const http = require('http');

const server = http.createServer((req,res) =>{
console.log(req.method);
//demonstra a resposta da URL
console.log(res.url);
res.statusCode = 200;
//seta uma resposta pro servidor demonstrar na tela
res.end('<h1> Hello World</h1>')
    }
);
//Faz o servidor ouvir a porta 3002.
server.listen(3002, () =>{
    console.log('Server Ativo');
});
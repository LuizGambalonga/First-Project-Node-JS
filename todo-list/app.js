const express = require('express');
const checkListRouter = require('./src/routes/checklist');
require('./config/database');
const app = express();
app.use(express.json());
app.use(checkListRouter);


// app.get('/', (req, res) =>{
// res.send('<h1> Minha lista de Tarefas </h1>')
// })

// app.get('/json', (req, res) =>{
//     res.json({
//         title: 'X',
//         done: 'true'
//     })
//  })
    
app.listen(3000,() =>{
    console.log('Servidor Iniciado')
})
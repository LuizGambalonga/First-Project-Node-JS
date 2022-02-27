const express = require('express');
const path = require('path');
const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
// estamos dando um set para verificar onde as views estao no projeto.
app.set('views',path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
//importando rota como MidleWare
app.use('',rootRouter);
app.use(checkListRouter);
// app.use('/checklists',checkListRouter);

app.listen(3000,() =>{
    console.log('Servidor Iniciado')
})


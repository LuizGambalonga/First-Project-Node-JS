const process = require('process');

process.stdin.on('data',(keyboard) =>{
    process.stdout.write('Qual seu Nome?'+keyboard);
    process.exit();
})
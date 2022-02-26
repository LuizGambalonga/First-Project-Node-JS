const fs = require('fs');

fs.writeFile('teste.txt','Olá NodeJS',err =>{
    console.log(err)
})

fs.appendFile('teste.txt','Olá NodeJS\n',err =>{
    console.log(err)
})

fs.rename('teste.txt','teste2.txt',err =>{
    console.log(err)
})

fs.unlink('teste2.txt',err =>{
    console.log(err)
})

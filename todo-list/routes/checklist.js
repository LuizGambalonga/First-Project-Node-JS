const express = require('express');

const router = express.Router();

router.get('/checklists', (req,res) =>{
    console.log('Ola')
    res.send();
})
router.get('/checklists/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`)
})
router.put('/checklists/:id',(req,res)=>{
    console.log(req.body);
    res.send(`ID: ${req.params.id}`)
})
router.post('/checklists',(req,res) =>{
    console.log(req.body);
    res.status(200).send(req.body);
})
module.exports = router;
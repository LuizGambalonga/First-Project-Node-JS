const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist')

router.get('/checklists', async(req,res) =>{
  try{
      let checklists = await Checklist.find({});
      res.status(200).render('checklists/index',{checklists: checklists})
  }catch(error){
    res.status(200).render('pages/error',{error: 'Erro ao exibir as listas de tarefas'})
  }
})
//Arquivo EJs
router.get('/checklists/:id', async(req,res)=>{
    try{
     let checklist = await Checklist.findById(req.params.id)
     res.status(200).render('checklists/index',{checklist: checklist})
    }catch(error){
     res.status(200).render('pages/error',{error: 'Erro ao exibir as listas de tarefas'})
    }
 })

// router.get('/checklists', async(req,res) =>{
//     try{
//         let checklist = await Checklist.find({});
//         res.status(200).json(checklist);
//     }catch(error){
//       // res.status(422).json(error)
//     }
//   })

// fazendo get da url checklist e passando o ID como parametro de pesquisa.
// router.get('/checklists/:id', async(req,res)=>{
//     try{
//      let checklist = await Checklist.findById(req.params.id)
//      res.status(200).json(checklist)
//     }catch(error){
//      res.status(422).json(error)
//     }
//  })

router.post('/checklists', async(req,res) =>{
    let {name} = req.body;
    try{
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist)
    }catch(error){
        res.status(422).json(error)
    }
   
})
router.put('/checklists/:id', async(req,res)=>{
    let {name} = req.body;
    try{
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name},{new: true});
        res.status(200).json(checklist);
    }catch(error){
        res.status(422).json(error);
    }
})

router.delete('/checklists/:id', async(req,res) =>{
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
         res.status(422).json(error);
    }
})

//- sem mongoose
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

module.exports = router;
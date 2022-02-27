const express = require('express');
const router = express.Router();

router.get('/', async(req,res) =>{
    res.render('pages/index');
})
// router.get('/checklists', async(req,res) =>{
//     res.render('layouts/checklists/index');
// })
module.exports = router;

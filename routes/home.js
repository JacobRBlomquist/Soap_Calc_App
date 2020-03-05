const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).render('index',{title:'Soap Calculator'})
});

router.get('/about',(req,res,next)=>{
    res.status(200).render("about",{title:"About"})
});

module.exports=router;
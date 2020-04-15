const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).render('pages/index',{p_title:"Home"});
});

router.get('/about',(req,res,next)=>{
    res.status(200).render("pages/about",{p_title:"About"});
});

module.exports=router;
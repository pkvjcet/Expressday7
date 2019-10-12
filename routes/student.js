const express=require('express');
const router=express.Router();
router.get('/add',(req,res)=>{
    var getname=req.query.name;
    var roll=req.query.rollno;
    res.send("welcome"+getname+roll);
})
module.exports=router;
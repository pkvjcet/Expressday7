const express=require('express');
const router=express.Router();
router.get('/OddEven',(req,res)=>{
    var getNumber=parseInt(req.body.number);
    var result=""
    if(getNumber%2==0){
        result="EVEN"
    }
    else{
        result="ODD"
    }    
    var data1={"Number":getNumber,"Result":result};
    res.json(data1);
})
router.post('/addtwonumbers',(req,res)=>{
    var getNumber1=parseInt(req.body.n1);
    var getNumber2=parseInt(req.body.n2);
    var result=getNumber1+getNumber2;
     
    var data1={"Result":result};
    res.json(data1);
})
router.get('/largest',(req,res)=>{
    var number1=parseInt(req.query.n1);
    var number2=parseInt(req.query.n2);
    var number3=parseInt(req.query.n3);
    var result=0;
    if((number1>number2)&&(number1>number3)){
        result=number1;
    }
    if((number2>number1)&&(number2>number3)){
        result=number2;
    }
    if((number3>number1)&&(number3>number1)){
        result=number3;
    }
    var data={"number1":number1,"number2":number2,"number3":number3,"Largest ":result};
    res.send(data);
})

module.exports=router;
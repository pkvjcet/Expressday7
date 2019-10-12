const express=require('express');
var app=new express();
app.get('/',(req,res)=>{
    var mydata=[{"name":"Prince","Rollno":20},
                 {"name":"Prince","Rollno":20},
                 {"name":"Prince","Rollno":20}
];
    res.json(mydata);
})

app.get('/contact',(req,res)=>{
    res.send("my contact Page");
})
app.get('/gallery',(req,res)=>{
    res.send("my gallery page");
})
app.get('/addstudent',(req,res)=>{
    var getname=req.query.name;
    var roll=req.query.rollno;
    res.send("welcome"+getname+roll);
})
app.get('/largest',(req,res)=>{
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
    res.json(data);
})
app.listen(3000,()=>{
    console.log("Server started");
});
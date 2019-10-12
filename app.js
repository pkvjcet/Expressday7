const express=require('express');
var bodyParser=require('body-parser');
var app=new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs');


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
app.get('/addemployee',(req,res)=>{
   var getName=req.body.name;
   var getAge=req.body.age;
   res.send("Name="+getName+",Age="+getAge);
})
app.get('/addProduct',(req,res)=>{
    var getProductId=req.body.productId;
    var getProductName=req.body.productName;
    var getProductPrice=req.body.productPrice;
    var getProductQuantity=req.body.productQuantity;
    var data={"ProductId":getProductId,"productName":getProductName,"productPrice":getProductPrice,"productQuantity":getProductQuantity};
    res.json(data);
})
app.get('/OddEven',(req,res)=>{
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
app.get('/myweb',(req,res)=>{
    res.render('index');
})
app.listen(3000,()=>{
    console.log("Server started");
});
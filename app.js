const express=require('express');
var bodyParser=require('body-parser');
var app=new express();
var studentrouter=require('./routes/student');
var arithmeticrouter=require('./routes/arithmetic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/student',studentrouter);
app.use('/arithmetic',arithmeticrouter)
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


app.post('/addemployee',(req,res)=>{
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

app.get('/myweb',(req,res)=>{
    res.render('index');
})
app.get('/addnumbers',(req,res)=>{
    res.render('add');
})
app.listen(3000,()=>{
    console.log("Server started");
});
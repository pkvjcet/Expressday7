const express=require('express');
var app=new express();
app.get('/',(req,res)=>{
    var mydata=[{"name":"Prince","Rollno":20},
                 {"name":"Prince","Rollno":20},
                 {"name":"Prince","Rollno":20}
]
    res.json(mydata);
});
app.listen(3000,()=>{
    console.log("Server started");
});
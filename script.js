const express=require('express');
const app=express();
const translate=require('translate');

app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded({extended: false}))

const data='';
app.post('/',async (req,res)=>{
    translate.from=req.body.from;
    translate.to=req.body.to;
    const to=req.body.to;
    const data=req.body.data;
    const translated=await translate(data,to)
    var personJSONString=JSON.stringify(translated); 
    var data1=JSON.stringify(data);
    res.render('home',{personJSONString,data1});
   // res.render('home',{translated : translated});
})

app.get('/',(req,res)=>{
        
     const data="I am iron man"
    const translated="मैं आयरन मैन हूं"
    var personJSONString=JSON.stringify(translated); 
    var data1=JSON.stringify(data);
    
res.render('home.ejs',{data1,personJSONString});
});


app.listen('3000',()=>console.log('app is up and running'))
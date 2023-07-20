const http = require('http');
const fs = require('fs');
const express=require('express');
const path=require('path');

const app=express()
const port=80

// app.use(express.static('static',option))
app.use('/static',express.static('static'))
app.use(express.urlencoded())


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params)
})
app.get('/contact.pug',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})
app.get('/index.pug',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params)
})




app.listen(port,()=>{
    console.log(`server started on ${port}`);
})
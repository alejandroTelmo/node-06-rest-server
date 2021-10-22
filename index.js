require('dotenv').config();
const express=require('express');
const app=express()
const port= process.env.PORT ;
const users=[
    {
        id:1,
        nombre:"ale"
    },
    {
        id:2,
        nombre:"lauty"
    },
    {
        id:3,
        nombre:"franco"
    },
    {
        id:4,
        nombre:"agustin"
    }
]
app.get('/users',(req,res)=>{
    res.json(users)
})

app.post('/users',(req,res)=>{
    const result={
        message:'usuario fue creado con exito.'
    }
    res.status(201).json(result)
})
app.put('/',(req,res)=>{
    res.send('esta funcionando')
})
app.patch('/',(req,res)=>{
    res.send('esta funcionando')
})
app.delete('/',(req,res)=>{
    res.send('esta funcionando')
})


app.listen(port,()=>{
    console.log(`Example app listening at port ${port}`);
})
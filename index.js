const colors=require('colors')
const express=require('express')
const app=express()
const morgan=require('morgan')
const IPData = require('ipdata').default;
const cacheConfig = {
    maxAge: -1, // disable the cache
  };
  const ipdata = new IPData('ab45d5a50261d992b08e04b15fbaca10c0b87b8ec19831e26b618b54', cacheConfig);
app.use(morgan('dev'))
app.use(express.json())
app.listen(3000,()=>{
//
console.log('servidor en puerto 3000'.yellow)
})
//
app.set('view engine','ejs')
//
app.post('/',(req,res)=>{
    res.send('.')
})
app.use(express.static('public'))

const express = require('express')
const routers = express.Router()
let modelsubjek = require('../models/')

routers.get('/',(req,res)=>{
  modelsubjek.Subject.findAll()
  .then(subjects=>{
    res.render('subject',{data:subjects, title: 'subject page'})
  })
  .catch(err =>{
    res.send(err)
  })
})

module.exports= routers

const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', (req, res) => {
  models.Teacher.findAll()
  .then(teachers => {
    res.render('teacher', {data:teachers, title: 'Teacher Page'})
  })
  .catch(err => {
    res.send(err)
  })
})


routers.post('/',(req,res)=>{
  models.Teachers.build({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    createdAt: new Date(),
    email: `${req.body.email}`
  })
  .save().then(teachers=>{
    res.redirect('/teacher')
  })
  .catch(err=> {
    res.send(err)
  })
})

routers.get('/delete/:id', (req, res) => {
  models.Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(teachers => {
    res.redirect('/teacher')
  })
  .catch(err => {
    res.send(err)
  })
})
//
// routers.get('/edit/id', (req,res)=>{
//   models.Teacher.findAll({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(teachers => {
//     res.render('teacherEdit',{data: teachers[0], title:'Edt Teachers page'})
//   })
//   .catch(err=> {
//     res.send(err)
//   })
// })
//
// routers.post('/edit/:id', (req,res)=> {
//   models.Teacher.update({
//     first_name: `${req.body.fn}`,
//     last_name: `${req.body.ln}`,
//     updatedAt: new Date(),
//     email: `${req.body.email}`
//   },
//   {
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(teachers=>{
//     res.redirect('/teacher')
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
//

module.exports = routers

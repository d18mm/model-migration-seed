const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//routing
app.get('/', (req, res) => {
  res.render('index')
})
//teacher
const Teacher = require('./routers/teacher')
app.use('/teacher',Teacher)
//subject

const Subject = require('./routers/subject')
app.use('/subject',Subject)


app.listen(3183,function(){
  console.log('star localhost 3183')
})

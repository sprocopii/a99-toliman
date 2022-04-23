const express = require('express')
const args = require("minimist")(process.argv.slice(2))
args["port"]
const app = express()

var port =  args.port || process.env.PORT || 5000

var physical_tasks = ["Walk 6k steps", "30 minutes of aerobics", "20 minutes of Yoga", "Go on a quick jog", "10 minutes of stretching", "15 minutes of biking"]
var mental_tasks = ["Walk 6k steps", "30 minutes of aerobics", "20 minutes of Yoga", "Go on a quick jog", "10 minutes of stretching", "15 minutes of biking"]
var descriptions = [""]

function randomInRange(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);}

function randomiz_physical() {
  var random_index1 = randomInRange(0,5)
  var task1 = physical_tasks.at(random_index1)
  random_index2 = randomInRange(0,5)
  while (random_index1 == random_index2) {
    random_index2 = randomInRange(0,5)
}
var task2 = physical_tasks.at(random_index2)
  random_index3 = randomInRange(0,5)
  while (random_index2 == random_index3) {
      random_index3 = randomInRange(0,5)
  }
  var task3 = physical_tasks.at(random_index3)
  return [task1, task2, task3]
}

function randomiz_mental() {
    var random_index = randomInRange(1,6)
    var task1 = mental_tasks.at(random_index)
    random_index = randomInRange(1,6)
    var task2 = mental_tasks.at(random_index)
    random_index = randomInRange(1,6)
    var task3 = mental_tasks.at(random_index)
    return [task1, task2, task3]
  }

const server = app.listen(port, () => {
    console.log('App is running on port %port%.'.replace('%port%',port))
})


app.get('/app',(req, res) => {
    res.status(200).end("Welcome! Let's complete some tasks!\nGo to physical for your physical tasks\nGo to mental for your mental tasks")
    //res.end(res.statusCode +''+ res.statusMessage)
})

app.get('/app/physical', (req, res) => {
  var msg = 'Physical wellbeing is vital to the longevity and comfort of the body. These are you physical tasks for the day: '
 // res.status(200).json(msg)
  
  var tasks = randomiz_physical()
  res.status(200).json(tasks)
  //res.status(200).end(tasks)
})

<<<<<<< HEAD
app.get('/app/mental', (req, res) => {
    var msg = 'Mental wellbeing is vital to the longevity and comfort of the body. These are you mental tasks for the day: '
   // res.status(200).json(msg)
    
    var tasks = randomiz_mental()
    res.status(200).json(tasks)
  })

app.get('/app/echo/:number', (req, res) => {
    res.status(200).json({  'message': req.params.number })
})
=======
>>>>>>> b7b377fc6f9c9662c8af371307019e54dfa9f973


app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
})
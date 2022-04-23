const express = require('express')
const args = require("minimist")(process.argv.slice(2))
args["port"]
const app = express()

var port =  args.port || process.env.PORT || 5000

var physical_tasks = ["Walk 6k steps", "30 minutes of aerobics", "20 minutes of Yoga", "Go on a quick jog", "10 minutes of stretching", "15 minutes of biking"]
var descriptions = [""]

function randomInRange(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);}

function randomiz_physical() {
  var random_index = randomInRange(1,6)
  var task1 = physical_tasks.at(random_index)
  random_index = randomInRange(1,6)
  var task2 = physical_tasks.at(random_index)
  random_index = randomInRange(1,6)
  var task3 = physical_tasks.at(random_index)
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

app.get('/app/echo/:number', (req, res) => {
    res.status(200).json({  'message': req.params.number })
})

app.get('/app/flip', (req, res) => {
    //var flip = coinFlip()
    //res.status(200).json({'flip': flip})
})

app.get('/app/flips/:number', (req, res) => {
    //const flips = coinFlips(req.params.number)
    //var flips_summary = countFlips(flips)
    //res.status(200).json({'raw': flips, 'summary': flips_summary})
})

app.get('/app/flip/call/heads', (req, res) => {
    //var input = "heads"
    //const flips = flipACoin(input)
    //res.status(200).json(flips)
})

app.get('/app/flip/call/tails', (req, res) => {
    //var input = "tails"
    //const flips = flipACoin(input)
    //res.status(200).json(flips)
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
})
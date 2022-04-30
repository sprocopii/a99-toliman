const express = require('express')
const args = require("minimist")(process.argv.slice(2))
args["port"]
const app = express()

// Serve static HTML files
app.use(express.static('./public'));

// Add cors dependency
const cors = require('cors')
// Set up cors middleware on all endpoints
app.use(cors())

var port =  args.port || process.env.PORT || 5000

var physical_tasks = ["Walk 6k steps", "30 minutes of aerobics", "20 minutes of Yoga", "Go on a quick jog", "10 minutes of stretching", "15 minutes of biking"]
var physical_descriptions = ["Walking 6k steps a day is necessary to ensure the health of your joints and muscles!",
                            "30 minutes of aerobics is the heart's best treatment. It increases your stamina and ensures healthy arteries",
                            "20 minutes of yoga will improve your flexibility, reduce inflammation, and increase your strength",
                            "Going on a quick jog is the best way to keep a strong immune system and reduce stress hormones",
                            "10 minutes of stretching is enough to keep muscles, joints, and bones in their proper alignments",
                            "15 minutes of biking is perfect for mobility, balance, flexibility, and strength"]

var mental_tasks = ["Spend time outside", "30 minutes of reading", "Talk to a loved one on the phone", "10 minutes of journaling", "1 hour without your phone", "Watch a 20 minute show"]
var mental_descriptions = ["Spending time outside can help to reduce anxiety and depression. Take a break today and spend some time outside", 
                            "Reading can help improve your quality of sleep and sharpen you mind.", 
                            "Talking to loved ones daily can help increase your sense of belonging and boost your happiness.", 
                            "Journaling helps you to express your thoughts and emotions while giving you a moment of relfection.", 
                            "Give your brain a rest. Unplugging for an hour will help reduce stress and anxeity.", 
                            "Take a moment to relax and watch an episode of your favorite TV show!"]


function randomInRange(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function date_Randomizer() {
    var time = new Date()
    const date = time.getDate()
    if (date%2==0) {
        var task1 = physical_tasks.at(0)
        var task2 = physical_tasks.at(2)
        var task3 = physical_tasks.at(4)
        return [task1, task2, task3]
    } else {
        var task1 = physical_tasks.at(1)
        var task2 = physical_tasks.at(3)
        var task3 = physical_tasks.at(4)
        return [task1, task2, task3]
    }
}

function physicalDescription_Randomizer() {
    var time = new Date()
    const date = time.getDate()
    if (date%2==0) {
        var task1 = physical_descriptions.at(0)
        var task2 = physical_descriptions.at(2)
        var task3 = physical_descriptions.at(4)
        return [task1, task2, task3]
    } else {
        var task1 = physical_descriptions.at(1)
        var task2 = physical_descriptions.at(3)
        var task3 = physical_descriptions.at(4)
        return [task1, task2, task3]
    }

}

function randomiz_mental() {
    var time = new Date()
    const date = time.getDate()
    if (date%2 == 0) {
        var task1 = mental_tasks.at(0)
        var task2 = mental_tasks.at(2)
        var task3 = mental_tasks.at(4)
        return [task1, task2, task3]
    } else {
        var task1 = mental_tasks.at(1)
        var task2 = mental_tasks.at(3)
        var task3 = mental_tasks.at(4)
        return [task1, task2, task3]
    }
  }

function mentalDescription_Randomizer() {
    var time = new Date()
    const date = time.getDate()
    if (date%2 == 0) {
        var task1 = mental_descriptions.at(0)
        var task2 = mental_descriptions.at(2)
        var task3 = mental_descriptions.at(4)
        return [task1, task2, task3]
    } else {
        var task1 = mental_descriptions.at(1)
        var task2 = mental_descriptions.at(3)
        var task3 = mental_descriptions.at(4)
        return [task1, task2, task3]
    }

}

const server = app.listen(port, () => {
    console.log('App is running on port %port%.'.replace('%port%',port))
})


app.get('/app',(req, res) => {
    res.status(200).end("Welcome! Let's complete some tasks!\nGo to physical for your physical tasks\nGo to mental for your mental tasks")
})

app.get('/app/physical', (req, res) => {
  var msg = 'Physical wellbeing is vital to the longevity and comfort of the body. These are you physical tasks for the day: '
  
  var tasks = date_Randomizer()
  res.status(200).json({tasks})
})

app.get('/app/physical/task1', (req, res) => {
    var tasks = physicalDescription_Randomizer()
    res.status(200).json(tasks.at(0))
  })

app.get('/app/physical/task2', (req, res) => {
    var tasks = physicalDescription_Randomizer()
    res.status(200).json(tasks.at(1))
})

app.get('/app/physical/task3', (req, res) => {
    var tasks = physicalDescription_Randomizer()
    res.status(200).json(tasks.at(2))
})

app.get('/app/mental', (req, res) => {
    var msg = 'Mental wellbeing is vital to the longevity and comfort of the body. These are you mental tasks for the day: '
    
    var tasks = randomiz_mental()
    res.status(200).json(tasks)
  })


app.get('/app/mental/task1', (req, res) => {
    var tasks = mentalDescription_Randomizer()
    res.status(200).json(tasks.at(0))
  })

app.get('/app/mental/task2', (req, res) => {
    var tasks = mentalDescription_Randomizer()
    res.status(200).json(tasks.at(1))
})

app.get('/app/mental/task3', (req, res) => {
    var tasks = mentalDescription_Randomizer()
    res.status(200).json(tasks.at(2))
})

app.use(function(req, res) {
    res.status(404).send("Endpoint does not exist")
})
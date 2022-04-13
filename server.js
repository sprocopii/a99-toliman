const express = require('express')
const args = require("minimist")(process.argv.slice(2))
args["port"]
const app = express()

var port =  args.port || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log('App is running on port %port%.'.replace('%port%',port))
})


app.get('/app',(req, res) => {
    res.status(200).end("Welcome! Let's complete some tasks!")
    //res.end(res.statusCode +''+ res.statusMessage)
})

app.get('/app/physical', (req, res) => {
  var msg = 'Physical wellbeing is vital to the longevity and comfort of the body. These are you physical tasks for the day: '
  res.status(200).json(msg)
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
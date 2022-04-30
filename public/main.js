// js file for html and css content

// PHYSICAL HEALTH SCRIPTS //
// get physical task start //
const physicaltask=document.getElementById("physicaltask")

// event listener for click
physicaltask.addEventListener("click", getPhysTasks)
// function to wait for response

async function getPhysTasks() {
    // endpoint
    const endpoint='/app/physical'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("physicalres").innerHTML = result;
            
                    });
} 
// get phys task end

// get description 1 //
const ptask1=document.getElementById("ptask1")

// event listener for click
physicaltask.addEventListener("click", getTask1Des)
// function to wait for response

async function getTask1Des() {
    // endpoint
    const endpoint='/app/physical/task1'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("pdes1").innerHTML = result;
            
                    });
} 

// get description 2 //
const ptask2=document.getElementById("ptask2")

// event listener for click
physicaltask.addEventListener("click", getTask2Des)
// function to wait for response

async function getTask2Des() {
    // endpoint
    const endpoint='/app/physical/task2'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("pdes2").innerHTML = result;
            
                    });
} 


// get description 3 //
const ptask3=document.getElementById("ptask3")

// event listener for click
physicaltask.addEventListener("click", getTask3Des)
// function to wait for response

async function getTask3Des() {
    // endpoint
    const endpoint='/app/physical/task3'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("pdes3").innerHTML = result;
            
                    });
} 



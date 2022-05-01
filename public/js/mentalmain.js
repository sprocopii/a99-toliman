// get physical task start //
const mentaltask=document.getElementById("mentaltask")

// event listener for click
window.addEventListener('load',function(){
    mentaltask.addEventListener("click", getMentTasks)
});// function to wait for response

async function getMentTasks(event) {
    event.preventDefault()
    // endpoint
    const endpoint='/app/mental'
    const base = 'http://localhost:3000/mentaltasks.html'
    const url=document.base+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("mentalres").innerHTML = result.tasks;
            
                    });
} 
// get description 1 //
const mtask1=document.getElementById("mtask1")

// event listener for click
window.addEventListener('load',function(){
    mtask1.addEventListener("click", getTask1MentDes)
});// function to wait for response

async function getTask1MentDes() {
    // endpoint
    const endpoint='/app/mental/task1'
    const base = 'http://localhost:3000/mentaltasks.html'
    const url=document.base+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("mdes1").innerHTML = result.tasks.at(0);
            
                    });
} 

// get description 2 //
const mtask2=document.getElementById("mtask2")

// event listener for click
window.addEventListener('load',function(){
    mtask2.addEventListener("click", getTask2MentDes)
});// function to wait for response

async function getTask2MentDes() {
    // endpoint
    const endpoint='/app/mental/task2'
    const base = 'http://localhost:3000/mentaltasks.html'
    const url=document.base+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("mdes2").innerHTML = result.tasks.at(1);
            
                    });
} 


// get description 3 //
const mtask3=document.getElementById("mtask3")

// event listener for click
window.addEventListener('load',function(){
    mtask3.addEventListener("click", getTask3MentDes)
});// function to wait for response

async function getTask3MentDes() {
    // endpoint
    const endpoint='/app/mental/task3'
    const base = 'http://localhost:3000/mentaltasks.html'
    const url=document.base+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(result) {
                        console.log(result);
                        document.getElementById("mdes3").innerHTML = result.tasks.at(2);
            
                    });
} 
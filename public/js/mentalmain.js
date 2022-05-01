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
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.text();
                    })
                    
                    .then(function(response) {
                        console.log(response);
                        document.getElementById("mentalres").innerHTML = response.tasks;
            
                    });
} 
// get description 1 //
const mtask1=document.getElementById("mtask1")

// event listener for click
window.addEventListener('load',function(){
    mtask1.addEventListener("click", getTask1MentDes)
});// function to wait for response

async function getTask1MentDes(event) {
    event.preventDefault()
    // endpoint
    const endpoint='/app/mental/task1'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.text();
                    })
                    
                    .then(function(response) {
                        console.log(response);
                        document.getElementById("mdes1").innerHTML = response.tasks;
            
                    });
} 

// get description 2 //
const mtask2=document.getElementById("mtask2")

// event listener for click
window.addEventListener('load',function(){
    mtask2.addEventListener("click", getTask2MentDes)
});// function to wait for response

async function getTask2MentDes(event) {
    event.preventDefault()
    // endpoint
    const endpoint='/app/mental/task2'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.text();
                    })
                    
                    .then(function(response) {
                        console.log(response);
                        document.getElementById("mdes2").innerHTML = response.tasks;
            
                    });
} 


// get description 3 //
const mtask3=document.getElementById("mtask3")

// event listener for click
window.addEventListener('load',function(){
    mtask3.addEventListener("click", getTask3MentDes)
});// function to wait for response

async function getTask3MentDes(event) {
    event.preventDefault()
    // endpoint
    const endpoint='/app/mental/task3'
    const url=document.baseURI+endpoint
    // waiting for response
    await fetch(url, {mode: 'cors'})
    // receiving response
                    .then(function(response) {
                        return response.text();
                    })
                     
                    .then(function(response) {
                        console.log(response);
                        document.getElementById("mdes3").innerHTML = response.tasks;
            
                    });
} 
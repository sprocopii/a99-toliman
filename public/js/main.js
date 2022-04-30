// js file for html and css content

// PHYSICAL HEALTH SCRIPTS //
const physicaltask=document.getElementById("physicaltask")
// event listener for click
physicaltask.addEventListener("click", getPhysTasks)
// function to wait for response
async function getPhysTasks() {
    // endpoint
    const endpoint="/app/physical"
    const url=document.BASEURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })
                    
                    .then(function(physicalres) {
                        console.log(physicalres);
                        document.getElementById("physicalres").innerHTML = physicalres.tasks;
            
                    });
}
// MENTAL HEALTH SCRIPTS
const mentaltask = document.getElementById("mentaltask")
// event listener for click
mentaltask.addEventListener("click", getMentalTasks)
// function to wait for response
async function getPhysTasks() {
    // endpoint
    const endpoint = "/app/mental"
    const url = document.BASEURI+endpoint
    // waiting for response
    await fetch(url)
    // receiving response
                    .then(function(response) {
                        return response.json();
                    })

                    .then(function(mentalres) {
                        console.log(mentalres);
                        document.getElementById("mentalres").innerHTML = mentalres.tasks;
            
                    });
}

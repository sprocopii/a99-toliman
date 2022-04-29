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
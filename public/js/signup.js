
async function signupuser(username, password){
    const response = await fetch('/app/signup',{
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            username: username,
            password: password
        })})
    
    const json = await response.json();
    
    if (response.ok){
        console.log(json.message)
        window.location = "/public/index.html"
    }
    else{
        console.log(json.message);
        alert("signup failed")
    }
    
}
document.getElementById("register_button").onclick = function () {

    const username= document.getElementById("username").value;
    const password = document.getElementById("password").value;   
    signupuser(username, password);
}
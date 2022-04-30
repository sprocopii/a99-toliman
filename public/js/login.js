
async function loginuser(username, password){
    const response = await fetch('/app/login',{
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
        alert("incorrect username/password")
    }
    
}
document.getElementById("login_button").onclick = function () {

    const username= document.getElementById("username").value;
    const password = document.getElementById("password").value;   
    loginuser(username, password);
}


function syncUser() {
    let user = localStorage.getItem("user");
    console.log(user);
    if(user && user.length()) {
        document.getElemetnById("login-button").style.display = "none";
        document.getElementById("profile-button").style.display = "block";
        document.getElementById("user-icon").innerHTML = user[0].toUpperCase();
        document.getElementById("user-name").innerHTML = user;
    }
    else{
        document.getElementById("login-button").style.display = "block";
        document.getElementById("profile-button").style.display = "none";
    }
}

syncUser();
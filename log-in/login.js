
let passToggle = document.getElementById("pass-toggle");
let passInputEle = document.getElementById("password-ele");
let userInputEle = document.getElementById("username");
let form = document.getElementById("user-login-form");

function showPass() {
    if(passToggle.classList.contains("show")) {
        passToggle.setAttribute("src", "./../Icons/eye-closed.svg");
        passInputEle.setAttribute("type", "password");
    }
    else{
        passToggle.setAttribute("src", "./../Icons/eye-open.svg")
        passInputEle.setAttribute("type", "text");
    }
    passToggle.classList.toggle("show");
}

form.addEventListener("submit", (e) => {
    localStorage.setItem("user", userInputEle.value);
    this.submit();
})

setTimeout(() => {
    document.getElementById("container-main").style.width = "1000px";
    document.getElementById("container-main").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("container-outer").style.width = "auto";
    document.getElementById("container-outer").style.opacity = "1";
}, 0);

let newUser = document.getElementById("newUser");
newUser.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("container-main").style.width = "500px";
    document.getElementById("container-main").style.gridTemplateColumns = "0fr 1fr";
    document.getElementById("container-outer").style.width = "0";
    document.getElementById("container-outer").style.opacity = "0";
    setTimeout(() => {
        window.location.href="/new-user/new-user.html";
    }, 1000)
})
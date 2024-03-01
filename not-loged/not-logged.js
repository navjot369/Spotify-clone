setTimeout(() => {
    document.getElementById("loading-anim").style.display = "none";
}, 1250);


let popOuter = document.getElementById("pop-outer-cont");
let popImg = document.getElementById("popImg");
let popInner = document.getElementById("pop-inner-cont");

function popup(str, color) {
    popImg.setAttribute("src", str);
    popInner.style.background = "linear-gradient(" + color + ", #666)";
    popOuter.style.display = "flex";
    setTimeout(() => {
    popOuter.style.opacity = "1";
    popInner.style.transform = "scale(1)";
    }, 30);
} 

function closepop() {
    popOuter.style.opacity = "0";
    popInner.style.transform = "scale(0.5)";
    setTimeout(() => {
        popOuter.style.display = "none";
    }, 400);
    
}

let showOuter = document.getElementById("visit-outer-cont");
let showInner = document.getElementById("visit-inner-cont");

function showIt() {
    showOuter.style.display = "flex";
    setTimeout(() => {
        showOuter.style.background = "black";
        showInner.style.opacity = "1";
        showInner.style.transform = "none";
    }, 20);
}

function signUp() {
    showInner.style.transform = "translateX(100vw)";
    showIt();
    setTimeout(() => {
        window.location.href = "./../new-user/new-user.html";
    }, 1010);
}

function logIn() {
    showInner.style.transform = "translateX(-100vw)";
    showIt();
    setTimeout(() => {
        window.location.href = "./../log-in/login.html";
    }, 1010);
}

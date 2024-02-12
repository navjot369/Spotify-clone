console.log('Script Linked');

function toogleSidebar() {
    let elements = document.getElementsByClassName("sidebar-inner");
    let listText = document.getElementsByClassName("side-item-inner");
    let svgFill = document.getElementById("toggle-fill");
    let eleOpt = document.getElementById("up-down-toggle");
    if(elements[0].style.width === '300px') {
        elements[0].style.width = "60px";
        elements[1].style.width = "60px";
        svgFill.style.fill = 'none';
        eleOpt.style.top = '-105px';
        for(let i =0;  i < listText.length; i++) {
            listText[i].style.display = "none";
        }
    }else{
        elements[0].style.width = "300px";
        elements[1].style.width = "300px";
        svgFill.style.fill = "#fff";
        eleOpt.style.top = '0';
        for(let i =0;  i < listText.length; i++) {
            listText[i].style.display = "flex";
        }
    }
    setTimeout(adjustMainWindow, 4000);
}

/* Setting to current timings */
const date = new Date();
const hour = date.getHours();
let wish = "Good ";
if(hour < 12) {
    wish += "Morning";
}else if(hour < 17) {
    wish += "Afternoon";
}else if(hour < 20) {
    wish += "Evening";
}else{
    wish += "Night";
}
document.getElementById("good-times").innerHTML = wish;


function toogleHeartColor() {
    let element = document.getElementById("heart-svg");
    if(element.getAttribute('fill') == "#4BC3F0") {
        element.setAttribute('fill', '#000');
        element.setAttribute('stroke', '#fff');
    }
    else {
        element.setAttribute('fill', '#4BC3F0');
        element.setAttribute('stroke', '#4BC3F0');
    }
}

function toogleView(){
    let element = document.getElementById("view-detail-cont");
    if(element.style.width != "400px") {
        element.style.width = "400px";
    } 
    else{
        element.style.width = "0";
    }
    adjustMainWindow();
}

let red = Math.random() * 200 + 56;
let blue = Math.random() * 200 + 56;
let green = Math.random() * 200 + 56;
let color = "rgb(" + red + ", " + green + ", " + blue + ")";

/* Top bar color setting */
const mainEle = document.getElementById("home-cont");
const topBar = document.getElementById("home-top-bar");
topBar.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", 0)";
function mainbgEffect() {
    let colorHeight = 250 - mainEle.scrollTop;
    let topOpacity = mainEle.scrollTop/200;
    mainEle.style.background = "linear-gradient(180deg, " + color + " 55px , #121212 " + colorHeight + "px)";
    topBar.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + topOpacity + ")";
}
mainbgEffect();
mainEle.addEventListener("scroll", mainbgEffect);

function adjustMainWindow() {
    let w = mainEle.offsetWidth;
    if(w < 800) {
        let ele =  document.querySelector("times-playlist-cont");
        ele.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
}
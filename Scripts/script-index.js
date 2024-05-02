// let user = localStorage.getItem("user");
// if(!user || user.length == 0) {
//     // window.location.href="./not-loged/not-loged.html";
// }
// else {
document.getElementById("user-icon").innerHTML = "N";
document.getElementById("user-name").innerHTML = "Navjot Singh";


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
    setTimeout(adjustMainWindow, 210);
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

function toggleUserInfo() {
    let UserInfo = document.getElementById("user-info-cont");
    if(UserInfo.style.display == "block") {
        UserInfo.style.opacity = "0";
        setTimeout(() => {
            UserInfo.style.display = "none";
            document.body.removeEventListener("click", toggleUserInfo);
        }, 300);
    }
    else {
        UserInfo.style.display = "block";
        setTimeout(() => {
            UserInfo.style.opacity = "1";
            document.body.addEventListener("click", toggleUserInfo);
        }, 10);
    }
}

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
        element.style.opacity = "1";
        document.getElementById("toggleIcon").style.opacity = "1";
    } 
    else{
        element.style.width = "0";
        element.style.opacity = "0";
        document.getElementById("toggleIcon").style.opacity = "0.3";
    }
    setTimeout(adjustMainWindow, 210);
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
window.addEventListener("resize", adjustMainWindow);

function adjustMainWindow() {
    let w = mainEle.offsetWidth;
    let eleTop =  document.querySelector(".times-playlist-cont");
    let eleListCont = document.querySelectorAll(".list-container");
    let eleList = document.querySelectorAll(".track-outer-cont");
    eleList.forEach(item => item.style.display = "none");
    if(w < 600) {
        eleTop.style.gridTemplateColumns = "repeat(1, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(3, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+3)").forEach(item => item.style.display = "block");
    }
    else if(w < 800) {
        eleTop.style.gridTemplateColumns = "repeat(2, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(4, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+4)").forEach(item => item.style.display = "block");
    }
    else if(w < 1000) {
        eleTop.style.gridTemplateColumns = "repeat(3, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(5, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+5)").forEach(item => item.style.display = "block");
    }
    else if(w < 1150) {
        eleTop.style.gridTemplateColumns = "repeat(3, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(6, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+6)").forEach(item => item.style.display = "block");
    }
    else if(w < 1400) {
        eleTop.style.gridTemplateColumns = "repeat(3, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(7, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+7)").forEach(item => item.style.display = "block");
    }
    else {
        eleTop.style.gridTemplateColumns = "repeat(3, 1fr)";
        eleListCont.forEach(item => item.style.gridTemplateColumns = "repeat(8, 1fr)");
        document.querySelectorAll(".track-outer-cont:nth-of-type(-n+8)").forEach(item => item.style.display = "block");}
}
adjustMainWindow();


document.getElementById("follow-button").addEventListener("click", (e) => {
    let ele = e.target;
    if(ele.style.color == "white") {
        ele.style.color =  "black";
        ele.style.background = "white";
        setTimeout(() => ele.innerHTML = "Follow", 200);
    }else {
        ele.style.color = "white";
        ele.style.background = "transparent";
        setTimeout(() => ele.innerHTML = "Unfollow", 200);
    }
})

setTimeout(() => {
    document.getElementById("loading-anim").style.display = "none";
}, 1250);


function logout() {
    localStorage.removeItem("user");
    location.reload();
}

setTimeout(() => {
    document.getElementById("container-main").style.width = "1000px";
    document.getElementById("container-main").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("container-outer").style.width = "auto";
    document.getElementById("container-outer").style.opacity = "1";
}, 0);

let login = document.getElementById("loginHere");
login.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("container-main").style.width = "500px";
    document.getElementById("container-main").style.gridTemplateColumns = "1fr 0fr";
    document.getElementById("container-outer").style.width = "0";
    document.getElementById("container-outer").style.opacity = "0";
    setTimeout(() => {
        window.location.href="/log-in/login.html";
    }, 1000)
})

function showPass(idnum) {
    passToggle = document.getElementById("pass-toggle"+idnum);
    passInputEle = document.getElementById("password-ele" + idnum);
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

let dateEle = document.getElementById("dob");
dateEle.addEventListener("focus", e => {
    e.target.setAttribute("type", "date");
    if(e.target.value === "") {
        e.target.value = "2004-03-06"
    }
})

function allCheckHidden() {
    let elements = document.getElementsByClassName("data-check-outer-cont");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
}

let passEle1 = document.getElementById("password-ele1");
passEle1.addEventListener("focus", () => {
    allCheckHidden();
    document.getElementById("pass-check").style.display = "flex";
    passEle1.style.color = "black";
})

passEle1.addEventListener("blur", () => {
    if(validPassword()) {
        document.getElementById("pass-check").style.display = "none";
    }
    else {
        passEle1.style.color = "red";
    }
})

passEle1.addEventListener("input", validPassword);

function validPassword() {
    let val = passEle1.value;
    let iscorrect = true;

    if(val.length >= 8) {
        document.getElementById("pass-len").style.color = "green";
        document.querySelector("#pass-len span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-len").style.color = "red";
        document.querySelector("#pass-len span").innerHTML = "&#10060;";
        iscorrect = false;
    }

    if(/[A-Z]/.test(val)) {
        document.getElementById("pass-upper").style.color = "green";
        document.querySelector("#pass-upper span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-upper").style.color = "red";
        document.querySelector("#pass-upper span").innerHTML = "&#10060;";
        iscorrect = false;
    }

    if(/[a-z]/.test(val)) {
        document.getElementById("pass-lower").style.color = "green";
        document.querySelector("#pass-lower span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-lower").style.color = "red";
        document.querySelector("#pass-lower span").innerHTML = "&#10060;";
        iscorrect = false;
    }

    if(/[\d]/.test(val)) {
        document.getElementById("pass-num").style.color = "green";
        document.querySelector("#pass-num span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-num").style.color = "red";
        document.querySelector("#pass-num span").innerHTML = "&#10060;";
        iscorrect = false;
    }

    if(/[!@#$%^&*]/.test(val)) {
        document.getElementById("pass-symbol").style.color = "green";
        document.querySelector("#pass-symbol span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-symbol").style.color = "red";
        document.querySelector("#pass-symbol span").innerHTML = "&#10060;";
        iscorrect = false;
    }

    return iscorrect;
}

let passEle2 = document.getElementById("password-ele2");
passEle2.addEventListener("focus", () => {
    allCheckHidden();
    document.getElementById("pass-match").style.display = "flex";
    passEle2.style.color = "black";
})

passEle2.addEventListener("blur", () => {
    if(MatchPass()) {
        document.getElementById("pass-match").style.display = "none";
    }
    else{
        passEle2.style.color = "red";
    }
})

passEle2.addEventListener("input", () => {
    if(MatchPass()) {
        document.getElementById("pass-match-p").style.color = "green";
        document.querySelector("#pass-match-p span").innerHTML = "&check;";
    }
    else {
        document.getElementById("pass-match-p").style.color = "red";
        document.querySelector("#pass-match-p span").innerHTML = "&#10060;";
    }

});

function MatchPass() {
    let val1 = passEle1.value;
    let val2 = passEle2.value;
    if(val1 === val2) {
        return true;
    }
    else{
        return false;
    }
}

let ageInput = document.getElementById("dob");
ageInput.addEventListener("input", e => {
    if(checkAdult()) {
        document.getElementById("age-check").style.color = "green";
        document.querySelector("#age-check span").innerHTML = "&check;";
    }
    else {
        document.getElementById("age-more").style.display = "flex";
        document.getElementById("age-check").style.color = "red";
        document.querySelector("#age-check span").innerHTML = "&#10060;";
    }
})
ageInput.addEventListener("focus", e => {
    allCheckHidden();
    if(!checkAdult()) {
        document.getElementById("age-more").style.display = "flex";
    }
})
ageInput.addEventListener("blur", e => {
    if(checkAdult()) {
        document.getElementById("age-more").style.display = "none";
    }
})


function checkAdult() {
    let currDate = new Date();
    let userDate = new Date(ageInput.value);
    let diff = (currDate - userDate) / (1000 * 60 * 60 * 24 * 365.25);
    if(diff < 18) {
        return false;
    }
    else {
        return true;
    }
}


let form = document.getElementById("new-user-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    allCheckHidden();
    if(!checkAdult()) {
        ageInput.focus();
        document.getElementById("age-more").style.display = "flex";
        return;
    }

    if(!validPassword()) {
        passEle1.focus();
        document.getElementById("pass-check").style.display = "flex";
        return;
    }

    if(!MatchPass()) {
        passEle2.focus();
        document.getElementById("pass-match").style.display = "flex";
        return;
    }

    localStorage.setItem("user", document.getElementById("fname").value);
    window.location.href = "/";

});
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
}


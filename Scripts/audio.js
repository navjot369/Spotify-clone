const audioEle = document.getElementById("audio");
const playPauseIcon = document.getElementById("toggle-play");
const ProgressActive = document.getElementById("progress-active");
const ProgressInput = document.getElementById("progress-input");
const curr_timing = document.getElementById("curr_time");
const total_timing = document.getElementById("total_time");
const play_tooltip = document.getElementById("play-pause-tooltip");
const setName = document.querySelectorAll(".name");
const setSinger = document.querySelectorAll(".singer");
const BannerEle = document.getElementById("banner_ele");
const soundBar = document.getElementById("sound-active");
const soundInput = document.getElementById("sound-input");

audioEle.volume = 0.8;
let isPlaying = false;
let curr_ind = 1;
let syncId;

function playSong() {
    audioEle.play();
    isPlaying = true;
    play_tooltip.innerHTML = "Pause";
    playPauseIcon.setAttribute('src', './Icons/pause.svg');
}

function pauseSong() {
    audioEle.pause();
    isPlaying = false;
    play_tooltip.innerHTML = "Play";
    playPauseIcon.setAttribute('src', './Icons/play.svg');
}

function toogleAudio() {
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function nextSong() {
    loadTrack(curr_ind + 1);
}
function prevSong() {
    if(audioEle.currentTime < 3) {
        loadTrack(curr_ind - 1);
    }else{
        audioEle.currentTime = 0;
        audioSync();
    }
}

function loadTrack(ind) {
    clearInterval(syncId);
    localStorage.setItem("song", ind);
    if(ind < 0){
        ind = songs.length - 1;
    }
    ind %= songs.length;
    curr_ind = ind;
    let current = songs[ind];

    BannerEle.style.backgroundImage = "url('./Images/" + current.banner + "')";
    audioEle.setAttribute('src', "./Songs/" + current.audio);
    document.getElementById("detail-banner").setAttribute("src", "./Images/" + current.banner);
    document.getElementById("detail-banner").style.boxShadow = "0 0 20px #121212";
    document.getElementById("view-detail-cont").style.background =  current.color;
    setName.forEach((ele) => {
        ele.innerHTML = current.name;
    })
    setSinger.forEach((ele) => {
        ele.innerHTML = current.singer;
    })
    audioEle.play();

    syncId = setInterval(audioSync, 1000);
}

ProgressInput.addEventListener("change", (t) => {
    console.log(t);
    let curr_time = t.target.value/100 * audioEle.duration;
    audioEle.currentTime = curr_time;
})
audioEle.addEventListener("pause", () => {
    pauseSong();
})
audioEle.addEventListener("play", () => {
    playSong();
})
audioEle.addEventListener("ended",() => {
    loadTrack(curr_ind + 1);
})

function audioSync() {
    let curr_time = audioEle.currentTime;
    let total_time = audioEle.duration;
    let curr_ratio = curr_time / total_time * 100;
    ProgressActive.style.width = curr_ratio + "%";
    ProgressInput.value = curr_ratio;

    let min = Math.floor(curr_time / 60);
    let sec = Math.floor(curr_time - min*60);
    if(sec < 10) {
        sec = "0" + sec;
    }
    curr_timing.innerHTML = min + ":" + sec;

    let total_min = Math.floor(total_time / 60);
    let total_sec = Math.floor(total_time - total_min * 60);
    if(total_sec < 10) {
        total_sec = "0" + total_sec;
    }
    total_timing.innerHTML = total_min + ":" + total_sec;
}

soundInput.addEventListener("change", (e) => {
    let vol = e.target.value;
    if(vol == 0) {
        document.getElementById("vol-icon").src = "./Icons/volume-mute.svg";
        document.getElementById("tooltip-volume").innerHTML = "Unmute";
    }
    else if(vol < 60) {
        document.getElementById("vol-icon").src = "./Icons/volume-min.svg";
        document.getElementById("tooltip-volume").innerHTML = "Mute";
    }
    else{
        document.getElementById("vol-icon").src = "./Icons/volume-max.svg";
        document.getElementById("tooltip-volume").innerHTML = "Mute";
    }
    soundBar.style.width = vol + "%";
    audioEle.volume = vol/100;
})

function toogleMute() {
    if(audioEle.volume == 0) {
        soundInput.value = 50;
        soundBar.style.width = "50%";
        audioEle.volume = 0.5;
        document.getElementById("vol-icon").src = "./Icons/volume-min.svg";
        document.getElementById("tooltip-volume").innerHTML = "Mute";
    }else{
        soundInput.value = 0;
        soundBar.style.width = "0";
        audioEle.volume = 0;
        document.getElementById("vol-icon").src = "./Icons/volume-mute.svg";
        document.getElementById("tooltip-volume").innerHTML = "Unmute";
    }
}

let songs = [
    {
        name: "Love Ya",
        banner: "love-ya.jpeg",
        audio: "Love-Ya.mp3",
        singer: "Diljit Dosanjh",
        color: "#7A20AA"
    },
    {
        name: "Softly",
        banner: "softly.jpeg",
        audio: "softly.mp3",
        singer: "Karan Aujla",
        color: "#644471"
    }, 
    {
        name: "100 Million",
        banner: "100_Million.jpeg",
        audio: "100_Million.mp3",
        singer: "Divine",
        color: "#111415"
    },
    {
        name: "Straight Ballin",
        banner: "street-dreams.jpeg",
        audio: "Straight Ballin.mp3",
        singer: "Karan Aujla",
        color: "#CC1313"
    },
    {
        name: "Chandigarh Ka Chokra",
        banner: "Chandigarh Ka Chokra.jpeg",
        audio: "Chandigarh Ka Chokra.mp3",
        singer: "Sunanda Sharma",
        color: "#D9596A"
    },
    {
        name: "Udaarian",
        banner: "Udaarian.jpeg",
        audio: "Udaarian.mp3",
        singer: "Satinder Sartaj",
        color: "#552724"
    },
    {
        name: "Saade Kothe Utte",
        banner: "Saade Kothe Utte.jpeg",
        audio: "Saade Kothe Utte.mp3",
        singer: "Ammy Virk",
        color: "#2A7A73"
    },
    {
        name: "Blank Space",
        banner: "Black Space.jpeg",
        audio: "Black Space.mp3",
        singer: "Taylow Swift",
        color: "#39384B"
    },
    {
        name: "Stronger",
        banner: "Stronger.jpeg",
        audio: "Stronger.mp3",
        singer: "Kayne West",
        color: "#EA078A"
    },
    {
        name: "Money",
        banner: "Money.jpeg",
        audio: "Money.mp3",
        singer: "Lisa",
        color: "#927E32"
    },
    {
        name: "Photo",
        banner: "Photo.jpeg",
        audio: "Photo.mp3",
        singer: "Nimrat Khaira",
        color: "#90873D"
    },
    {
        name: "Baller",
        banner: "Baller.jpeg",
        audio: "Baller.mp3",
        singer: "Shubh",
        color: "#1F1F1D"
    },
    {
        name: "Shaka Laka Boom Boom",
        banner: "Bad munda.jpeg",
        audio: "Shaka Laka Boom Boom.mp3",
        singer: "Jass Manak",
        color: "#25B294"
    },
    {
        name: "Combination",
        banner: "Combination.jpeg",
        audio: "Combination.mp3",
        singer: "Amrit Mann",
        color: "#A60405"
    },
    {
        name: "Ittar",
        banner: "Ittar.jpeg",
        audio: "Ittar.mp3",
        singer: "Jasmine Sandlas",
        color: "#B90D0B"
    },
    {
        name: "Black Effect",
        banner: "Black Effect.jpeg",
        audio: "Black Effect.mp3",
        singer: "Jordan Sandhu",
        color: "#583F48"
    },
    {
        name: "Ittar",
        banner: "Ittar.jpeg",
        audio: "Ittar.mp3",
        singer: "Jasmine Sandlas",
        color: "#644471"
    }
];

curr_ind = localStorage.getItem("song")
if(localStorage.getItem("song")) {
    loadTrack(curr_ind);
}
else{
    loadTrack(0);
}
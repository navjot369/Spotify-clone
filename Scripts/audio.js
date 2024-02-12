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
    if(ind < 0){
        ind = songs.length - 1;
    }
    ind %= songs.length;
    curr_ind = ind;
    let current = songs[ind];

    BannerEle.style.backgroundImage = "url('./Images/" + current.banner + "')";
    audioEle.setAttribute('src', "./Songs/" + current.audio);
    setName.forEach((ele) => {
        ele.innerHTML = current.name;
    })
    setSinger.forEach((ele) => {
        ele.innerHTML = current.singer;
    })
    // audioEle.play();

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
        lang: "pb",
        color: "#6B009D"
    },
    {
        name: "Sofly",
        banner: "softly.jpeg",
        audio: "softly.mp3",
        singer: "Karan Aujla",
        lang: "pb",
        color: "#644471"
    }
];

loadTrack(curr_ind);
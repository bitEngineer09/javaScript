let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "One Love - Shubh", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "9 45", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
];


let songItems = Array.from(document.querySelectorAll(".songItems"));
let songName = document.querySelectorAll(".songName");
let songDuration = document.querySelectorAll(".songDuration");
let audioElement = new Audio("songs/7.mp3");
let masterPLay = document.getElementById("masterPlay");
let gif = document.getElementById("playing-gif")
let progressBar = document.getElementById("myProgressBar");
let divPlayButton = Array.from(document.getElementsByClassName("songItemPlay"));
let bottomSongName = document.querySelector("#bottomSongName");



// 1. Each song ki info display karni hai div me
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
});


// 2. MASTER PLAY BUTTON ki functionalities add karo
masterPLay.addEventListener('click', (element) => {
    if (audioElement.currentTime <= 0 || audioElement.paused) {
        audioElement.play();
        bottomSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = "1";
        masterPLay.classList.remove("fa-circle-play");
        masterPLay.classList.add("fa-circle-pause");
    } else {
        audioElement.pause();
        gif.style.opacity = "0";
        masterPLay.classList.remove("fa-circle-pause");
        masterPLay.classList.add("fa-circle-play");
    }
});


// 3. UPDATE SONG -> {seek bar pe click karke song ko aage peeche karna}
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});



// 4. UPDATE SEEK BAR -> {gana jab chalega to progressBar bhi to aage badhega}
audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    console.log(progress);
    progressBar.value = progress;
});



const makeAllPlays = () => {
    // jo makeAllPlays hai vo sabhi buttons par ek saath apna kaam chaalu karega, therefore hume foreach lagna padega
    divPlayButton.forEach((element) => {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
    })
};

divPlayButton.forEach((element) => {
    // divPlayButton bhi to sabhi div par ek saath function karega, therfore Esme bhi forEach lagaya.
    element.addEventListener('click', (e) => {
        document.querySelector(".bottom").style.display = "flex";
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        bottomSongName.innerHTML = songs[songIndex].songName;
        gif.style.opacity = "1";
        masterPLay.classList.remove("fa-circle-play");
        masterPLay.classList.add("fa-circle-pause");    
    });
});

document.querySelector(".previous").addEventListener('click', (e) => {
    if (songIndex < 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = "1";
    bottomSongName.innerText = songs[songIndex].songName;
});

document.querySelector(".next").addEventListener('click', (e) => {
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = "1";
});
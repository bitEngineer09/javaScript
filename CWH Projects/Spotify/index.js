let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterButton = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playingGif = document.getElementById("playing-gif");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let songItemsPlayButton = Array.from(document.querySelectorAll(".songItemPlay"));
let bottomSongName = document.getElementById("bottomSongName");


let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sakhiyan - pav Dharia", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "shoot da order", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},

]


// Handle PLay Pause Click
masterButton.addEventListener('click', (element) => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        bottomSongName.innerText = songs[songIndex].songName;
        masterButton.classList.remove('fa-circle-play');
        masterButton.classList.add('fa-circle-pause');
        playingGif.style.opacity = "1";

    } else {
        audioElement.pause();
        bottomSongName.innerText = songs[songIndex].songName;
        masterButton.classList.add('fa-circle-play');
        masterButton.classList.remove('fa-circle-pause');
        playingGif.style.opacity = "0";
    }
});



// ye song ka data laa ra hai uske particular div me
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
    // element.getElementsByTagName("span")[1].innerHTML = songs[i].filePath.duration;
});



// update seekBar
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime / audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
});



// esse hum progress bar pe click karke gana aage peeche kar sakte hai
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/ 100;
})




// jab ek gaane pe click karenge to ye saare gaane ko pause karega
const makeAllPlays = () => {
    songItemsPlayButton.forEach((element) => {
        element.classList.add("fa-play");
        element.classList.remove("fa-circle-pause")
    })
}



songItemsPlayButton.forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-circle-pause");

        audioElement.src = `songs/${songIndex}.mp3`;
        bottomSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playingGif.style.opacity = "1";
        masterButton.classList.remove("fa-circle-play");
        masterButton.classList.add("fa-circle-pause");
    })
})


document.querySelector(".previous").addEventListener('click', (e) => {
    if (songIndex < 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    playingGif.style.opacity = "1";
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterButton.classList.add("fa-circle-pause");
    masterButton.classList.remove("fa-circle-play");
});

document.querySelector(".next").addEventListener('click', (e) => {
    if (songIndex > 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    playingGif.style.opacity = "1";
    bottomSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterButton.classList.add("fa-circle-pause");
    masterButton.classList.remove("fa-circle-play");
})


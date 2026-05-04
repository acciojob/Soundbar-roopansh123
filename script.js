// sound names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// create audio for each sound
sounds.forEach((sound) => {
    const audio = new Audio(`sounds/${sound}.mp3`);

    // select button and add click event
    const btn = [...document.querySelectorAll(".btn")]
        .find(button => button.innerText === sound);

    btn.addEventListener("click", () => {
        // stop all sounds first
        stopSongs();

        // play selected sound
        audio.play();
    });

    // store audio reference
    btn.audio = audio;
});

// stop function
function stopSongs() {
    document.querySelectorAll(".btn").forEach((btn) => {
        if (btn.audio) {
            btn.audio.pause();
            btn.audio.currentTime = 0;
        }
    });
}

// stop button event
document.querySelector(".stop").addEventListener("click", stopSongs);
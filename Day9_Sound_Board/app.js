const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];


sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSoung();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSoung() {
    sounds.forEach(soung => {
        const song = document.getElementById(soung);
        song.pause();
        song.currentTime = 0;
    })
}
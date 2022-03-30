const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let wait = setInterval(Blurring, 30);


function Blurring() {
    load++;

    if (load > 99) {
        clearInterval(wait)
    }

    console.log(load);

    loadText.innerText = `${load}%`;

    loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;

    bg.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`;
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
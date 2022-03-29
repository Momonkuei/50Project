const open = document.getElementById("open");

const close = document.getElementById("close");

const container = document.querySelector(".container");


open.addEventListener("click", () => {
    container.classList.add("show-nav");
    console.log("123")
})

close.addEventListener("click", () => {
    container.classList.remove("show-nav");
})
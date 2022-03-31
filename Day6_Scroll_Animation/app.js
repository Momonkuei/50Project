const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes()


function checkBoxes() {
    boxes.forEach(box => {
        const scrollTree = window.innerHeight / 5 * 4

        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < scrollTree) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}
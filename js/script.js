let c = console.log;

let slide = document.querySelector(".slide");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let number = 1;

arrowRight.addEventListener("click", () => {
    let directionUrl = `img/${number++}.jpg`;
    slide.src = directionUrl;
    if (number > 3) {
        number = 1;
    }
    slide.classList.toggle("fade-in");
});

arrowLeft.addEventListener("click", () => {
    let directionUrl = `img/${number--}.jpg`;
    slide.src = directionUrl;
    if (number < 1) {
        number = 3;
    }
    slide.classList.toggle("fade-in");
});
// Carrusel 1
const wrapper1 = document.querySelector(".wrapper");
const carousel1 = wrapper1.querySelector(".carousel");
const firstCardWidth1 = carousel1.querySelector(".card").offsetWidth;
const arrowBtns1 = wrapper1.querySelectorAll("i");
const carouselChildrens1 = [...carousel1.children];

let isDragging1 = false, isAutoPlay1 = true, startX1, startScrollLeft1, timeoutId1;

// ... (resto del código para las funciones y eventos del carrusel 1)

// Event listeners para los botones de flecha en el carrusel 1
arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id == "left" ? -firstCardWidth1 : firstCardWidth1;
    });
});

// Carrusel 2
const wrapper2 = document.querySelector("#carousel2");
const carousel2 = wrapper2.querySelector(".carousel");
const firstCardWidth2 = carousel2.querySelector(".card").offsetWidth;
const arrowBtns2 = wrapper2.querySelectorAll("i");
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, isAutoPlay2 = true, startX2, startScrollLeft2, timeoutId2;

// ... (resto del código para las funciones y eventos del carrusel 2)

// Event listeners para los botones de flecha en el carrusel 2
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id == "left" ? -firstCardWidth2 : firstCardWidth2;
    });
});

// Carrusel 3
const wrapper3 = document.querySelector("#carousel3");
const carousel3 = wrapper3.querySelector(".carousel");
const firstCardWidth3 = carousel3.querySelector(".card").offsetWidth;
const arrowBtns3 = wrapper3.querySelectorAll("i");
const carouselChildrens3 = [...carousel3.children];

let isDragging3 = false, isAutoPlay3 = true, startX3, startScrollLeft3, timeoutId3;

// ... (resto del código para las funciones y eventos del carrusel 3)

// Event listeners para los botones de flecha en el carrusel 3
arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id == "left" ? -firstCardWidth3 : firstCardWidth3;
    });
});
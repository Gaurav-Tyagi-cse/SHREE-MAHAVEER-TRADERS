



// script.js


let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".carousel-slide img");
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector(".carousel-slide").style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

// Adjust the interval for slide transition
setInterval(showSlides, 3000);

// Update slider position on window resize
window.addEventListener('resize', () => {
    document.querySelector(".carousel-slide").style.transform = `translateX(${-document.querySelector(".carousel-slide img").clientWidth * slideIndex}px)`;
});



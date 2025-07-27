
// Background slideshow functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-slides');
    let currentSlide = 0;

    // Initialize all slides
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.visibility = 'hidden';
        slide.style.zIndex = '0';
    });

    // Show first slide
    slides[currentSlide].style.opacity = '0.4';
    slides[currentSlide].style.visibility = 'visible';
    slides[currentSlide].style.zIndex = '1';

    function nextSlide() {
        // Hide current slide
        slides[currentSlide].style.opacity = '0';
        slides[currentSlide].style.visibility = 'hidden';
        slides[currentSlide].style.zIndex = '0';

        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].style.opacity = '0.4';
        slides[currentSlide].style.visibility = 'visible';
        slides[currentSlide].style.zIndex = '1';
    }

    setInterval(nextSlide, 5000);
});




//for about images
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.about-slides');
    if (!slides.length) return;
    let current = 0;

    setInterval(() => {
        // hide current
        slides[current].style.opacity = '0';
        slides[current].style.visibility = 'hidden';
        slides[current].style.zIndex = '0';

        // next slide
        current = (current + 1) % slides.length;

        // show next
        slides[current].style.opacity = '1';
        slides[current].style.visibility = 'visible';
        slides[current].style.zIndex = '1';
    }, 2000);   
});
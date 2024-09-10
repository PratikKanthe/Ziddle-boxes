document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', function () {
        // Toggle the 'clicked' class on click
        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
            this.style.height = '20px'; // Shrink back to 20px if already clicked
        } else {
            // Close all other boxes first
            document.querySelectorAll('.box').forEach((otherBox) => {
                if (otherBox !== this) {
                    otherBox.classList.remove('clicked');
                    otherBox.style.height = '20px'; // Close other boxes
                }
            });
            this.classList.add('clicked');
        }
    });
});

// Carousel functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("container");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

    // Add appear animation for boxes
    document.querySelectorAll('.box').forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('appear');
        }, index * 100); // Stagger the appearance
    });
}

// On page load
window.addEventListener('load', () => {
    document.querySelectorAll('.box').forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('appear');
        }, index * 100); // Stagger the appearance
    });
});

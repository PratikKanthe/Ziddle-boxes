const slider = document.getElementById("slider");
// slider.innerHTML = ``;

const boxes = document.querySelectorAll(".box");
const profitDiv = document.querySelector(".profit");
const scores = [50, 100, 75, 125, 150, 90, 110, 130, 70, 60]; // here

//upper div
const prevButton = document.querySelector(".prevup");
const nextButton = document.querySelector(".nextup");
prevButton.style.display = "none";
nextButton.style.display = "none";

//lower div
const prevDownButton = document.querySelector(".prevdown");
const nextDownButton = document.querySelector(".nextdown");
prevDownButton.style.display = "none";
nextDownButton.style.display = "none";

const upperDivBoxes = Array.from(boxes).slice(0, 5).reverse();
const lowerDivBoxes = Array.from(boxes).slice(5);
const allBoxes = boxes; // upperDivBoxes.concat(lowerDivBoxes);

//border color code
document.addEventListener("DOMContentLoaded", function () {
  // Define warm and cold color arrays
  const warmColors = [
    "var(--border-warm1)",
    "var(--border-warm2)",
    "var(--border-warm3)",
    "var(--border-warm4)",
  ];
  const coldColors = [
    "var(--border-cold1)",
    "var(--border-cold2)",
    "var(--border-cold3)",
    "var(--border-cold4)",
  ];

  const upperdivs = document.querySelectorAll(".upperdiv");
  const lowerdivs = document.querySelectorAll(".lower-div");
  //upper div
  upperdivs.forEach((upperdiv) => {
    const upperdivBoxes = upperdiv.querySelectorAll(".box");
    upperdivBoxes.forEach((box) => {
      const randomColdColor =
        coldColors[Math.floor(Math.random() * coldColors.length)];
      box.style.borderColor = randomColdColor;
    });
  });

  // lower div
  lowerdivs.forEach((lowerdiv) => {
    const lowerdivBoxes = lowerdiv.querySelectorAll(".box");
    lowerdivBoxes.forEach((box) => {
      const randomWarmColor =
        warmColors[Math.floor(Math.random() * warmColors.length)];
      box.style.borderColor = randomWarmColor;
    });
  });
});

function resetBoxes() {
  allBoxes.forEach((box) => {
    box.style.height = "20px"; // Default Height
    box.classList.remove(
      "appear",
      "bounce",
      "rotate",
      "zoom",
      "flip",
      "slide-in",
      "grow"
    );
    box.querySelector(".box-content").style.display = "none"; // Hide box content
  });
  profitDiv.classList.remove("appear");
  profitDiv.style.opacity = "0";
}

function applyAnimation(animationClass) {
  profitDiv.classList.add("appear");
  profitDiv.style.opacity = "1"; // Set opacity to 1 when animation starts
  let boxcnt = 0;
  allBoxes.forEach((box, index) => {
    boxcnt += 1;
    setTimeout(() => {
      box.classList.add("appear");
      box.classList.add(animationClass);
    }, index * 300);
    if (boxcnt > 5) {
      prevButton.style.display = "block";
    }
    if (boxcnt > 5) {
      nextDownButton.style.display = "block";
    }
  });
}

function handleBoxClick(event) {
  const box = event.currentTarget;
  const content = box.querySelector(".box-content");

  // Prevent box from growing if opacity is 0
  if (window.getComputedStyle(box).opacity === "0") {
    return;
  }

  if (content.style.display === "none" || content.style.display === "") {
    setTimeout(() => {
      content.style.display = "flex";
    }, 500); // Add content after 0.5 sec
    box.style.height = "210px"; // Expand height to 210px
  } else {
    content.style.display = "none";
    box.style.height = "20px"; // Reset height to 20px
  }
}

function handleMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("grow"); // Apply grow class on hover
  const content = box.querySelector(".box-content");

  if (content.style.display === "none" || content.style.display === "") {
    setTimeout(() => {
      content.style.display = "flex";
    }, 500); // Add content after 0.5 sec
  } else {
    // content.style.display = "none";
  }
}

function handleMouseLeave(event) {
  // const box = event.currentTarget;
  // box.classList.remove("grow"); // Remove grow class when hover ends
  // const content = box.querySelector(".box-content");
  // content.style.display = "none";
}

// Add click listener initially for default behavior
boxes.forEach((box) => {
  box.addEventListener("click", handleBoxClick);
});
// Change animation based on dropdown selection
document.getElementById("animationSelect").addEventListener("change", () => {
  resetBoxes();
  const selectedAnimation = document.getElementById("animationSelect").value;

  if (selectedAnimation === "simple") {
    applyAnimation("appear");
  } else if (selectedAnimation === "random") {
    allBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add("appear");
      }, Math.floor(Math.random() * 1000) + 300);
    });
    profitDiv.classList.add("appear");
    profitDiv.style.opacity = "1";
  } else if (selectedAnimation === "bounce") {
    applyAnimation("bounce");
  } else if (selectedAnimation === "rotate") {
    applyAnimation("rotate");
  } else if (selectedAnimation === "zoom") {
    applyAnimation("zoom");
  } else if (selectedAnimation === "flip") {
    applyAnimation("flip");
  } else if (selectedAnimation === "slide-in") {
    applyAnimation("slide-in");
  }
});

// onload simple animation
window.addEventListener("load", () => {
  resetBoxes(); // reset other animations for boxes first
  applyAnimation("appear");
});

// Handle animation behavior change
const behaviorSelect = document.getElementById("animationBehaviour");

behaviorSelect.addEventListener("change", () => {
  const selectedBehavior = behaviorSelect.value;

  boxes.forEach((box) => {
    box.classList.remove("grow");

    if (selectedBehavior === "onhover") {
      // Grow on hover
      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
      box.removeEventListener("click", handleBoxClick); // Remove click listener
    } else if (selectedBehavior === "onclick") {
      // Grow on click
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
      box.addEventListener("click", handleBoxClick);
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
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
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
}

// Upper div carousel buttons
const slideAmount = document.querySelector(".box").offsetWidth;
const slightScrollAmount = slideAmount / 2;

function plusSlidesUpper(n) {
  const carousel = document.querySelector(".upperdiv");
  if (n === 1) {
    // Slide to the next box
    carousel.scrollBy({
      left: -slightScrollAmount,
      behavior: "smooth",
    });
  } else if (n === -1) {
    nextButton.style.display = "block";
    carousel.scrollBy({
      left: slightScrollAmount,
      behavior: "smooth",
    });
  }
}

document
  .querySelector(".prevup")
  .addEventListener("click", () => plusSlidesUpper(-1));
document
  .querySelector(".nextup")
  .addEventListener("click", () => plusSlidesUpper(1));

// Lower div carousel buttons
const slideAmount1 = document.querySelector(".box").offsetWidth;
const slightScrollAmount1 = slideAmount1 / 2;

function plusSlidesLower(n) {
  const carousel = document.querySelector(".lower-div");

  if (n === 1) {
    // Slide to the next box
    prevDownButton.style.display = "block";
    carousel.scrollBy({
      left: slightScrollAmount1,
      behavior: "smooth",
    });
  } else if (n === -1) {
    carousel.scrollBy({
      left: -slightScrollAmount1,
      behavior: "smooth",
    });
  }
}

document
  .querySelector(".prevdown")
  .addEventListener("click", () => plusSlidesLower(-1));
document
  .querySelector(".nextdown")
  .addEventListener("click", () => plusSlidesLower(1));

const knowLinks = document.querySelectorAll(".know-click");

knowLinks.forEach((knowLink) => {
  knowLink.addEventListener("click", function (event) {
    event.stopPropagation();

    const profitData = document.querySelector(".profit-data");
    const profitText = document.querySelector(".profit-text");
    const profitPopup = document.querySelector(".profit-popup");
    if (profitPopup && profitPopup.style.display === "flex") {
      profitPopup.style.display = "none";
      if (profitData) profitData.style.display = "flex";
      if (profitText) profitText.style.display = "flex";
    } else {
      if (profitData) profitData.style.display = "none";
      if (profitText) profitText.style.display = "none";
      if (profitPopup) profitPopup.style.display = "flex";
    }
  });
});

const readbtn = document.querySelectorAll(".read-btn");

knowLinks.forEach((knowLink) => {
  readbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("clicked");
    const profitPopup2 = document.querySelector(".profit-popup");
    if (profitPopup2 && profitPopup.style.display === "flex") {
      profitPopup2.style.display = "none";
    } else {
      if (profitPopup2) profitPopup2.style.display = "flex";
    }
  });
});

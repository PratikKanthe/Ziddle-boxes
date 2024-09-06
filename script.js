const boxes = document.querySelectorAll(".box");
const profitDiv = document.querySelector(".profit");
const scores = [50, 100, 75, 125, 150, 90, 110, 130, 70, 60];

const upperDivBoxes = Array.from(boxes).slice(0, 5).reverse();
const lowerDivBoxes = Array.from(boxes).slice(5);
const allBoxes = upperDivBoxes.concat(lowerDivBoxes);

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

  allBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("appear");
      box.classList.add(animationClass);
    }, index * 300);
  });

  // setTimeout(() => {
  //   allBoxes.forEach((box) => {
  //     box.style.height = "20px"; // Set height to 20px after animation
  //   });
  // }, allBoxes.length * 300); // here the hight was settled for base state of boxes causing issue
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
    box.style.height = "200px"; // Expand height to 200px

    // if ((box.style.height = "200px")) {
    //   setTimeout(() => {
    //     content.style.display = "flex";
    //   }, 500); // Add content after 0.5 sec
    // } else {
    //   content.style.display = "none";
    // }
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

// // Carousel functionality
// let slideIndex1 = 1;
// showSlidesUp(slideIndex1);

// // Next/previous controls
// function plusSlidesup(n) {
//   showSlidesUp((slideIndex1 += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlidesUp((slideIndex1 = n));
// }

// function showSlidesUp(n) {
//   let i;
//   let slides = document.getElementsByClassName("upperdiv");
//   if (n > slides.length) {
//     slideIndex1 = 1;
//   }
//   if (n < 1) {
//     slideIndex1 = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex1 - 1].style.display = "flex";
// }

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

  const randomHeights = [60, 30, 20]; // Random heights

  const upperdivs = document.querySelectorAll(".upperdiv");
  const lowerdivs = document.querySelectorAll(".lower-div");

  // Function to assign random height
  function assignRandomHeight(box, isThirdBox) {
    if (isThirdBox) {
      box.style.height = "90px"; // Set height to 90px for 3rd box
    } else {
      const randomHeight =
        randomHeights[Math.floor(Math.random() * randomHeights.length)];
      box.style.height = `${randomHeight}px`; // Assign random height to other boxes
    }
  }

  // Upper div boxes with random heights and cold border colors
  upperdivs.forEach((upperdiv) => {
    const upperdivBoxes = upperdiv.querySelectorAll(".box");
    let boxcnt = 0;
    upperdivBoxes.forEach((box, index) => {
      boxcnt += 1;
      const randomColdColor =
        coldColors[Math.floor(Math.random() * coldColors.length)];
      box.style.borderColor = randomColdColor;

      // Assign random height to each box, 3rd box gets 90px
      const isThirdBox = index === 2; // 3rd box (index 2)
      assignRandomHeight(box, isThirdBox);
    });

    if (boxcnt > 6) {
      nextButton.style.display = "block";
    }
  });

  // Lower div boxes with random heights and warm border colors
  lowerdivs.forEach((lowerdiv) => {
    const lowerdivBoxes = lowerdiv.querySelectorAll(".box");
    let boxcnt = 0;
    lowerdivBoxes.forEach((box, index) => {
      boxcnt += 1;
      const randomWarmColor =
        warmColors[Math.floor(Math.random() * warmColors.length)];
      box.style.borderColor = randomWarmColor;

      // Assign random height to each box, 3rd box gets 90px
      const isThirdBox = index === 2; // 3rd box (index 2)
      assignRandomHeight(box, isThirdBox);
    });

    if (boxcnt > 6) {
      nextDownButton.style.display = "block";
    }
  });
});

function resetBoxes() {
  allBoxes.forEach((box) => {
    box.style.height = box.dataset.initialHeight || "20px"; // Use stored height or default to 20px if not available
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

//for profit div
// function applyAnimation(animationClass) {
//   profitDiv.classList.add("appear");
//   profitDiv.style.opacity = "1"; // Set opacity to 1 when animation starts

//   allBoxes.forEach((box, index) => {
//     setTimeout(() => {
//       box.classList.add("appear");
//       // box.classList.add(animationClass);
//     }, index * 300);
//   });
// }

//random heights
const randomHeights = [60, 30, 20];

// Function to assign random height
function assignRandomHeight(box, isThirdBox) {
  let height;
  if (isThirdBox) {
    height = "90px"; // Set height to 90px for 3rd box
  } else {
    const randomHeight =
      randomHeights[Math.floor(Math.random() * randomHeights.length)];
    height = `${randomHeight}px`; // Assign random height to other boxes
  }
  box.style.height = height;
  box.dataset.initialHeight = height; // Store the height in a data attribute
}

function applyAnimation(animationClass) {
  const upperDivBoxes = document.querySelectorAll(".upperdiv .box");
  const lowerDivBoxes = document.querySelectorAll(".lower-div .box");
  // Sequence order for appearing
  const sequence = [3, 2, 4, 5, 1, 6];

  // Animate upper div boxes in sequence
  sequence.forEach((order, index) => {
    setTimeout(() => {
      const isThirdBox = order === 3;
      assignRandomHeight(upperDivBoxes[order - 1], isThirdBox);
      upperDivBoxes[order - 1].classList.add("appear", animationClass);
    }, index * 300);
  });

  // Animate lower div boxes in sequence
  sequence.forEach((order, index) => {
    setTimeout(() => {
      const isThirdBox = order === 3; // Check if it's the 3rd box
      assignRandomHeight(lowerDivBoxes[order - 1], isThirdBox);
      lowerDivBoxes[order - 1].classList.add("appear", animationClass);
    }, index * 300);
  });

  // for profit div
  profitDiv.classList.add("appear");
  profitDiv.style.opacity = "1";
  allBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("appear");
    }, index * 300);
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
    box.style.height = box.dataset.initialHeight; // Reset to the initially assigned height
  }
}

// function handleMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add("grow"); // Apply grow class on hover
//   const content = box.querySelector(".box-content");

//   if (content.style.display === "none" || content.style.display === "") {
//     setTimeout(() => {
//       content.style.display = "flex";
//     }, 500); // Add content after 0.5 sec
//   } else {
//     // content.style.display = "none";
//   }
// }

function handleMouseLeave(event) {
  // const box = event.currentTarget;
  // box.classList.remove("grow"); // Remove grow class when hover ends
  // const content = box.querySelector(".box-content");
  // content.style.display = "none";
}

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
      box.removeEventListener("click", handleBoxClick);
    } else if (selectedBehavior === "onclick") {
      // Grow on click
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
      box.addEventListener("click", handleBoxClick);
    }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("container");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
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
  // applyAnimation("appear");
}

// Upper div carousel buttons
const boxUpper = document.querySelector(".box");
const boxUpperWidth = boxUpper ? boxUpper.offsetWidth : 0;
const scrollAmountUpper = boxUpperWidth + 10;
let upperScrollPosition = 0;

function updateButtonVisibility() {
  const carousel = document.querySelector(".upperdiv");
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Show or hide prevup button
  const prevUpButton = document.querySelector(".prevup");
  if (carousel.scrollLeft > 0) {
    prevUpButton.style.display = "block";
  } else {
    prevUpButton.style.display = "none";
  }

  // Show or hide nextup button
  const nextUpButton = document.querySelector(".nextup");
  if (carousel.scrollLeft < maxScrollLeft) {
    nextUpButton.style.display = "block";
  } else {
    nextUpButton.style.display = "none";
  }
}

function plusSlidesUpper(n, obj) {
  const carousel = $(obj).siblings(".upperdiv");
  const originalPosition = $(carousel).scrollLeft(); // Current scroll position

  if (n === 1) {
    // Scroll to the right (next boxes)
    upperScrollPosition = originalPosition + scrollAmountUpper;
    $(carousel).animate({ scrollLeft: upperScrollPosition }, 500, function () {
      updateButtonVisibility();
    });
  } else if (n === -1) {
    // Scroll to the left (previous boxes)
    upperScrollPosition = originalPosition - scrollAmountUpper;
    $(carousel).animate({ scrollLeft: upperScrollPosition }, 500, function () {
      updateButtonVisibility();
    });
  }
}

// Initialize button visibility on page load
document.addEventListener("DOMContentLoaded", updateButtonVisibility);

const box = document.querySelector(".box");
const boxWidth = box.offsetWidth;
const scrollAmount = boxWidth + 10;
let lowerScrollPosition = 0;

function updateButtonDownVisibility() {
  const carouseldown = document.querySelector(".lower-div");
  const maxScrollLeftDown = carouseldown.scrollWidth - carouseldown.clientWidth;

  // Show or hide prevup button
  const prevDownButton = document.querySelector(".prevdown");
  if (carouseldown.scrollLeft > 0) {
    prevDownButton.style.display = "block";
  } else {
    prevDownButton.style.display = "none";
  }

  // Show or hide nextup button
  const nextDownButton = document.querySelector(".nextdown");
  if (carouseldown.scrollLeft < maxScrollLeftDown) {
    nextDownButton.style.display = "block";
  } else {
    nextDownButton.style.display = "none";
  }
}

function plusSlidesLower(n, obj) {
  const carousel = $(obj).siblings(".lower-div");
  const originalPosition = $(carousel).scrollLeft(); // Current scroll position

  if (n === 1) {
    // Scroll to the right (next boxes)
    lowerScrollPosition = originalPosition - scrollAmount;
    // $(carousel).animate({ scrollLeft: lowerScrollPosition }, 500); // Smooth scroll
    $(carousel).animate({ scrollLeft: lowerScrollPosition }, 500, function () {
      updateButtonDownVisibility();
    });
  } else if (n === -1) {
    // Scroll to the left (previous boxes)
    prevDownButton.style.display = "block";
    lowerScrollPosition = originalPosition + scrollAmount;
    // $(carousel).animate({ scrollLeft: lowerScrollPosition }, 500); // Smooth scroll
    $(carousel).animate({ scrollLeft: lowerScrollPosition }, 500, function () {
      updateButtonDownVisibility();
    });
  }
}
document.addEventListener("DOMContentLoaded", updateButtonDownVisibility);

const knowLinks = document.querySelectorAll(".know-click");

const profitData = document.querySelector(".profit-data");
const profitText = document.querySelector(".profit-text");
const profitPopup = document.querySelector(".popup");

knowLinks.forEach((knowLink) => {
  knowLink.addEventListener("click", function (event) {
    event.stopPropagation();

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

const popubback = document.querySelectorAll(".popup-back");

popubback.forEach((back) => {
  back.addEventListener("click", function (event) {
    profitPopup.style.display = "none";
    if (profitData) profitData.style.display = "flex";
    if (profitText) profitText.style.display = "flex";
  });
});

//show message to grow box
// document.addEventListener("DOMContentLoaded", function () {
//   const showMessage = document.querySelector(".showmesg");

//   let messageTimeout = setTimeout(function () {
//     showMessage.classList.add("show");
//   }, 5000);

//   let boxes = document.querySelectorAll(".box");
//   boxes.forEach(function (box) {
//     box.addEventListener("click", function () {
//       clearTimeout(messageTimeout);
//       showMessage.classList.remove("show");
//     });
//   });
// });

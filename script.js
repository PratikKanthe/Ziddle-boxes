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

  // const randomHeights = [60, 30, 20]; // Random heights

  const upperdivs = document.querySelectorAll(".upperdiv");
  const lowerdivs = document.querySelectorAll(".lower-div");

  // // Function to assign random height
  // function assignRandomHeight(box, isThirdBox) {
  //   if (isThirdBox) {
  //     box.style.height = "90px"; // Set height to 90px for 3rd box
  //   } else {
  //     const randomHeight =
  //       randomHeights[Math.floor(Math.random() * randomHeights.length)];
  //     box.style.height = `${randomHeight}px`; // Assign random height to other boxes
  //   }
  // }

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

const randomHeights = [25, 20, 15, 10, 8]; // before clicked in px
const randomGrowHeights = [200, 160, 120, 80, 40]; // after clicked in px

// Function to assign random height
function assignRandomHeight(box, isThirdBox) {
  let height;
  if (isThirdBox) {
    height = "30px"; // Set height to 30px for 3rd box before clicked
  } else {
    const randomIndex = Math.floor(Math.random() * randomHeights.length);
    const randomHeight = randomHeights[randomIndex];
    height = `${randomHeight}px`; // Assign random height to other boxes

    // Store both initial height and corresponding grow height in data attributes
    box.dataset.initialHeight = height;
    box.dataset.growHeight = `${randomGrowHeights[randomIndex]}px`;
  }
  box.style.height = height;
}

function handleBoxClick(event) {
  const box = event.currentTarget;
  const content = box.querySelector(".box-content");

  // Prevent box from growing if opacity is 0
  if (window.getComputedStyle(box).opacity === "0") {
    return;
  }
  // Remove bounce animation class on click
  box.classList.remove("bounce-animation");

  const isThirdBox = box.classList.contains("third-box");

  if (content.style.display === "none" || content.style.display === "") {
    setTimeout(() => {
      content.style.display = "flex";
    }, 500); // Add content after 0.5 sec

    if (isThirdBox) {
      box.style.height = "220px"; // Expand height to 220px for 3rd box
    } else {
      // Use the grow height stored in the data attribute
      box.style.height = box.dataset.growHeight;
    }
  } else {
    content.style.display = "none";
    if (isThirdBox) {
      box.style.height = "30px"; // Collapse height to 30px for 3rd
    }
    box.style.height = box.dataset.initialHeight; // Reset to the initially assigned height
  }
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

  // Once all animations are done, trigger the addGrowAnimation animation
  setTimeout(() => {
    addGrowAnimation();
  }, sequence.length * 300 + 500);
}

function addGrowAnimation() {
  const thirdBox = document.querySelector(".upperdiv .box:nth-child(3)");
  if (thirdBox) {
    thirdBox.classList.add("growbox");
  }
}

// function applyBounceAnimation() {
//   const upperDivBoxes = document.querySelectorAll(".upperdiv .box");
//   const lowerDivBoxes = document.querySelectorAll(".lower-div .box");
//   const thirdBox = document.querySelector(".thirdBox");

//   function setBounceHeight(box, index) {
//     const initialHeight = box.offsetHeight;
//     const growHeight = initialHeight + 10;

//     // Set heights as custom properties
//     box.style.setProperty("--initial-height", `${initialHeight}px`);
//     box.style.setProperty("--grow-height", `${growHeight}px`);

//     // Generate a random delay for each box
//     const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
//     box.style.animationDelay = `${randomDelay}s`;

//     // Add the bounce animation class
//     box.classList.add("bounce-animation");
//   }

//   // Apply to upper and lower div boxes with random delays
//   upperDivBoxes.forEach(setBounceHeight);
//   lowerDivBoxes.forEach(setBounceHeight);

//   if (thirdBox) {
//     setBounceHeight(thirdBox);
//   }
// }

// Stop all animations when a box is clicked
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", handleBoxClick);
});

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

document.addEventListener("DOMContentLoaded", function () {
  const knowLinks = document.querySelectorAll(".know-click");
  const profitPopup = document.querySelector(".popup");
  const moreBtnInPopup = document.getElementById("more");

  let activeBox = null; // Track the currently active box
  let isPopupOpen = false; // Track popup state

  function closePopup() {
    profitPopup.style.display = "none";
    isPopupOpen = false;
    activeBox = null;
    // Restore event listeners for all "More..." links
    knowLinks.forEach((link) => {
      link.style.pointerEvents = "auto"; // Make them clickable again
    });
  }

  knowLinks.forEach((knowLink) => {
    knowLink.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const box = event.currentTarget.closest(".box");

      // Check if the popup is already open for this box
      if (activeBox === box && isPopupOpen) {
        // Toggle popup: close it if clicking the same box again
        closePopup();
        return;
      }

      // If a different box is clicked while popup is open
      if (isPopupOpen && activeBox !== box) {
        // Keep the popup open but change its border color to the new box's border color
        profitPopup.style.borderColor =
          window.getComputedStyle(box).borderColor;
        activeBox = box; // Set the new active box
        return; // No need to close or re-open the popup
      }

      // Set popup to open for the first time
      isPopupOpen = true;
      activeBox = box; // Save the clicked box

      // Get the border color of the clicked box and apply it to the popup
      const boxBorderColor = window.getComputedStyle(box).borderColor;
      profitPopup.style.borderColor = boxBorderColor;

      // Show the popup
      profitPopup.style.display = "flex";

      // Disable "More..." links on other boxes to prevent multiple popups
      knowLinks.forEach((link) => {
        if (link !== event.currentTarget) {
          link.style.pointerEvents = "none"; // Disable clicks on other links
        }
      });
    });
  });

  // Close popup on "Back" button click
  const popupBackButtons = document.querySelectorAll(".popup-back");
  popupBackButtons.forEach((backButton) => {
    backButton.addEventListener("click", function () {
      closePopup();
    });
  });

  // Handle the "More..." and "Less..." button inside the popup
  moreBtnInPopup.addEventListener("click", function () {
    if (profitPopup.classList.contains("popup-grow")) {
      // If popup is grown, shrink it
      profitPopup.classList.remove("popup-grow");
      moreBtnInPopup.innerText = "More...";
    } else {
      // If popup is not grown, expand it
      profitPopup.classList.add("popup-grow");
      moreBtnInPopup.innerText = "Less...";
    }
  });

  // Close popup if clicked outside the popup
  document.addEventListener("click", function (event) {
    if (
      isPopupOpen &&
      !profitPopup.contains(event.target) &&
      !activeBox.contains(event.target)
    ) {
      closePopup();
    }
  });
});

//grow boxes one by one
// function applyAnimation(animationClass) {
//   const upperDivBoxes = document.querySelectorAll(".upperdiv .box");
//   const lowerDivBoxes = document.querySelectorAll(".lower-div .box");
//   profitDiv.classList.add("appear");
//   profitDiv.style.opacity = "1";
//   // Sequence order for appearing
//   const sequence = [3, 2, 4, 5, 1, 6];

//   // Define timing for the different stages
//   const appearDuration = 500; // Time for box to appear (ms)
//   const growDuration = 1200;  // Time for box to grow (ms)
//   const shrinkDuration = 700; // Time for box to shrink back (ms)

//   // Function to animate a single box (appear -> grow -> shrink)
//   function animateBox(box, isThirdBox, callback) {
//     // Remove any existing transition to prevent cubic-bezier effect during onload animation
//     box.style.transition = 'none';

//     // Set box to initial height and make it visible
//     assignRandomHeight(box, isThirdBox);
//     box.classList.add("appear", animationClass);

//     // Step 1: Apply no transition for initial appearance
//     setTimeout(() => {
//       // Apply cubic-bezier and grow the box after it appears
//       box.style.transition = 'height 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.6s ease, opacity 0.6s ease';

//       if (isThirdBox) {
//         box.style.height = "220px"; // Third box grows to 220px
//       } else {
//         box.style.height = box.dataset.growHeight; // Other boxes grow to their grow height
//       }

//       // Step 2: After growth, shrink the box back to its initial height
//       setTimeout(() => {
//         box.style.height = isThirdBox ? "30px" : box.dataset.initialHeight; // Shrink third box to 30px, others to their initial height

//         // Step 3: Call the callback to trigger the next box
//         setTimeout(() => {
//           if (callback) callback();
//         }, shrinkDuration);
//       }, growDuration);
//     }, appearDuration);
//   }

//   // Function to animate all boxes in sequence
//   function animateBoxesInSequence(boxes, callback) {
//     let index = 0;

//     function nextBox() {
//       if (index >= sequence.length) {
//         if (callback) callback(); // If finished, trigger the callback to start lower div
//         return; // End if all boxes are done
//       }

//       const order = sequence[index]; // Get the current box in the sequence
//       const box = boxes[order - 1];
//       const isThirdBox = order === 3;

//       // Animate the current box, and move to the next one after it's done
//       animateBox(box, isThirdBox, nextBox);
//       index++;
//     }

//     // Start the sequence
//     nextBox();
//   }

//   // Animate upper div boxes first, then lower div boxes after upper div completes
//   animateBoxesInSequence(upperDivBoxes, () => {
//     // After upperDivBoxes animation completes, start lowerDivBoxes animation
//     animateBoxesInSequence(lowerDivBoxes);
//   });
// }

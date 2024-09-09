const slider = document.getElementById("slider");
slider.innerHTML = `
<div class="scroll-container">
      <div class="carousel">
        <div class="container fade">
          <div class="scroll-upperdiv">
            <div class="carousel-upperdiv">
              <div class="upperdiv flex">
                <div class="box box5 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">56 Days</h1>
                    <div class="text-center">
                      <p>Last 2 months</p>
                      <p>Previous months</p>
                      <p>28 Days</p>
                    </div>
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box5 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">56 Days</h1>
                    <div class="text-center">
                      <p>Last 2 months</p>
                      <p>Previous months</p>
                      <p>28 Days</p>
                    </div>
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box5 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">56 Days</h1>
                    <div class="text-center">
                      <p>Last 2 months</p>
                      <p>Previous months</p>
                      <p>28 Days</p>
                    </div>
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box4 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">58 Days</h1>
                    <div class="text-center">
                      <p>Last 4 months</p>
                      <p>Previous months</p>
                      <p>25 Days</p>
                    </div>
                  </div>
                </div>
                <div class="box box3 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">65 Days</h1>
                    <div class="text-center">
                      <p>Last 3 months</p>
                      <p>Previous months</p>
                      <p>15 Days</p>
                    </div>
                    <div class="know">
                      <a href="page.html">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box2 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">45 Days</h1>
                    <div class="text-center">
                      <p>Last 6 months</p>
                      <p>Previous months</p>
                      <p>10 Days</p>
                    </div>
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box1 box-radius">
                  <div class="box-content box-content1">
                    <p class="subhead text-center">Supplier Credit Period</p>
                    <h1 class="box-heading">92 Days</h1>
                    <div class="text-center">
                      <p>Last 7 months</p>
                      <p>Previous months</p>
                      <p>29 Days</p>
                    </div>
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a class="prevup" onclick="plusSlidesUpper(-1)">&#10094;</a>
            <a class="nextup" onclick="plusSlidesUpper(1)">&#10095;</a>
          </div>
          <div class="profit">
            <div class="profit-data text-center">
              <div class="cashflow">
                <p>cashflow :</p>
                <h1 class="profit-heading">86.67</h1>
                <p><span class="subhead">cr.</span> coming 2 months</p>
              </div>
            </div>
            <div class="profit-text">
              <p>
                "Marvelous Your Net Cashflow is INR 60.23 Cr. in the coming
                couple of months is projected to be satisfactory"
              </p>
            </div>
          </div>

          <div class="scroll-lowerdiv">
            <div class="carousel-lowerdiv">
              <div class="lower-div flex">
                <div class="box box6 box-radius2">
                  <div class="box-content">
                    Box 6 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box7 box-radius2">
                  <div class="box-content">
                    Box 7 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box8 box-radius2">
                  <div class="box-content">
                    Box 8 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box9 box-radius2">
                  <div class="box-content">
                    Box 9 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box10 box-radius2">
                  <div class="box-content">
                    Box 10 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box10 box-radius2">
                  <div class="box-content">
                    Box 10 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
                <div class="box box10 box-radius2">
                  <div class="box-content">
                    Box 10 Data
                    <div class="know">
                      <a href="#">Know More...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="prevdown" onclick="plusSlidesLower(-1)">&#10094;</a>
            <a class="nextdown" onclick="plusSlidesLower(1)">&#10095;</a>
          </div>

          <!-- Carousel Controls for Lower Div -->
          <a class="prev" onclick="plusSlidesLower(-1)">&#10094;</a>
          <a class="next" onclick="plusSlidesLower(1)">&#10095;</a>
        </div>

        <div class="container fade">
          <div class="upperdiv flex">
            <div class="box box5 box-radius">
              <div class="box-content box-content1">Box 5 Data</div>
            </div>
            <div class="box box4 box-radius">
              <div class="box-content box-content1">Box 4 Data</div>
            </div>
            <div class="box box3 box-radius">
              <div class="box-content box-content1">
                <p class="subhead text-center">Supplier Credit Period</p>
                <h1 class="box-heading">56 Days</h1>
                <div class="text-center">
                  <p>Last 3 months</p>
                  <p>Previous months</p>
                  <p>23 Days</p>
                </div>
              </div>
            </div>
            <div class="box box2 box-radius">
              <div class="box-content box-content1">Box 2 Data</div>
            </div>
            <div class="box box1 box-radius">
              <div class="box-content box-content1">Box 1 Data</div>
            </div>
          </div>
          <div class="profit">
            <div class="profit-data text-center">
              <div class="cashflow">
                <p>SalesOrder :</p>
                <h1 class="profit-heading">1.5</h1>
                <p><span class="subhead">cr.</span> coming 2 months</p>
              </div>
            </div>
            <div class="profit-text">
              <p>
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias explicabo fugiat molestiae perspiciatis neque
                asperiores.""
              </p>
            </div>
          </div>
          <div class="lower-div flex">
            <div class="box box6 box-radius2">
              <div class="box-content">
                <p class="subhead text-center">Sundry Credit Period</p>
                <h1 class="box-heading">56 Days</h1>
                <div class="text-center">
                  <p>Last 2 months</p>
                  <p>Previous months</p>
                  <p>28 Days</p>
                </div>
              </div>
            </div>
            <div class="box box7 box-radius2">
              <div class="box-content">
                <p class="subhead text-center">Lorem, ipsum dolor.</p>
                <h1 class="box-heading">82 Days</h1>
                <div class="text-center">
                  <p>Last 2 months</p>
                  <p>Previous months</p>
                  <p>28 Days</p>
                </div>
              </div>
            </div>
            <div class="box box8 box-radius2">
              <div class="box-content">
                <p class="subhead text-center">Lorem ipsum dolor sit.</p>
                <h1 class="box-heading">75 Days</h1>
                <div class="text-center">
                  <p>Last 2 months</p>
                  <p>Previous months</p>
                  <p>28 Days</p>
                </div>
              </div>
            </div>
            <div class="box box9 box-radius2">
              <div class="box-content">
                <p class="subhead text-center">Lorem, ipsum.</p>
                <h1 class="box-heading">28 Days</h1>
                <div class="text-center">
                  <p>Last 2 months</p>
                  <p>Previous months</p>
                  <p>28 Days</p>
                </div>
              </div>
            </div>
            <div class="box box10 box-radius2">
              <div class="box-content">
                <p class="subhead text-center">Lorem ipsum dolor sit amet.</p>
                <h1 class="box-heading">24 Days</h1>
                <div class="text-center">
                  <p>Last 2 months</p>
                  <p>Previous months</p>
                  <p>28 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container fade">
          <div class="upperdiv flex">
            <div class="box box5 box-radius">
              <div class="box-content box-content1">Box 5 Data</div>
            </div>
            <div class="box box4 box-radius">
              <div class="box-content box-content1">Box 4 Data</div>
            </div>
            <div class="box box3 box-radius">
              <div class="box-content box-content1">
                <p class="subhead text-center">Supplier Credit Period</p>
                <h1 class="box-heading">56 Days</h1>
                <div class="text-center">
                  <p>Last 3 months</p>
                  <p>Previous months</p>
                  <p>23 Days</p>
                </div>
              </div>
            </div>
            <div class="box box2 box-radius">
              <div class="box-content box-content1">Box 2 Data</div>
            </div>
            <div class="box box1 box-radius">
              <div class="box-content box-content1">Box 1 Data</div>
            </div>
          </div>
          <div class="profit">
            <div class="profit-data text-center">
              <div class="cashflow">
                <p>Purchase Order :</p>
                <h1 class="profit-heading">2</h1>
                <p><span class="subhead">cr.</span> coming 1 months</p>
              </div>
            </div>
            <div class="profit-text">
              <p>
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum, in voluptates. Numquam iure dolores quod?"
              </p>
            </div>
          </div>
          <div class="lower-div flex">
            <div class="box box6 box-radius2">
              <div class="box-content">Box 6 Data</div>
            </div>
            <div class="box box7 box-radius2">
              <div class="box-content">Box 7 Data</div>
            </div>
            <div class="box box8 box-radius2">
              <div class="box-content">Box 8 Data</div>
            </div>
            <div class="box box9 box-radius2">
              <div class="box-content">Box 9 Data</div>
            </div>
            <div class="box box10 box-radius2">
              <div class="box-content">Box 10 Data</div>
            </div>
          </div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </div>
`;

const boxes = document.querySelectorAll(".box");
const profitDiv = document.querySelector(".profit");
const scores = [50, 100, 75, 125, 150, 90, 110, 130, 70, 60];

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
const allBoxes = upperDivBoxes.concat(lowerDivBoxes);

// Function to generate a random dark color
function getRandomDarkColor() {
  let color;
  do {
    color = getRandomColor(); // Get a random color
  } while (isColorLight(color)); // Keep generating until it's dark enough
  return color;
}

// Function to generate a random color in hex format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to check if a color is light
function isColorLight(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 127;
}

// Apply random dark border color to each box
boxes.forEach((box) => {
  box.style.borderColor = getRandomDarkColor();
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
    box.style.height = "200px"; // Expand height to 200px
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

// Upper div carousel buttons
const slideAmount = document.querySelector(".box").offsetWidth;
const slightScrollAmount = slideAmount / 2;

function plusSlidesUpper(n) {
  const carousel = document.querySelector(".upperdiv");
  // Slide by the slight scroll amount
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

// Add event listeners to the buttons
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
  // Slide by the slight scroll amount
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

// Add event listeners to the buttons
document
  .querySelector(".prevdown")
  .addEventListener("click", () => plusSlidesLower(-1));
document
  .querySelector(".nextdown")
  .addEventListener("click", () => plusSlidesLower(1));

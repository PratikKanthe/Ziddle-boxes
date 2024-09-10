const boxes = document.querySelectorAll(".box");
const profitDiv = document.querySelector(".profit");
const scores = [50, 100, 75, 125, 150, 90, 110, 130, 70, 60];

const upperDivBoxes = Array.from(boxes).slice(0, 5).reverse();
const lowerDivBoxes = Array.from(boxes).slice(5);
const allBoxes = upperDivBoxes.concat(lowerDivBoxes);

function resetBoxes() {
    allBoxes.forEach((box) => {
        box.style.height = '20px';  // Set default height after animation
        box.classList.remove("appear", "bounce", "rotate", "zoom", "flip", "slide-in");
        box.querySelector(".box-content").style.display = "none"; // Hide content
    });
    profitDiv.classList.remove("appear");
    profitDiv.style.opacity = "0";
}

function applyAnimation(animationClass) {
    profitDiv.classList.add("appear");
    profitDiv.style.opacity = "1";  // Set opacity to 1 when animation starts

    allBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("appear");
            box.classList.add(animationClass);
        }, index * 300);
    });

    // Reset height after animations are done
    setTimeout(() => {
        allBoxes.forEach(box => {
            box.style.height = '20px'; // Set height to 20px after animation
        });
    }, allBoxes.length * 300);
}

// Function to handle box click event
function handleBoxClick(event) {
    const box = event.currentTarget;
    const content = box.querySelector(".box-content");

    // Toggle visibility of the box content
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        box.style.height = "200px"; // Expand height to 200px when clicked
    } else {
        content.style.display = "none";
        box.style.height = '20px'; // Reset height to 20px when content is hidden
    }
}

// Attach click event listener to all boxes
boxes.forEach(box => {
    box.addEventListener("click", handleBoxClick);
});

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
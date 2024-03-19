// Select all elements to be animated
const items = document.querySelectorAll(".browser");

// Function to animate items in a loop
function animateItems() {
  items.forEach((item, index) => {
    anime({
      targets: item,
      opacity: [1, 0], // Animate opacity from 0 to 1
      translateY: [index, -120], // Animate translateY from -120 to 0
      translateX: [index + 5, 0],
      delay: index * 1000, // Delay each item's animation (adjust as needed)
      duration: 2000, // Duration of each animation
      easing: "easeInOutSine",
      // loop: true,
    });
  });
}

// Initial animation
animateItems();

// Loop the animation
setInterval(() => {
  // Reset opacity and translateY for all items
  items.forEach((item, index) => {
    item.classList.add("slide-up");
    // item.style.transform = "translateY(-120px)";
  });
  // Re-run the animation
  animateItems();
}, 6000); // Repeat every 10 seconds (adjust as needed)

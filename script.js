// Function to toggle the mobile navigation menu
function hamburger() {
  // Get menu, logo, heading, and navigation length elements
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("web-logo");
  var heading = document.getElementById("header");
  var NavLength = document.getElementById("top-length");

  // Check if the menu is displayed and the logo is hidden
  if (menu.style.display === "block" && logo.style.display === "none") {
    // Hide the menu, display the logo and heading, adjust navigation length
    menu.style.display = "none";
    NavLength.style.height = 200 + "px";
    logo.style.display = "block";
    heading.style.display = "block";
  } else {
    // Show the menu, hide the logo and heading, adjust navigation length
    menu.style.display = "block";
    NavLength.style.height = 350 + "px";
    logo.style.display = "none";
    heading.style.display = "none";
  }
}

// Set the height of the map header
var mapHeight = document.getElementById("map-height");
mapHeight.style.height = 200 + "px";

// Adjust the positioning of the map navigation
var mapNav = document.getElementById("map-nav");
mapNav.style.transform = "translateY(10%)";

// Adjust the positioning of the map header
var mapHeader = document.getElementById("map-header");
mapHeader.style.transform = "translateY(250%)";

// Function to animate the courses image
function animateImage(img) {
  var yPos = -50; // Initial y position
  var opacity = 0; // Initial opacity
  var id = setInterval(frame, 10); // Interval for animation

  function frame() {
    if (yPos >= 0) {
      clearInterval(id); // Stop the animation when image reaches desired position
    } else {
      yPos++; // Move the image upwards
      opacity += 0.01; // Increase opacity gradually
      img.style.transform = "translateY(" + yPos + "%)"; // Apply translateY transformation
      img.style.opacity = opacity; // Apply opacity
    }
  }
}


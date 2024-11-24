// Selecting elements
const sideBarContainerEl = document.querySelector(".side-bar-container");
const closeEl = document.querySelector(".close");
const hamburgerEl = document.querySelector(".hamburger");

// Hide side Menu
const hideSideBar = () => {
  // console.log("sideNav clicked");

  // Move out side menu out of the viewport
  sideBarContainerEl.style.transform = "translateX(100%)";

  // Show Hamburger
  hamburgerEl.style.opacity = 1;
};

// Open Side Menu
const openSideBar = () => {
  // console.log("hamburger clicked");

  // Set side menu to it's default position
  sideBarContainerEl.style.transform = "translateX(0)";

  // Hide Hamburger
  hamburgerEl.style.opacity = 0;
};

// Event Listeners
closeEl.addEventListener("click", hideSideBar);
hamburgerEl.addEventListener("click", openSideBar);

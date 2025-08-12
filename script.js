// script.js

// Function to show a popup message
function showPopupMessage() {
  alert("Get To Know Lerato!");
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select the button by its ID
  const popupButton = document.getElementById("popupBtn");

  // Add an event listener to trigger the function on click
  popupButton.addEventListener("click", showPopupMessage);
});

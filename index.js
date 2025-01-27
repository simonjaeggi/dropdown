function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-menu");

  // Hide subelements initially
  dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.style.visibility = "hidden";
  });
  updateEventListeners(); 
}

function updateEventListeners() {
  const dropdowns = document.querySelectorAll(".dropdown-menu");

  dropdowns.forEach((dropdown) => {

    // Remove previous event listeners
    newDropdown = dropdown.cloneNode(true);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);
    const dropdownContent = newDropdown.querySelector(".dropdown-content");

    //Add new event listener
      newDropdown.addEventListener("mouseover", () => {
        dropdownContent.style.visibility = "visible";
      });

      newDropdown.addEventListener("mouseleave", () => {
        dropdownContent.style.visibility = "hidden";
      });
    
  });
}

module.exports = {
  initializeDropdowns
};

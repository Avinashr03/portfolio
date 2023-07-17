// Get the navbarToggle button element
const navbarToggle = document.getElementById('menuIcon');

// Get the navmobile menu element
const navmobile = document.querySelector('.navmobile');

// Add a click event listener to the navbarToggle button
navbarToggle.addEventListener('click', function() {
  // Toggle the 'hide' class on the navmobile menu
  navmobile.classList.toggle('hide');
});

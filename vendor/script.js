// Get all the links in the navbar
const navbarLinks = document.querySelectorAll('.navbar li a');

// Add event listener to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navbarLinks.forEach(link => link.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
  });
});
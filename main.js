document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Toggle the 'show' class to expand/collapse
});

// Adding event listeners to each nav item
const navItems = document.querySelectorAll('#navbar ul li a');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('show'); // Hide the menu when an item is clicked
    });
});

// Search function
function searchPlaces() {
    const input = document.getElementById('search-input').value.toLowerCase(); // Get the search input
    const places = document.querySelectorAll('.place'); // Select all places
    places.forEach(place => {
        const title = place.querySelector('h3').textContent.toLowerCase(); // Get place title
        if (title.includes(input)) {
            place.style.display = ''; // Show if it matches
        } else {
            place.style.display = 'none'; // Hide if it doesn't match
        }
    });
}

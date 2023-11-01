document.addEventListener("DOMContentLoaded", function () {
    fetch('https://raw.githubusercontent.com/sm1else-bot/sm1else-bot/main/toplist.json')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('top-list');

            data.forEach(item => {
                const row = table.insertRow(-1);
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);

                cell1.textContent = item['#'];
                cell2.textContent = item['Artist'];
                cell3.textContent = item['Monthly Listeners'];
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;

    if (scrollHeight - scrollTop <= clientHeight) {
        footer.style.transform = 'translateY(0)'; // Show the footer
    } else {
        footer.style.transform = 'translateY(100%)'; // Hide the footer
    }
});

// Show the "Back to Top" button when scrolling down
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 100) { // You can adjust this value to control when the button appears
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

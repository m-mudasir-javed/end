document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected content section
        const targetSection = document.getElementById(this.dataset.target);
        targetSection.style.display = 'block';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('1st').classList.add('active');
});
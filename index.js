function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
        let dropdown = item.querySelector('.dropdown-content');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none'; // Close dropdown if already open
        } else {
            dropdown.style.display = 'block'; // Open dropdown
        }
    });
});

const scrollLinks = document.querySelectorAll(' .navbar-link');
scrollLinks.forEach(link => {
    link.addEventListener('click',
         function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = 
                  document.getElementById(targetId
                            .substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id 
                            '${targetId.substring(1)}' 
                             not found.`);
            }
        } else {
            console.error('No href attribute found.');
        }
    });
});

let currentIndex = 0;

const slides = document.querySelectorAll('.testimonial-item');
const totalSlides = slides.length;

function showSlide(index) {
    // Reset all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the active slide
    slides[index].classList.add('active');
}

function moveSlide(step) {
    currentIndex += step;

    // Loop the slides (if at the beginning or end, it wraps around)
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

// Initially display the first slide
showSlide(currentIndex);

// Optional: auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
// Example JavaScript for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example: Validate the form inputs
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        // You can send this data to your server here using AJAX or other methods
        // For now, just clearing the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

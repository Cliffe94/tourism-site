// script.js for Finn Safaris website

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            alert("Thank you for contacting Finn Safaris, " + name + "! We will get back to you soon.");
            contactForm.reset();
        } else {
            alert("Please fill in all the fields.");
        }
    });
}

// WhatsApp Integration
const whatsappBtn = document.querySelector('#whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        const phoneNumber = '254795707471';
        const message = encodeURIComponent("Hello Finn Safaris, I’d like to inquire about a tour.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
}

// Testimonials Slider (Simple Version)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.querySelector('#next-testimonial');
const prevBtn = document.querySelector('#prev-testimonial');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? 'block' : 'none';
    });
}

if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
}

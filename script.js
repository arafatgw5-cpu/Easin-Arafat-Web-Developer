document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm', 'py-3');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('shadow-sm', 'py-3');
            navbar.classList.add('py-4');
        }
    });

    // --- Back to Top Button ---
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.remove('opacity-0', 'translate-y-10');
            backToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTop.classList.add('opacity-0', 'translate-y-10');
            backToTop.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Form Validation ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    });

    // --- Fade-in on Scroll Animation (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
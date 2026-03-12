// /js/script.js

// Navigation mobile toggle (simple)
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '20px';
            navLinks.style.background = 'rgba(5,5,5,0.95)';
            navLinks.style.backdropFilter = 'blur(20px)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderRadius = '30px';
            navLinks.style.border = '1px solid rgba(255,215,0,0.2)';
        });
    }

    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));

    // Ajouter un effet de suivi de souris sur les cartes ? (optionnel)
    // On peut aussi rendre les cartes 3D plus vivantes
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotX = (y - centerY) / 20;
            const rotY = (centerX - x) / 20;
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
// ===== LANGUAGE PREFERENCE =====
// Each language is a separate static page (/ = TR, /en/ = EN) so search engines
// and AI crawlers can index both. The toggle links just remember the choice.
document.querySelectorAll('.lang-btn').forEach(link => {
    link.addEventListener('click', () => {
        try { localStorage.setItem('factech-lang', link.dataset.lang); } catch (e) {}
    });
});

// ===== HEADER SCROLL =====
const mainHeader = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navRight = document.getElementById('navRight');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMenu() {
    const open = !navRight.classList.contains('open');
    hamburger.classList.toggle('open', open);
    navRight.classList.toggle('open', open);
    mobileOverlay.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navRight.classList.contains('open')) toggleMenu();
});

navRight.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        if (navRight.classList.contains('open')) toggleMenu();
    });
});

// ===== SCROLL ANIMATIONS =====
// Smooth scrolling + header offset are handled in CSS (scroll-behavior, scroll-margin-top).
const revealTargets = document.querySelectorAll('.service-card, .about-content, .contact-left, .contact-cards');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });
    revealTargets.forEach(el => observer.observe(el));
} else {
    revealTargets.forEach(el => el.classList.add('visible'));
}

(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ===== Language preference (pages are separate: / = TR, /en/ = EN) =====
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', () => {
            try { localStorage.setItem('factech-lang', link.dataset.lang); } catch (e) {}
        });
    });

    // ===== Scroll reveal =====
    const revealEls = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window && !reduceMotion) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    // ===== Hero rotating word =====
    const rot = document.getElementById('rotWord');
    if (rot && !reduceMotion) {
        let words = [];
        try { words = JSON.parse(rot.dataset.words || '[]'); } catch (e) {}
        let i = 0;
        if (words.length > 1) {
            setInterval(() => {
                i = (i + 1) % words.length;
                rot.textContent = words[i];
                const anim = rot.style.animation;
                rot.style.animation = 'none';
                void rot.offsetWidth; // restart the CSS animation
                rot.style.animation = anim;
            }, 2600);
        }
    }

    // ===== Hero scene tilt =====
    const scene = document.getElementById('heroScene');
    const inner = document.getElementById('heroSceneInner');
    if (scene && inner && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
        scene.addEventListener('mousemove', e => {
            const r = scene.getBoundingClientRect();
            const mx = (e.clientX - r.left) / r.width - 0.5;
            const my = (e.clientY - r.top) / r.height - 0.5;
            inner.style.transform = `rotateY(${mx * 6}deg) rotateX(${-my * 6}deg) translate3d(${mx * 10}px,${my * 10}px,0)`;
        });
        scene.addEventListener('mouseleave', () => { inner.style.transform = 'none'; });
    }
})();

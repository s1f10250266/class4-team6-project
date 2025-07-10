document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav__toggle');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'main-navigation');
    navToggle.innerHTML = `
        <span class="sr-only">メニューを開く</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;

    const siteHeaderWrapper = document.querySelector('.site-header__wrapper');
    const navWrapper = document.querySelector('.nav__wrapper');

    
    if (siteHeaderWrapper) {
        siteHeaderWrapper.appendChild(navToggle);
    }

    
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded)); 

        if (navWrapper) {
            navWrapper.classList.toggle('active'); 
        }
    });

    
    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 600px)').matches) {
            if (navWrapper) {
                navWrapper.classList.remove('active');
            }
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
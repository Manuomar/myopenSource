// Basic interactivity: mobile menu toggle, theme toggle, contact form handler, and service worker registration
(function(){
    // Mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.site-nav ul');
    if(menuToggle){
        menuToggle.addEventListener('click', ()=>{
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!expanded));
            if(nav){
                nav.style.display = expanded ? 'none' : 'flex';
            }
        });
    }

    // Theme toggle (persist in localStorage)
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const current = localStorage.getItem('site-theme');
    if(current === 'light') root.classList.add('light');
    if(themeToggle){
        themeToggle.addEventListener('click', ()=>{
            const isLight = root.classList.toggle('light');
            localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
            themeToggle.textContent = isLight ? '☀️' : '🌙';
        });
        // set initial icon
        themeToggle.textContent = root.classList.contains('light') ? '☀️' : '🌙';
    }

    // Contact form - basic client-side submission with Formspree integration
    const form = document.getElementById('contact-form');
    if(form){
        form.addEventListener('submit', async (e)=>{
            e.preventDefault();
            const status = form.querySelector('.form-status');
            status.textContent = 'Sending...';
            const data = new FormData(form);
            try{
                const res = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if(res.ok){
                    status.textContent = 'Thanks — your message was sent.';
                    form.reset();
                }else{
                    const json = await res.json();
                    status.textContent = json.error || 'Oops — there was a problem sending.';
                }
            }catch(err){
                status.textContent = 'Network error — please try again later.';
            }
        });
    }

    // Register a basic service worker for PWA (if available)
    if('serviceWorker' in navigator){
        window.addEventListener('load', ()=>{
            navigator.serviceWorker.register('sw.js').catch(()=>{/*ignore*/});
        });
    }
})();

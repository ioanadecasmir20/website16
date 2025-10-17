/* Mobile navigation */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  // Close menu when clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
  }));
}

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});

/* Tabs for Services */
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tabpanel');
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    panels.forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`panel-${tab.id.split('tab-')[1]}`).classList.add('active');
  });
});

/* Reveal on scroll */
const revealItems = document.querySelectorAll('.reveal-up');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.15});
revealItems.forEach(el=>io.observe(el));

/* Animated counters */
const counters = document.querySelectorAll('.stat-number');
const counterObs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.dataset.count;
      const dur = 1200; // ms
      const start = performance.now();
      function tick(t){
        const p = Math.min(1, (t-start)/dur);
        el.textContent = Math.floor(target * (0.2 + 0.8*p)).toLocaleString();
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    }
  });
},{threshold:0.6});
counters.forEach(c=>counterObs.observe(c));

/* Basic contact form validation (front-end only) */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.field').forEach(field=>{
      const input = field.querySelector('input, textarea');
      const msg = field.querySelector('.error');
      if (!input.value.trim()) {
        msg.textContent = 'This field is required.'; valid = false;
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        msg.textContent = 'Enter a valid email.'; valid = false;
      } else {
        msg.textContent = '';
      }
    });

    if (valid) {
      // For now, just open a mailto (replace with API/CRM later)
      const name = encodeURIComponent(form.name.value.trim());
      const email = encodeURIComponent(form.email.value.trim());
      const message = encodeURIComponent(form.message.value.trim());
      window.location.href = `mailto:info@seccuro-security.co.uk?subject=Website enquiry from ${name}&body=From: ${name}%0AEmail: ${email}%0A%0A${message}`;
    }
  });
}

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear();

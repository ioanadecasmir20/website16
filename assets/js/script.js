const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('.js-quote-form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=form.querySelector('.form-status');
    if(!form.checkValidity()){form.reportValidity();return;}
    if(status){status.textContent='Thank you. Your enquiry has been prepared. Connect this form to your chosen email/form service before going live.';status.style.color='#0876b9';}
    form.reset();
  });
});

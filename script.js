// small helper for toggling mobile menu
function toggleMenu(){
  const nav = document.getElementById('navLinks');
  if(!nav) return;
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

// contact form validation and fake send
document.addEventListener('DOMContentLoaded', ()=>{
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if(!form) return;
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      msg.textContent = 'Please fill all fields.'; msg.style.color='crimson'; return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(email)){
      msg.textContent = 'Enter a valid email.'; msg.style.color='crimson'; return;
    }
    msg.textContent = 'Message sent — thank you!'; msg.style.color='green';
    form.reset();
  });
});

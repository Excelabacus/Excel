const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#mainNav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#enquiryForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const note=document.querySelector('#formNote');
  const data=new FormData(e.currentTarget);
  note.textContent=`Thank you ${data.get('name')||''}! Your enquiry is ready. Connect this form to WhatsApp/email before publishing.`;
  e.currentTarget.reset();
});

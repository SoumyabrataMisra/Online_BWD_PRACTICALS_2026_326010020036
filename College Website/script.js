document.addEventListener('DOMContentLoaded',()=>{
    const year=document.getElementById('year');
    if(year) year.textContent=new Date().getFullYear();
    const path=location.pathname.split('/').pop()||'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
    const top=document.querySelector('.back-top');
    if(top){window.addEventListener('scroll',()=>top.style.display=scrollY>450?'block':'none');
        top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}))}
    const form=document.getElementById('contactForm');
    if(form){form.addEventListener('submit',e=>{e.preventDefault();
            if(!form.checkValidity()){form.classList.add('was-validated');
                return} const alert=document.getElementById('formAlert');
            alert.className='alert alert-success mt-3';
            alert.textContent='Thank you! Your enquiry has been recorded for this demonstration.';
            form.reset();
            form.classList.remove('was-validated')})}
    const yearSelect=document.getElementById('studyYear');
    if(yearSelect){for(let i=1;
        i<=4;
        i++){const o=document.createElement('option');
            o.value=i;
            o.textContent=`Year ${i}`;
            yearSelect.appendChild(o)}}
});

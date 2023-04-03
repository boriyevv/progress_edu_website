// change navbar on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
});


// show/hide faq answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open'); 

        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'fa-solid fa-chevron-down'){
            icon.className = 'fa-solid fa-chevron-up'
        }
        else{ 
                icon.className = 'fa-solid fa-chevron-down '

            }

    })
});


// ========= Burger Btn (show/hide the nav menu) ============

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

const closeNav = ()=> {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)
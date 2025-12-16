/*===== MENU SHOW (ABRIR E FECHAR MENU MOBILE) =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE AO CLICAR =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // Quando um link é clicado, remove a classe show para esconder o menu
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK (MENU MUDA DE COR AO ROLAR) =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50; // -50 ajusta por causa da altura do header fixo
        const sectionId = current.getAttribute('id')

        // Se o scroll estiver dentro da seção, adiciona 'active' no link correspondente
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true // Se quiser que a animação repita toda vez que subir e descer, descomente aqui
});

/*SCROLL HOME*/
sr.reveal('.home__data', {}); 
sr.reveal('.home__img', {delay: 200}); 
sr.reveal('.btns-social', { interval: 100 }); // Atualizado para sua nova classe de icones

/*SCROLL ABOUT*/
sr.reveal('.about__img', {}); 
sr.reveal('.about__subtitle', {delay: 200}); 
sr.reveal('.about__text', {delay: 200}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {}); 
sr.reveal('.skills__text', {}); 
sr.reveal('.skills__data', {interval: 100}); 
sr.reveal('.skills__img', {delay: 300});

/*SCROLL WORK & CERTIFICADOS*/
sr.reveal('.work__img', {interval: 100}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {interval: 100});
sr.reveal('.contact__info', {interval: 100}); // Adicionado para os textos de contato
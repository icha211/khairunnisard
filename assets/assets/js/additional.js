// Function to scroll to the correct section based on URL path
function scrollToSectionFromURL() {
    const path = window.location.pathname;

    if (path === '/quiz1' || path === '/quiz1/') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('/quiz1/profile')) {
        document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('/quiz1/hometown')) {
        document.getElementById('hometown').scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('/quiz1/food')) {
        document.getElementById('food').scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('/quiz1/tourist')) {
        document.getElementById('tourist').scrollIntoView({ behavior: 'smooth' });
    }
}

// Execute when the page is fully loaded
window.onload = function() {
    scrollToSectionFromURL();
};

// Handle link clicks to update URL and scroll to sections
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetSectionId);

        // Special case for "Home"
        if (targetSectionId === 'home') {
            window.history.pushState({}, '', `/quiz1`);  // Update URL to /quiz1 for Home
        } else {
            window.history.pushState({}, '', `/quiz1/${targetSectionId}`);  // Update URL for other sections
        }

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Execute when the page is fully loaded
window.onload = function() {
    scrollToSectionFromURL();
};

// Handle link clicks to update URL and scroll to sections
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetSectionId);
        
        if (targetSection) {
            window.history.pushState({}, '', `/quiz1/${targetSectionId}`);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER HOMETOWN ====================*/
let swiper = new Swiper(".hometown__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .hometown__container,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})




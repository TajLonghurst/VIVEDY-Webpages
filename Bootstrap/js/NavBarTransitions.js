
window.addEventListener('scroll', function() {
    let header = document.getElementById('NAVBAR');
    let headerTitle = document.getElementById('NAVBARTITLE');

    let LinkOne = document.getElementById('LinkOne');
    let LinkTwo = document.getElementById('LinkTwo');
    let LinkThree = document.getElementById('LinkThree');
    let LinkFour = document.getElementById('LinkFour');
    let LinkFive = document.getElementById('LinkFive');
    let NavBarbtn = document.getElementById('NavBarbtn');

    let windowPostion1 = window.scrollY >=1;
    let windowPostion2 = window.scrollY <=1;
    
    /* ------------------ Toggling on and off the navbar class ----------------- */
    header.classList.toggle('navbar-darkred', windowPostion1);
    header.classList.toggle('navbar', windowPostion2)
    header.classList.toggle('scrolled-navbar', windowPostion1);

    /* --------- Toggling on and off the navbar classes for headertittle -------- */
    headerTitle.classList.toggle('scrolled-navbar-brand-style', windowPostion1);
    headerTitle.classList.toggle('navbar-brand', windowPostion2);

    /* ------------ Toggling on and off the navbar classes for links ------------ */
    
/*
    LinkOne.classList.toggle('nav-link', windowPostion2);
    LinkOne.classList.toggle('Poppins-Bold', windowPostion2);
    if(window.scrollY >=1){
        LinkOne.innerHTML="";
    }
    else if(window.scrollY <=1){
        LinkOne.innerHTML="Home";
    }
    LinkTwo.classList.toggle('nav-link', windowPostion2);
    LinkTwo.classList.toggle('Poppins-Bold', windowPostion2);
    if(window.scrollY >=1){
        LinkTwo.innerHTML="";
    }
    else if(window.scrollY <=1){
        LinkTwo.innerHTML="Movies";
    }
    LinkThree.classList.toggle('nav-link', windowPostion2);
    LinkThree.classList.toggle('Poppins-Bold', windowPostion2);
    if(window.scrollY >=1){
        LinkThree.innerHTML="";
    }
    else if(window.scrollY <=1){
        LinkThree.innerHTML="About";
    }
    LinkFour.classList.toggle('nav-link', windowPostion2);
    LinkFour.classList.toggle('Poppins-Bold', windowPostion2);
    if(window.scrollY >=1){
        LinkFour.innerHTML="";
    }
    else if(window.scrollY <=1){
        LinkFour.innerHTML="Privacy";
    }
    LinkFive.classList.toggle('nav-link', windowPostion2);
    LinkFive.classList.toggle('Poppins-Bold', windowPostion2);
    if(window.scrollY >=1){
        LinkFive.innerHTML="";
    }
    else if(window.scrollY <=1){
        LinkFive.innerHTML="Sign Up";
    }
    NavBarbtn.classList.toggle('btn', windowPostion2);
    NavBarbtn.classList.toggle('btn-outline-primary', windowPostion2);
    NavBarbtn.classList.toggle('Poppins-Bold', windowPostion2);

    if(window.scrollY >=1){
        NavBarbtn.innerHTML="";
    }
    else if(window.scrollY <=1){
        NavBarbtn.innerHTML="Login";
    }
*/
})

    /* ----------------------------------- End ----------------------------------*/
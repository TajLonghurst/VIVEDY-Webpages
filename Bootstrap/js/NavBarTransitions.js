window.addEventListener('scroll', function() {
    let header = document.getElementById('NAVBAR');
    let headerTitle = document.getElementById('NAVBARTITLE');
    let headercontent = document.getElementById('NAVBARBTN');
    let windowPostion1 = window.scrollY >=1;
    let windowPostion2 = window.scrollY <=0;
    

    /*header.classList.toggle('scrolled-navbar', windowPostion1); */
    header.classList.toggle('navbar-darkred', windowPostion1);

    headerTitle.classList.toggle('scrolled-navbar-brand', windowPostion1);
    headerTitle.classList.toggle('scrolled-navbar-brand-style', windowPostion1);

    headercontent.classList.remove('btn', windowPostion1);
    headercontent.classList.add('btn', windowPostion2);
    
})
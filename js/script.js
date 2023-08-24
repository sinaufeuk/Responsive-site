let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });




    let header = document.querySelector(".header");
    let darkModeIcon = document.querySelector("#darkMode-icon");

    header.classList.toggle("sticky", window.scrollY > 100);

    if (window.scrollY > 100) {
        darkModeIcon.style.color = "#333";
    } else {
        darkModeIcon.style.color = "#fdfdfd";
    }
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



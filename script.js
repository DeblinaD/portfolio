$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    //toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})


const menuBar = document.getElementById('menuBar');
const menus = document.getElementById('menus');

menuBar.addEventListener('click', () =>{
    menus.classList.toggle('show');
})
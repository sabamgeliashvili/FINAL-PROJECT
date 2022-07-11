(function(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

//    burger-menu

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    menuOpen = false;
}
});
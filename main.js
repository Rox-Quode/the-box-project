$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

AOS.init({  
offset: 150, // offset (in px) from the original trigger point
delay: 100, // values from 0 to 3000, with step 50ms
duration: 1500, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false
});
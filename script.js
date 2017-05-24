//on page load
$(document).ready(function() {

    //menu expand click
    $('#nav-logo').click(function() {
        //toggle display for the menu links
        $('#nav-links').slideToggle();
    }); //end nav-logo click

    //smooth scroll
    $('#contact-link').click(function () {
        $('html,body').animate({
                scrollTop: $("#contact-info").offset().top
            },
            1000);
    });

}); // end on page load
// Toggle navbar transparency based on the position of the navbar
// This will make the navbar opaque once you scroll down the amount of the navbar's height
$(function () {
    $(document).scroll(function () {
        var $navbar = $(".navbar-fixed-top");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
    });
});

// Typed.js Setup
$(function(){
    $(".typed-text").typed({
        strings: ["Coder.", "Tech enthusiast", "Linux convert in training.",  "Confederation Collge graduate of Computer Programmer."],
        typeSpeed: 0,
        showCursor: true,
        cursorChar: "|",
        backDelay: 600,
        loop: true,
        loopCount: null
	});
});

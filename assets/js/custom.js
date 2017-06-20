$(document).ready(function () {
    // Toggle navbar transparency based on the position of the navbar
    // This will make the navbar opaque once you scroll down the amount of the navbar's height
    $(function () {
        $(document).scroll(function () {
            var $navbar = $(".navbar-fixed-top");
            $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
        });
    });
});

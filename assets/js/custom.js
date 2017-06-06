$(function () {
    $(document).scroll(function () {
        var $navbar = $(".navbar-fixed-top");
        $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
    });
});

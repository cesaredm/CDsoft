$(window).scroll(function() {
        if ($("#menu").offset().top > 10) {
            $("#menu").addClass("bg-dark");
            $("#menu").removeClass("bg-transparent");
            $("#menu").removeClass("navbar-light");
            $("#menu").addClass("navbar-dark");
            $("#menu").addClass("opacidad");
        } else {
            $("#menu").removeClass("bg-dark");
            $("#menu").addClass("bg-transparent");
            $("#menu").addClass("navbar-light");
            $("#menu").removeClass("navbar-dark");
            $("#menu").removeClass("opacidad");
        }
      });
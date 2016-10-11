//-----------------------------------------------
//   Collapsable Navigation bar
//-----------------------------------------------

function collapseNavbar() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(document).ready(function() {

//-----------------------------------------------
//   Carousel links
//-----------------------------------------------

  $('.item').on('click', function() {
    console.log('Going to: ' + $(this).find('a').attr('href'));

    window.location = $(this).find('a').attr('href');
  });

  $(window).bind("load resize slid.bs.carousel", function() {
      var imageHeight = $(".active .holder").height();
      $(".controllers").height(imageHeight);
  });

//-----------------------------------------------
//   Scroll animation
//-----------------------------------------------

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


//-----------------------------------------------
//   Modal
//-----------------------------------------------

    $('#projects').on('click', '.js-show-modal', function(event) {
        event.preventDefault();

        $(this).find('.js-modal').addClass('is-visible');
        $('.js-modal-overlay').addClass('is-visible');
    });

    $('.js-modal-overlay').on('click', function(event) {
        $('.js-modal').removeClass('is-visible');
        $('.js-modal-overlay').removeClass('is-visible');
    });
});

//-----------------------------------------------
//   DOCUMENT READY
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

  $('.js-show-modal').on('click', function(event) {
    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
    event.preventDefault();

  });

  $('.js-modal-overlay').on('click', function(event) {
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
});

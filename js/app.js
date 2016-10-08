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
  //   Scroll animation
  //-----------------------------------------------

  $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
  });

  $('body').on('input propertychange', '.floating-label-form-group', function(e) {
      $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
  }).on('focus', '.floating-label-form-group', function() {
      $(this).addClass('floating-label-form-group-with-focus');
  }).on('blur', '.floating-label-form-group', function() {
      $(this).removeClass('floating-label-form-group-with-focus');
  });

  //-----------------------------------------------
  //   Carosel gallery
  //-----------------------------------------------

  $('project-btn').on('click', function(event){
    $(this).toggleClass('carosel');
  });

  //-----------------------------------------------
  //   Modal
  //-----------------------------------------------

  $('.js-show-modal').on('click', function(event) {
    event.preventDefault();

    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });

  $('.js-modal-overlay').on('click', function(event) {
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
});

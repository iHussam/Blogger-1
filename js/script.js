const responsive = {
  0: {
    items: 1
  },

  320: {
    items: 1
  },

  560: {
    items: 2
  },

  960: {
    items: 3
  }
}

$(document).ready(function() {

  // HAMBURGER FUNCTIONALITY WITH JQUERY
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  $toggleCollapse.click(function() {
    $nav.toggleClass('collapse');
  });

  // OWL CAROUSEL CODE FOR BLOG CAROUSEL SECTION
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });

  // SCROLL UP BTN CODE
  $('.move-up span').click(function() {
    $('html, body').animate({
      scrollTop: 0
    })
  });

  // ANIMATION INITIALIZAION
  AOS.init();

});



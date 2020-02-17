$(document).ready(function() {
  const $html = $('html');
  const scrollClass = 'page--scrolled';

  $('#mobileMenuTrigger').on('click', function () {
    $html.toggleClass('page--mobile-menu-open page--main-menu');
  });

  $('#mobileSelectApartment').on('click', function() {
    $html.toggleClass('page--mobile-menu-open page--apartment-menu');
  })

  $(document).scroll(function() {

    if ($(this).scrollTop() > 0) {
      $html.addClass(scrollClass);
    } else {
      $html.removeClass(scrollClass);
    }
  });
});

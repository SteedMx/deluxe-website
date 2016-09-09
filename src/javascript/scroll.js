$('.navigation__mobileLink').each(function (index, element) {
  var mobile = document.querySelector('.navigation__mobile')

  $(element).on('click', function (event) {
    mobile.dataset.active = 'false'
  })
})

$('.navigation__hamburger').on('click', function (event) {
  event.preventDefault()
  var mobile = document.querySelector('.navigation__mobile')

  if (mobile.dataset.active === 'true') {
    mobile.dataset.active = 'false'
  } else {
    mobile.dataset.active = 'true'
  }
})

$(document).on('click', 'a', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});



$(function () {

  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
  $('.body').toggleClass('body--active');
    });
  
  $('.menu__link').on('click', function () {
  $('.menu__list').removeClass('menu__list--active');
  $('.menu__btn').removeClass('menu__btn--active');
  $('.body').removeClass('body--active');
    });

  const header__top = document.querySelector('.header__top');
    window.onload = window.onscroll = () => {
      if (window.pageYOffset > 50) {
        header__top.classList.add('header__top-active');
      }
      else {
        header__top.classList.remove('header__top-active');
      }
  }

  $(".menu__list a, .logo, .header__link").on("click", function (event) {
 
    event.preventDefault();
 
    var id  = $(this).attr('href'),
 
    top = $(id).offset().top;
 
    $('body,html').animate({
      scrollTop: top - 67
    }, 1500);
  });

  var mixer = mixitup('.portfolio__works');
});
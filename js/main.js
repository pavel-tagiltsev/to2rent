$(function() {
  $('.promo__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next-arrow.svg" alt=""></button>',
    responsive: [{
      breakpoint: 700,
      settings: {
        arrows: false
      }
    }, ]
  });
  $('.header__btn-menu').on('click', function(){
    $('.header__list').slideToggle();
  });
});

$(function () {


  $('.slider__blog-inner').slick({
    dots: true,

    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  });

  Fancybox.bind("[data-fancybox]", {
  });

  var mixer = mixitup('.portfolio__content');
});


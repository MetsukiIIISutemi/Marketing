$(function () {

  //scroll and active
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.menu').clientHeight <= scrollDistance) {
        document.querySelectorAll('.menu a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });
        document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active');

        //animation of progressbar
        $(".expertise__info-item").each(function () {
          let span = $(this).find('span');
          let p = $(this).find('p');
      
          span.animate(
            {
              width: span.attr("data-progress") + "%",
            },
            2000
          );
      
          p.animate(
            {
              width: span.attr("data-progress") + "%",
              opacity: 1
            },
            2000
          );
      
          p.text(span.attr("data-progress") + "%")
        });

      }
    });
  });


  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1200);
  });


  //slider
  $('.slider__blog-inner').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    infinite: true,
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


  //animation
  AOS.init({
    disable: function () {
      let maxWidth = 1200;
      return window.innerWidth < maxWidth;
    },
    startEvent: 'DOMContentLoaded',
    offset: 100,
    delay: 100,
    duration: 1100,
    once: true
  });

  //plugins initialization
  Fancybox.bind("[data-fancybox]", {
  });

  var mixer = mixitup('.portfolio__content');
});


$(function () {

  // Menu btn
  $('.menu__btn').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  // Scroll
  // --- anchors --- 
  $(".menu a").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 1200);
  });

  // --- active ---
  let animationTriggered = false;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    let menuHeight = document.querySelector('.menu').clientHeight;

    document.querySelectorAll('.nav').forEach((section, i) => {
      if (section.offsetTop - menuHeight <= scrollDistance) {
        document.querySelectorAll('.menu a').forEach((el) => el.classList.remove('active'));
        document.querySelectorAll('.menu li')[i].querySelector('a').classList.add('active');
      }
    });

    // --- progressbar animation ---
    let expertiseBlock = document.querySelector('.expertise');

    if (expertiseBlock && !animationTriggered && expertiseBlock.offsetTop <= scrollDistance + window.innerHeight) {
      animationTriggered = true;

      $(".expertise__info-item").each(function () {
        let span = $(this).find('span');
        let p = $(this).find('p');

        span.animate(
          {
            width: span.attr("data-progress") + "%",
          },
          3000
        );

        p.animate(
          {
            width: span.attr("data-progress") + "%",
            opacity: 1
          },
          3000
        );

        p.text(span.attr("data-progress") + "%");
      });
    }
  });

  // Go top btn
  $('.go-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });

  //Slider
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


  //Animation
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


  //Plugins initialization
  Fancybox.bind("[data-fancybox]", {
  });


  var mixer = mixitup('.portfolio__content', {
    animation: {
      effectsIn: 'fade translateY(-100%)',
      effectsOut: 'fade translatey(-100%)',
      duration: 300,          
    }
  });
});


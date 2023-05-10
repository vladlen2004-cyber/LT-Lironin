"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ^^^
 * Глобальные-вспомогательные функции
 * ========================================================================== */

/**
  * Возвращает HTML-код иконки из SVG-спрайта
  *
  * @param {String} name Название иконки из спрайта
  * @param {Object} opts Объект настроек для SVG-иконки
  *
  * @example SVG-иконка
  * getSVGSpriteIcon('some-icon', {
  *   tag: 'div',
  *   type: 'icons', // colored для подключения иконки из цветного спрайта
  *   class: '', // дополнительные классы для иконки
  *   mode: 'inline', // external для подключаемых спрайтов
  *   url: '', // путь до файла спрайта, необходим только для подключаемых спрайтов
  * });
  */
function getSVGSpriteIcon(name, opts) {
  opts = _extends({
    tag: 'div',
    type: 'icons',
    class: '',
    mode: 'inline',
    url: ''
  }, opts);
  var external = '';
  var typeClass = '';

  if (opts.mode === 'external') {
    external = "".concat(opts.url, "/sprite.").concat(opts.type, ".svg");
  }

  if (opts.type !== 'icons') {
    typeClass = " svg-icon--".concat(opts.type);
  }

  opts.class = opts.class ? " ".concat(opts.class) : '';
  return "\n    <".concat(opts.tag, " class=\"svg-icon svg-icon--").concat(name).concat(typeClass).concat(opts.class, "\" aria-hidden=\"true\" focusable=\"false\">\n      <svg class=\"svg-icon__link\">\n        <use xlink:href=\"").concat(external, "#").concat(name, "\"></use>\n      </svg>\n    </").concat(opts.tag, ">\n  ");
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  var wow = new WOW({
    animateClass: 'animate__animated',
    offset: 100,
    mobile: false
  });
  wow.init();
  $(window).on('scroll', function (event) {
    if ($(window).scrollTop() > 0) {
      $('.app-header').addClass("is-fixed");
    } else {
      $('.app-header').removeClass("is-fixed");
    }
  }).trigger('scroll');
  $('.app-header__open').on('click', function (event) {
    event.preventDefault();
    $('.b-fixed').toggleClass('is-opened');
    $(this).toggleClass('is-opened');
  });
  $('.b-fixed__shadow, .b-fixed__close').on('click', function (event) {
    event.preventDefault();
    $('.b-fixed, .app-header__open').removeClass('is-opened');
  });
  $('.js-scroll').on('click', function (event) {
    event.preventDefault();
    $('.js-scroll, .b-fixed, .app-header__open').removeClass('is-opened');
    $(this).addClass('is-opened');
    $('html, body').animate({
      'scrollTop': $($(this).attr('href')).offset().top - 130
    }, 700);
  });

  if ($('.b-certificates__items').length) {
    $('.b-certificates__items').owlCarousel({
      items: 1,
      loop: 1,
      nav: 1,
      margin: 10,
      dots: 1,
      smartSpeed: 2000,
      autoplayTimeout: 7000,
      autoplay: 1,
      navText: ['<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#C8A76C"/></svg>', '<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#C8A76C"/></svg>'],
      responsive: {
        481: {
          margin: 20,
          items: 2
        },
        1025: {
          items: 3,
          margin: 30
        }
      }
    });
  }

  if ($('.b-recommendation__items').length) {
    $('.b-recommendation__items').owlCarousel({
      items: 1,
      loop: 1,
      dots: 1,
      nav: 1,
      margin: 20,
      smartSpeed: 2000,
      autoplayTimeout: 7000,
      autoplay: 1,
      navText: ['<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#C8A76C"/></svg>', '<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#000"/></svg>'],
      autoWidth: 1,
      responsive: {
        769: {
          margin: 20,
          items: 4
        },
        681: {
          margin: 20,
          items: 3
        },
        481: {
          center: true,
          margin: 20,
          items: 1
        },
        320: {
          center: true,
          margin: 20,
          items: 1
        },
        1025: {
          items: 5,
          margin: 32
        }
      }
    });
  }

  if ($('.b-slider__items').length) {
    $('.b-slider__items').owlCarousel({
      items: 1,
      loop: 1,
      nav: 1,
      margin: 10,
      dots: 0,
      smartSpeed: 2000,
      autoplayTimeout: 7000,
      navText: ['<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#C8A76C"/></svg>', '<svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6901 11.6037L1.51441 21.7512C1.18102 22.0835 0.641247 22.0829 0.308412 21.7495C-0.0241646 21.4161 -0.0233052 20.876 0.310131 20.5435L9.88009 11L0.309787 1.45647C-0.0236061 1.12389 -0.0244655 0.584164 0.308068 0.250727C0.474915 0.08358 0.693497 3.8147e-06 0.912078 3.8147e-06C1.1301 3.8147e-06 1.34782 0.0830212 1.51437 0.249008L11.6901 10.3963C11.8506 10.556 11.9407 10.7734 11.9407 11C11.9407 11.2265 11.8504 11.4437 11.6901 11.6037Z" fill="#C8A76C"/></svg>'],
      responsive: {
        481: {
          margin: 20,
          items: 3
        },
        769: {
          margin: 20,
          items: 3
        },
        1025: {
          items: 4,
          margin: 30
        }
      }
    });
  }

  if ($('#map_contact').length || $('#contactMap').length) {
    var init = function init() {
      // if ($('#map_contact').length) {
      //     myMap = new ymaps.Map("map_contact", {
      //         center: [55.725285, 37.760132],
      //         zoom: 13,
      //         controls:[]
      //     });
      //     myPlacemark = new ymaps.Placemark([55.725285, 37.760132], {
      //         hintContent: 'ТЕРМОТЕХНИКА',
      //         balloonContent: ''
      //     },
      //     {
      //         iconLayout: 'default#image',
      //         iconImageHref: 'img/balun.svg',
      //         iconImageSize: [42, 49],
      //         iconImageOffset: [-21, -25]
      //     });
      //     myMap.geoObjects.add(myPlacemark);
      // }
      if ($('#contactMap').length) {
        myMap2 = new ymaps.Map("contactMap", {
          center: [66.944542, 39.689661],
          zoom: 15,
          controls: []
        });
        myPlacemark2 = new ymaps.Placemark([66.944542, 39.689661], {
          hintContent: 'LIRONIN',
          balloonContent: ''
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/balun.svg',
          iconImageSize: [60, 55],
          iconImageOffset: [-1, -25]
        });
        myMap2.geoObjects.add(myPlacemark2);
      }
    };

    // ymaps.ready(init);
    var myMap, myPlacemark, myMap2, myPlacemark2;
    ymaps.ready(init);
  } //<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8504209364d7e6d370faf282cb4481b4eae71b91b324d28fc3b56091cc2a628f&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>


  var PAGE = $('html, body');
  var pageScroller = $('.page-scroller');
  var inMemoryClass = 'page-scroller--memorized';
  var isVisibleClass = 'page-scroller--visible';
  var enabledOffset = 60;
  var pageYOffset = 0;
  var inMemory = false;

  function resetPageScroller() {
    setTimeout(function () {
      if (window.pageYOffset > enabledOffset) {
        pageScroller.addClass(isVisibleClass);
      } else if (!pageScroller.hasClass(inMemoryClass)) {
        pageScroller.removeClass(isVisibleClass);
      }
    }, 150);

    if (!inMemory) {
      pageYOffset = 0;
      pageScroller.removeClass(inMemoryClass);
    }

    inMemory = false;
  }

  if (pageScroller.length > 0) {
    window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
      passive: true
    } : false);
    pageScroller.on('click', function (event) {
      event.preventDefault();
      window.removeEventListener('scroll', resetPageScroller);

      if (window.pageYOffset > 0 && pageYOffset === 0) {
        inMemory = true;
        pageYOffset = window.pageYOffset;
        pageScroller.addClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: 0
        }, 500, 'swing', function () {
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      } else {
        pageScroller.removeClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: pageYOffset
        }, 500, 'swing', function () {
          pageYOffset = 0;
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      }
    });
  }

  $(document).ready(function () {
    $("#contact").submit(function () {
      return false;
    });
    $("#send").on("click", function () {
      var emailval = $("#email").val();
      var namevl = $("#name").val();
      var phonevl = $("#phone").val();
      var msgval = $("#msg").val();
      var msglen = msgval.length;
      var mailvalid = validateEmail(emailval);

      if (mailvalid == false) {
        $("#email").addClass("error");
      } else if (mailvalid == true) {
        $("#email").removeClass("error");
      }

      if (mailvalid == false) {
        $("#name").addClass("error");
      } else if (mailvalid == true) {
        $("#name").removeClass("error");
      }

      if (mailvalid == false) {
        $("#phone").addClass("error");
      } else if (mailvalid == true) {
        $("#phone").removeClass("error");
      }

      if (msglen < 4) {
        $("#msg").addClass("error");
      } else if (msglen >= 4) {
        $("#msg").removeClass("error");
      }

      if (mailvalid == true && msglen >= 4) {
        // если обе проверки пройдены
        // сначала мы скрываем кнопку отправки
        $("#send").replaceWith("<em>отправка...</em>");
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#contact").serialize(),
          success: function success(data) {
            if (data == "true") {
              $("#contact").fadeOut("fast", function () {
                $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                setTimeout("$.fancybox.close()", 1000);
              });
            }
          }
        });
      }
    });
  });
});
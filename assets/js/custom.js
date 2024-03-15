/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
$(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 40) {
    $('html, body').stop().animate({
      'scrollTop': scrollTop + 1
    }, 100, 'swing', function () {});
  }
  if ($('.startAnim').length > 0) {
    $('html, body').stop().animate({
      'scrollTop': scrollTop + 1
    }, 100, 'swing', function () {});
  }
  if ($('.maindec__item').length > 0) {
    $(document).mousemove(function (event) {
      var xPos = event.clientX;
      var yPos = event.clientY;
      $('.maindec__item.md_1').css({
        transform: 'translate(calc(-50% + ' + (xPos - $(window).width() / 2) / 10 + 'px), calc(-50% + ' + (yPos - $(window).height() / 2) / 20 + 'px))'
      });
      $('.maindec__item.md_2').css({
        transform: 'translate(calc(-50% + ' + (xPos - $(window).width() / 2) / 30 + 'px), calc(-50% + ' + (yPos - $(window).height() / 2) / 30 + 'px))'
      });
      $('.maindec__item.md_3').css({
        transform: 'translate(calc(-50% + ' + (xPos - $(window).width() / 2) / 20 + 'px), calc(-50% + ' + (yPos - $(window).height() / 2) / 40 + 'px))'
      });
    });
  }
  var wWidth = $(window).width();
  if (wWidth > 0) {
    animation(wWidth);
  } else {
    setTimeout(function () {
      $('.fadeAnimGroup').removeClass('fadeAnimGroup');
      $('.fadeAnim').addClass('fadeDone');
      $('.fadeAnimItem').addClass('fadeDone');
      $('.fadeAnimCar').addClass('fadeDone');
    }, 4000);
  }
  $(window).scroll(function () {
    var sT = $(this).scrollTop();
    if (sT > 10) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
  if ($(".main__carousel").length > 0) {
    minCarousell();
    var sMH = $('.section__main').height();
    $('.mainDec').height(sMH);
    $(window).resize(function () {
      var sMH = $('.section__main').height();
      $('.mainDec').height(sMH);
    });
  }

  //Solution carousell
  if ($('.price__carousel').length > 0) {
    if ($(window).width() < 1024) {
      priceCarousell();
    } else {
      $('.price__carousel').addClass('disabledCar');
    }
    $(window).resize(function () {
      if ($(window).width() < 1024) {
        priceCarousell();
        $('.section__carousel').removeClass('disabledCar');
      } else {
        stopPriceCarousel();
        $('.section__carousel').addClass('disabledCar');
      }
    });
  }
  if ($(".rev__carousel").length > 0) {
    revCarousell();
    var rate = $('.rate__stars');
    rate.each(function () {
      var dataRate = parseInt($(this).data('rate')); // Отримання значення data-rate і перетворення його в ціле число

      $(this).find('.rate__star').each(function (index) {
        if (index < dataRate) {
          $(this).removeClass('no');
        }
      });
    });
  }
});

//Main carousell
function minCarousell() {
  var owl = $(".main__carousel").owlCarousel({
    smartSpeed: 300,
    mouseDrag: true,
    autoplay: true,
    center: false,
    items: 1,
    margin: 0,
    addClassActive: true,
    loop: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    touchDrag: true,
    dotsSpeed: 300,
    stagePadding: 0
  });
}

//Price carousell
function priceCarousell() {
  var owl = $(".price__carousel").owlCarousel({
    smartSpeed: 300,
    mouseDrag: true,
    autoplay: false,
    center: false,
    addClassActive: true,
    loop: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    touchDrag: true,
    dotsSpeed: 300,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        margin: 32
      },
      490: {
        items: 1,
        margin: 48
      },
      650: {
        items: 2,
        margin: 24
      },
      1000: {
        items: 3,
        margin: 30
      }
    }
  });
}
function stopPriceCarousel() {
  var owl = $('.price__carousel');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('disabledCar');
}

//Reviews carousell
function revCarousell() {
  var owl = $(".rev__carousel").owlCarousel({
    smartSpeed: 300,
    mouseDrag: true,
    autoplay: false,
    center: false,
    addClassActive: true,
    loop: true,
    dots: true,
    nav: false,
    dotsEach: 1,
    touchDrag: true,
    dotsSpeed: 300,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        margin: 32
      },
      600: {
        items: 2,
        margin: 20
      },
      1024: {
        items: 3,
        margin: 20
      }
    }
  });
}
function faqCtrl($this) {
  var thisItem = $this.closest('.faq__item'),
    thisAnswer = thisItem.find('.faq__answer'),
    sib = thisItem.siblings('li');
  $this.toggleClass('opened');
  thisAnswer.slideToggle(300);
  sib.find('.faq__quest').removeClass('opened');
  sib.find('.faq__answer').slideUp(300);
}

//Popups
function openPopup($this) {
  event.preventDefault();
  var thisAttr = $this.attr('href'),
    thisPopup = $(thisAttr);
  if ($('body').hasClass('overHidden')) {
    $('.popup').fadeOut(0);
    thisPopup.fadeIn(0);
  } else {
    $('.popup').fadeOut(400);
    thisPopup.fadeIn(400);
  }
  $('body').addClass('overHidden');
}
function closePopup() {
  event.preventDefault();
  $('.popup').fadeOut(400);
  $('body').removeClass('overHidden');
}
function showPass($this) {
  event.preventDefault();
  var label = $this.closest('label'),
    input = label.find('input');
  if (!$this.hasClass('showed')) {
    $this.addClass('showed');
    input.attr('type', 'text');
  } else {
    $this.removeClass('showed');
    input.attr('type', 'password');
  }
}
function ankor($this) {
  event.preventDefault();
  var thisAnk = $this.attr('href');
  $('body').removeClass('openedNav');
  $('html, body').stop().animate({
    'scrollTop': $(thisAnk).offset().top
  }, 1000, 'swing', function () {});
}
function openNav($this) {
  event.preventDefault();
  $this.toggleClass('openedHam');
  $('body').toggleClass('openedNav');
}
function toggleMode() {
  event.preventDefault();
  var body = $('body');
  if (body.hasClass('dark')) {
    body.removeClass('dark');
    setCookie('theme', 'light', 365);
  } else {
    body.addClass('dark');
    setCookie('theme', 'dark', 365);
  }
}
function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
function showFull($this) {
  event.preventDefault();
  var rev = $this.closest('.reviews__item'),
    t1 = $this.data().st1,
    t2 = $this.data().st2;
  if (!rev.hasClass('showAll')) {
    rev.addClass('showAll');
    $this.text(t2);
  } else {
    rev.removeClass('showAll');
    $this.text(t1);
  }
}

////////Animations
function animation(w) {
  var wHeight = $(window).height();
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.fadeAnim').each(function () {
      var wBorder = wScroll + wHeight - 50,
        $this = $(this),
        thisTop = $this.offset().top;
      if ($this.hasClass('count')) {
        var thisCount = $thisItem.find('.countNum'),
          startV = thisCount.data().value,
          startC = thisCount.data().counter,
          startR = thisCount.data().roz;
        counting(thisCount, startV, startC, startR);
      }
      if (thisTop < wBorder) {
        $this.addClass('fadeDone');
        setTimeout(function () {
          $this.removeClass('fadeAnimGroup ');
        }, 1000);
      }
    });
    $('.fadeAnimGroup').each(function () {
      var wBorder = wScroll + wHeight - 50,
        startBorder = wScroll + wHeight + 100,
        $this = $(this),
        thisTop = $this.offset().top;
      if (thisTop < startBorder) {
        var thisDelay = $this.data().delay,
          thisItem = $this.data().item;
        console.log($this);
        if (thisTop < wBorder) {
          setTimeout(function () {
            $this.find('.fadeAnimItem').each(function (i) {
              var $thisItem = $(this),
                timing = thisItem * i;
              setTimeout(function () {
                $thisItem.addClass('fadeDone');
                if ($thisItem.hasClass('count')) {
                  var thisCount = $thisItem.find('.countNum'),
                    startV = thisCount.data().value,
                    startC = thisCount.data().counter,
                    startR = thisCount.data().roz;
                  counting(thisCount, startV, startC, startR);
                }
                $thisItem.removeClass('count');
              }, timing);
            });
            $this.find('.owl-item.active .fadeAnimCar').each(function (i) {
              var $thisItem = $(this),
                timing = thisItem * i;
              setTimeout(function () {
                $thisItem.addClass('fadeDone');
              }, timing);
            });
            $this.find('.owl-item:not(.active) .fadeAnimCar').addClass('fadeDone');
          }, thisDelay);
          $this.removeClass('fadeAnimGroup');
        }
      }
    });
  });
}
function counting(thisCount, startV, startC, startR) {
  thisCount.prop('Counter', startC).animate({
    Counter: startV
  }, {
    duration: 1000,
    easing: 'swing',
    step: function step(now) {
      var roundedNum = this.Counter.toFixed(0),
        theNum = Math.round(roundedNum / startR) * startR;
      if (theNum + (startR - 1 / 2) > startV) {
        theNum = startV;
      }
      thisCount.text(theNum);
    }
  });
}
/******/ })()
;
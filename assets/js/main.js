
// scroll sticky//
window.onscroll = function () {
  scrollSticky();
};

var header = document.getElementById("bottom-nav");

var sticky = header.offsetTop;

function scrollSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky-nav");
    $(".navbar-brand.sticky").css("display", "block");
    $(".social-icon.sticky").css("display", "block");
    if($(window).width() < 767) {
      $(".social-icon.sticky.mobile-hide").css("display", "none");
    }
    $("#bottom-nav").css("background", "#fff");
    $("#bottom-nav").css("box-shadow", "0 4px 2px -4px gray");
    $("#top-nav").css("position", "relative");
  } else {
    header.classList.remove("sticky-nav");
    $(".navbar-brand.sticky").css("display", "none");
    $(".social-icon.sticky").css("display", "none");
    $("#bottom-nav").css("background", "none");
    $("#bottom-nav").css("box-shadow", "none");
  }
}







$('#myCarousel').carousel({
  interval: 10000
})


$('.carousel .carousel-my-item').each(function() {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
      next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
  }
});

$('.carousel-product-item').each(function() {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
      next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 1; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
  }
});
$('#myCarousel-products').find('.carousel-control-prev').hide();

$('#myCarousel-products').on('slid.bs.carousel', function () {
  var carousel = $(this);
  
  var currentIndex = carousel.find('.carousel-item.active').index();
  var totalItems = carousel.find('.carousel-item').length - 1; // Index starts from 0
  var progress = ((currentIndex + 1) / (totalItems + 1)) * 100;
  $('#carousel-progress-line').css('width', progress + '%');

  if (currentIndex === 0) {
    carousel.find('.carousel-control-prev').hide();
  } else {
    carousel.find('.carousel-control-prev').show();
  }

  if (currentIndex === totalItems) {
    carousel.find('.carousel-control-next').hide();
  } else {
    carousel.find('.carousel-control-next').show();
  }
});

$('#myCarousel-products').on('slide.bs.carousel', function () {
  $(this).find('.carousel-control-prev, .carousel-control-next').show();
});

$('#myCarousel-products').carousel({
  wrap: false
});

// price adjustement
const prices = document.querySelectorAll('.price');

prices.forEach(price => {
    let priceText = price.textContent;
    const decimalIndex = priceText.indexOf('.');
    if (decimalIndex !== -1) {
        const decimalPart = priceText.slice(decimalIndex);
        price.textContent = priceText.slice(0, decimalIndex);
        const decimalSpan = document.createElement('span');
        decimalSpan.classList.add('decimal');
        decimalSpan.textContent = decimalPart;
        price.appendChild(decimalSpan);
        const parentFontSize = parseFloat(window.getComputedStyle(price).fontSize);
        decimalSpan.style.fontSize = `${parentFontSize * 0.75}px`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
  $('#myCarousel').on('slide.bs.carousel', function (e) {
    document.querySelectorAll('.indicator').forEach(function (indicator) {
      indicator.classList.remove('active');
    });

    var activeIndicator = document.querySelectorAll('.indicator')[e.to];
    activeIndicator.classList.add('active');
  });
});


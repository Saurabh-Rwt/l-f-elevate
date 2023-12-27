$(document).ready(function () {
  $('#marketing-product-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('#speaker-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 300,
    dots: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/icons/previous.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/icons/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#event-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/icons/previous.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/icons/next.svg" alt=""></button>'
  });

  $('#event--mobile-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 300,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/icons/previous.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/icons/next.svg" alt=""></button>'
  });
});


/*--------humburger Icon---------*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const bodyTag = document.body;

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
  bodyTag.classList.toggle("hideScroll");
}


/*-------- Speaker Detail toggle---------*/
const toggleButtons = document.querySelectorAll('.toggle-speaker');

toggleButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('data-bs');
    const speakerDetail = document.getElementById(targetId);

    const allSpeakerDetails = document.querySelectorAll('.speaker-detail');
    allSpeakerDetails.forEach(detail => {
      if (detail.id !== targetId) {
        detail.classList.remove('show');
      }
    });

    if (speakerDetail) {
      speakerDetail.classList.toggle('show');
    }
  });
});

/*-------- Counter ---------*/

function updateCounter() {
  var days = parseInt(document.querySelector('.count-box:nth-child(1) .count').innerText);
  var hours = parseInt(document.querySelector('.count-box:nth-child(2) .count').innerText);
  var minutes = parseInt(document.querySelector('.count-box:nth-child(3) .count').innerText);
  var seconds = parseInt(document.querySelector('.count-box:nth-child(4) .count').innerText);

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      } else {
        hours = 23;
        if (days > 0) {
          days--;
        } else {
          clearInterval(timer);
          return;
        }
      }
    }
  }

  document.querySelector('.count-box:nth-child(1) .count').innerText = days;
  document.querySelector('.count-box:nth-child(2) .count').innerText = hours.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  document.querySelector('.count-box:nth-child(3) .count').innerText = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  document.querySelector('.count-box:nth-child(4) .count').innerText = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}

var timer = setInterval(updateCounter, 1000);
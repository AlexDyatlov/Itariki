$(function(){

  let mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    loop: true,
    slidesPerView: '1',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
      615: {
        slidesPerView: '1.4',
        spaceBetween: 40,
      },
      800: {
        slidesPerView: '2',
        spaceBetween: 60,
      },
      1150: {
        slidesPerView: 'auto',
        spaceBetween: 100,
      }
    }
  })
  
  var element = document.getElementById('phone');

  var maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
  };
  
  var mask = IMask(element, maskOptions);

  var burgerbtn = document.querySelector('.menu__btn');

  burgerbtn.addEventListener('click', function(){
    burgerbtn.classList.toggle('open');
    $('.menu__list').slideToggle();
  })

});

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 600,
  speedAsDuration: true,
});
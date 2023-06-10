$(document).ready(function(){

$("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});


$("#menu2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});


$('ul.tabs li').click(function(){
          var tab_id = $(this).attr('data-tab');

          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
  });


$('.responsive').slick({
        infinite: true,
        speed: 300,
        dots:false,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             dots:false,
             arrows:false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
             dots:false,
             arrows:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              arrows:false,
              slidesToScroll: 1
            }
          }
      ]
  });




});



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


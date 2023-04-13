import $ from 'jquery';

$(document).ready(function () {
  $('#site-nav').on('click', 'a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $('a').on('click', function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== '') {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       let hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate(
//         { scrollTop: $(hash).offset().top - 10 },
//         800,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });

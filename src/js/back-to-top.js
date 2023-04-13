import $ from 'jquery';

$(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

// function backToTop () {
//   let button = document.querySelector('.back-to-top');

//   // When the user scrolls down 200px from the top of the document, show the button
//   window.onscroll = function () {
//     scrollFunction();
//   };

//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 200 ||
//       document.documentElement.scrollTop > 200
//     ) {
//       button.style.display = 'block';
//     } else {
//       button.style.display = 'none';
//     }
//   }
// }

// backToTop();

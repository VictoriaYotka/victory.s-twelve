function backToTop () {
  let button = document.querySelector('.back-to-top');

  // When the user scrolls down 200px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
}

backToTop();

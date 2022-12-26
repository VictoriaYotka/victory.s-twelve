(() => {
  const e = {
    openProductBtn: document.querySelector('[data-iceCream-open]'),
    closeProductBtn: document.querySelector('[data-iceCream-close]'),
    menu: document.querySelector('[data-iceCream]'),
  };
  function n() {
    e.menu.classList.toggle('is-hidden');
  }
  e.openProductBtn.addEventListener('click', n),
    e.closeProductBtn.addEventListener('click', n);
})(),
  (() => {
    const e = {
      openProductBtn: document.querySelector('[data-iceCoffee-open]'),
      closeProductBtn: document.querySelector('[data-iceCoffee-close]'),
      menu: document.querySelector('[data-iceCoffee]'),
    };
    function n() {
      e.menu.classList.toggle('is-hidden');
    }
    e.openProductBtn.addEventListener('click', n),
      e.closeProductBtn.addEventListener('click', n);
  })(),
  (() => {
    const e = {
      openProductBtn: document.querySelector('[data-milkshakes-open]'),
      closeProductBtn: document.querySelector('[data-milkshakes-close]'),
      menu: document.querySelector('[data-milkshakes]'),
    };
    function n() {
      e.menu.classList.toggle('is-hidden');
    }
    e.openProductBtn.addEventListener('click', n),
      e.closeProductBtn.addEventListener('click', n);
  })();

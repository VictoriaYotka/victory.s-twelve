(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-readmore-open]'),
    closeModalBtn: document.querySelector('[data-modal-readmore-close]'),
    modal: document.querySelector('[data-modal-readmore]'),

    modalWindow: document.querySelector('[data-modal-readmore-window]'),

  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    refs.modalWindow.classList.toggle('modal-animation');
  }
})();


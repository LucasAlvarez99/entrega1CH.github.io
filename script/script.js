document.querySelectorAll('.toggle-desc').forEach(btn => {
  btn.addEventListener('click', function() {
    const desc = this.parentElement.nextElementSibling;
    if (desc.classList.contains('open')) {
      desc.classList.remove('open');
      this.textContent = 'Ver descripción';
    } else {
      desc.classList.add('open');
      this.textContent = 'Ocultar descripción';
    }
  });
});
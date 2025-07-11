

document.querySelectorAll('.toggle-desc').forEach(btn => {
    btn.addEventListener('click', function () {
      const desc = this.closest('.producto-info').querySelector('.producto-desc');
      desc.classList.toggle('open');
      this.textContent = desc.classList.contains('open') ? 'Ocultar descripción' : 'Ver descripción';
    });
  });

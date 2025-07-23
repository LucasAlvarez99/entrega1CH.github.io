
  document.addEventListener('DOMContentLoaded', ()  => {
    const botones = document.querySelectorAll('.btn-descripcion');

    botones.forEach((boton) => {
      boton.addEventListener('click', () => {
        const descripcion = boton.nextElementSibling.nextElementSibling;

        if (descripcion.style.display === 'none' || descripcion.style.display === '') {
          descripcion.style.display = 'block';
          descripcion.classList.add('fade-in');
          boton.textContent = 'OCULTAR';
        } else {
          descripcion.style.display = 'none';
          boton.textContent = 'VER DESCRIPCIÓN';
        }
      });
    });
  });


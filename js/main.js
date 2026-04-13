const botones = document.querySelectorAll('.btn-accion');

botones.forEach(boton => {
    const textoOriginal = boton.textContent;

    boton.addEventListener('click', () => {
        const idObjetivo = boton.dataset.target;
        const caja = document.getElementById(idObjetivo);

        // Cambiamos el toggle de 'active'
        caja.classList.toggle('active');

        // Lógica de cambio de texto
        if (caja.classList.contains('active')) {
            boton.textContent = 'Cerrar panel';
        } else {
            boton.textContent = textoOriginal;
        }
    });
});

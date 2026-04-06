const botones = document.querySelectorAll('.btn-accion');

botones.forEach(boton => {

    // Guardamos el texto original UNA vez
    const textoOriginal = boton.textContent;

    boton.addEventListener('click', () => {

        const idObjetivo = boton.dataset.target;
        const caja = document.getElementById(idObjetivo);

        if (caja.style.display === 'block') {
            caja.style.display = 'none';
            boton.textContent = textoOriginal; // vuelve al original
        } else {
            caja.style.display = 'block';
            boton.textContent = '❌ Ocultar información';
        }

    });
});
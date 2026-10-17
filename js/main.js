// Script para animar las secciones al hacer scroll (efecto dinámico)
document.addEventListener("DOMContentLoaded", function() {
    const secciones = document.querySelectorAll("section");

    const cargarSeccion = (entradas, observador) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    };

    const observador = new IntersectionObserver(cargarSeccion, {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Se activa cuando la sección es visible un 15%
    });

    secciones.forEach((seccion) => {
        observador.observe(seccion);
    });
});
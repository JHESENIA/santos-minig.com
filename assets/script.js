document.addEventListener("DOMContentLoaded", function () {
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });

}); 
// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-comentario");
  const lista = document.getElementById("lista-comentarios");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && mensaje) {
      // Crear nuevo comentario
      const nuevoComentario = document.createElement("div");
      nuevoComentario.classList.add("comentario");
      nuevoComentario.innerHTML = `
        <p class="texto">"${mensaje}"</p>
        <p class="autor">– ${nombre}</p>
      `;

      // Agregar al inicio de la lista
      lista.prepend(nuevoComentario);

      // Limpiar formulario
      form.reset();
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const numeroWhatsApp = "51973771526"; // tu número con código de país
  const texto = `Hola, soy ${nombre}. 
Mi correo es: ${email}
Mi celular: ${telefono}
Quiero consultar lo siguiente:
${mensaje}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});
// Scroll suave y amigable con inercia
(function () {
  let scrollSpeed = 60; // velocidad
  let smoothness = 10;  // suavidad
  let current = window.scrollY;
  let target = window.scrollY;

  window.addEventListener("wheel", function (e) {
    e.preventDefault(); // detenemos el scroll brusco
    target += e.deltaY; // sumamos desplazamiento
    target = Math.max(0, target); // no permitir valores negativos
  }, { passive: false });

  function smoothScroll() {
    current += (target - current) / smoothness;
    window.scrollTo(0, current);
    requestAnimationFrame(smoothScroll);
  }

  smoothScroll();
})();

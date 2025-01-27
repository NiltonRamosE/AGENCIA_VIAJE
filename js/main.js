document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__toggle");
  const navList = document.querySelector(".nav-bar__list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("nav-bar__list--visible");
  });

  const form = document.getElementById("reservation-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const origen = document.getElementById("input-origen").value.trim();
      const destino = document.getElementById("input-destino").value.trim();
      const fecha = document.getElementById("input-fecha").value;

      if (!origen || !destino || !fecha) {
          alert("Por favor, completa todos los campos.");
          return;
      }

      if (origen === destino) {
          alert("El origen y el destino no pueden ser iguales.");
          return;
      }

      alert(`Reserva confirmada:\nOrigen: ${origen}\nDestino: ${destino}\nFecha: ${fecha}`);

  });
});

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://randomuser.me/api",
    dataType: "json",
  }).done((data) => {
    let personas = data.results;
    $.each(personas, function (indice, persona) {
      nombre.textContent = persona.name.first;
      apellido.textContent = persona.name.last;
      foto.src = persona.picture.medium;
      nacimiento.textContent = persona.dob.date.substr(0, 10);
      edad.textContent = persona.dob.age;
      telefono.textContent = persona.phone;
      email.textContent = persona.email;
      calle.textContent = persona.location.street.name;
      numero.textContent = persona.location.street.number;
      ciudad.textContent = persona.location.city;
      estado.textContent = persona.location.state;
      pais.textContent = persona.location.country;
    });
  });
});

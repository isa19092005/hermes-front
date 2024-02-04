const btnReserva = document.getElementById('btnReserva')

const reservas = []

btnReserva.addEventListener('click', (e) => {
  e.preventDefault()// Evitar que el formulario se envie de forma automatica
  const formReserva = document.getElementById('formReserva')
  // campos del formulario
  const nombre = formReserva.nombre.value
  const apellidos = formReserva.apellidos.value
  const tipoDocumento = formReserva.tipoDocumento.value
  const documento = formReserva.documento.value
  const fechaNacimiento = formReserva.fechaNacimiento.value
  const sexo = formReserva.sexo.checked
  const contacto = formReserva.contacto.checked
  const email = formReserva.email.checked
  const Dirección = formReserva.Dirección.checked
  const ciudad = formReserva.ciudad.checked

  if (nombre !== '' && apellidos !== '' && tipoDocumento !== '' && documento !== '' && fechaNacimiento !== ''  && sexo !== '' && contacto !== '' && email !== '' && Dirección !== '' && ciudad !== '' ) {
    // add data in object
    const reserva = {
      nombre,
      apellidos,
      tipoDocumento,
      documento,
      fechaNacimiento,
      sexo,
      contacto,
      email,
      Dirección,
      ciudad
    }

    // Agregar la reserva al array de reservaciones
    if (reserva) reservas.push(reserva)
    console.log(reservas)
  }
})
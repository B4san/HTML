var mensaje = "batir las fresas"
var hay_fresas;

function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#headher').innerHTML = mensaje
  }

  function servir_vaso_de_agua() {
    window.alert(mensaje);
    document.querySelector('#headher').innerHTML = mensaje
  }

  function jugo_de_peras() {
    window.alert(mensaje);
    document.querySelector('#headher').innerHTML = mensaje
  }

  function jugo_de_mangos() {
    window.alert('Batir mangos');
    document.querySelector('#headher').innerHTML = mensaje
  }

  hay_mangos = true;
  hay_peras = false;
  hay_fresas = false;
  if (hay_fresas) {
    mensaje = 'Batir fresas'
    jugo_de_fresas();
  } else if (hay_peras) {
    mensaje = 'batir peras'
    jugo_de_peras();
  } else if (hay_mangos) {
    mensaje = 'batir mangos'
    jugo_de_mangos();
  } else {
    mensaje = 'servir vaso de agua'
    servir_vaso_de_agua();
  }
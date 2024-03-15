document.querySelector('#header').innerHTML = "estoy leyendo el documento tarea"
var dias 
var mensaje
var userInput = prompt("ingrese el numero del dia de la semana")


function dia_lunes() {
    mensaje = "lunes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_martes() {
    mensaje = "martes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_miercoles() {
    mensaje = "miercoles"
    document.querySelector('#header').innerHTML = mensaje;
  }
  function dia_jueves() {
    mensaje = "jueves"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_viernes() {
    mensaje = "viernes"
    document.querySelector('#header').innerHTML = mensaje;

  }
  function dia_sabado() {
    mensaje = "sabado"
    document.querySelector('#header').innerHTML = mensaje;
  }
  function dia_domingo() {
    mensaje = "domingo"
    document.querySelector('#header').innerHTML = mensaje;
  }
  function dia_invalido() {
    mensaje = "Dia invalido"
    document.querySelector('#header').innerHTML = mensaje;
  }
dias = userInput.toLowerCase()
switch (dias) {
    case "1":
        dia_lunes()
        break
        case "2":
        dia_martes()
        break
        case "3":
        dia_miercoles()
        break
        case "4":
        dia_jueves()
        break
        case "5":
        dia_viernes()
        break
        case "6":
        dia_sabado()
        break
        case "7":
        dia_domingo()
        break
        default:
            dia_invalido()

}
var mensaje;
mensaje = "estoy leyendo el documento whileswitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

var inicio = true

while(inicio == true){
var respuesta = prompt("1= Suma\n2= Resta\n3= multiplicacion\n4= division\n5= Salir")
switch(parseInt(respuesta)){

    case 1:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese numero 2")
        alert(parseInt(numero1)+parseInt(numero2))
        break
        case 2:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese numero 2")
        alert(parseInt(numero1)-parseInt(numero2))
        break
        case 3:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese numero 2")
        alert(parseInt(numero1)*parseInt(numero2))
        break
        case 4:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese numero 2")
        alert(parseInt(numero1)/parseInt(numero2))
        break
        case 5:
            var inicio = false
  }
}
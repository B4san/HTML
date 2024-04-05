document.querySelector('#header').innerHTML = "estoy leyendo el documento dowhile.js"

var i = 0

do{

    i++
    console.log(i)

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
                var i = 5
      }


}while(i<5)

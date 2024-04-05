var mensaje;
mensaje = "estoy leyendo el documento whileswitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje

function suma(){
    var numero1 = prompt("ingrese el primer numero:");
    var numero2 = prompt("ingrese el segundo numero:");
    var resultado = parseInt(numero1)+parseInt(numero2);
    alert (`La suma de ${numero1} y ${numero2} es: ${resultado}`)
}

function resta(){
    var numero1 = prompt("ingrese el primer numero:");
    var numero2 = prompt("ingrese el segundo numero:");
    var resultado = parseInt(numero1)-parseInt(numero2);
    alert (`La resta de ${numero1} y ${numero2} es: ${resultado}`)
}

function miltiplicacion(){
var numero1 = prompt("ingrese el primer numero:");
var numero2 = prompt("ingrese el segundo numero:");
var resultado = parseInt(numero1)*parseInt(numero2);
alert (`La multiplicacion de ${numero1} y ${numero2} es: ${resultado}`)
}

function division(){
var numero1 = prompt("ingrese el primer numero:");
var numero2 = prompt("ingrese el segundo numero:");
var resultado = parseInt(numero1)/parseInt(numero2);
alert (`La division de ${numero1} y ${numero2} es: ${resultado}`)
}

while(true){
    var respuesta = prompt("seleccione una operacion:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");
     if (respuesta === `1`){
        suma();
     } else if (respuesta === `2`){
        resta();
     } else if (respuesta === `3`){
        multiplicacion();
     } else if (respuesta === `4`){
        division();
     } else{ 
        print =("Opcion no valida. Intente nuevamente");
     }
}
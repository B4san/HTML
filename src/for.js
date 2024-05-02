document.querySelector('#header').innerHTML = "estoy leyendo el documento For.js"

var numero =parseInt(prompt("Ingresa el numero de la tabla que deseas ver"))

for(let index = 0; index < 11; index++){
    respuesta = numero * index
    console.log("La tabla de:" + numero, "x", index,"=", respuesta,)
}




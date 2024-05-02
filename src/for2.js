document.querySelector('#header').innerHTML = "estoy leyendo el documento For2.js"

for(let index1 = 0; index1 < 11; index1++){
    for(let index2 = 0; index2 < 11; index2++){
    var   respuesta = index1 * index2
        console.log("La tabla de:" + index1, "x", index2,"=", respuesta,)
    }
}
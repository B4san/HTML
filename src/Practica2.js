document.querySelector('#header').innerHTML = "estoy leyendo el documento Practica2.js"

let arreglo = []

var largo = parseInt(prompt("Digite el largo del arreglo"))

function construir(largo){
    arreglo.length = largo
}

construir(largo)

function llenararreglo(){
    for(let i = 0; i< arreglo.length; i++){
        let numeroAleatorio = Math.floor(Math.random()* 20) + 1
    arreglo[i] = numeroAleatorio
    }
}

do{
    var opcion = parseInt(prompt("1. Llenar arreglo"))
    switch(opcion){
        case 1:
            llenararreglo()
        break
    }
}while(true)
document.querySelector('#header').innerHTML = "estoy leyendo el documento Practica2.js"

let arreglo = []

var largo = parseInt(prompt("Digite el largo del arreglo"))

function construir(largo){
    arreglo.length = largo
}

construir(largo)

function llenararreglo(){
    for(let i = 0; i< arreglo.length; i++){
        let numeroAleatorio = Math.floor(Math.random()* 20) + 1;
    arreglo[i] = numeroAleatorio
    }
}
function promedioarreglo(){
    let suma = 0;
    for (let i = 0; i< arreglo.length; i++){
        suma += arreglo[i];
    }
    console.log("El promedio del arreglo es:" + suma / arreglo.length);
}
function mayorespromedio(){
    
}






do {
    var respuesta = prompt("1.Llenar arreglo\n2.Promedio arreglo\n5. Salir")

    switch (respuesta) {
        case "1":
            let opcionaLlenarArreglo =
            confirm("¿Desea llenar el arreglo?");
            if (opcionaLlenarArreglo){
                llenararreglo();
                alert("El arreglo se ha llenado");
                console.log(arreglo)
            }else{
                alert("El arreglo no ha sido llenado")
            }
            break;

        case "5":
                respuesta = 0
                break;
        case "2":
            promedioarreglo();
            }

     }while  (respuesta != 0);

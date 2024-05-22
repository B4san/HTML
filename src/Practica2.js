document.querySelector('#header').innerHTML = "estoy leyendo el documento Practica2.js"

let arreglo = [];

function construirArreglo() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de elementos que contendrá el arreglo:"));
    arreglo = [];
    for(let i = 0; i < cantidad; i++) {
        arreglo.push(0);
    }
}

function llenaArreglo() {
    for(let i = 0; i < arreglo.length; i++) {
        arreglo[i] = Math.floor(Math.random() * 20) + 1;
    }
    console.log("Arreglo llenado: ", arreglo);
}

function promedioArreglo() {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    let promedio = suma / arreglo.length;
    console.log("Promedio del arreglo: ", promedio);
    return promedio;
}

function mayoresPromedio() {
    let promedio = promedioArreglo();
    let count = 0;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > promedio) {
            count++;
        }
    }
    console.log("Cantidad de elementos mayores al promedio: ", count);
}

function sumaValor() {
    let valor = parseInt(prompt("Ingrese un número entero:"));
    for(let i = 0; i < arreglo.length; i++) {
        arreglo[i] += valor;
    }
    console.log("Arreglo incrementado: ", arreglo);
}

function sumaImPares() {
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 !== 0) {
            suma += arreglo[i];
        }
    }
    console.log("Suma de valores impares: ", suma);
}

function mayorArreglo() {
    let max = arreglo[0];
    for(let i = 1; i < arreglo.length; i++) {
        if(arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    console.log("Mayor elemento en el arreglo: ", max);
}

function mayorDiferencia() {
    let maxDif = 0;
    for(let i = 0; i < arreglo.length - 1; i++) {
        let dif = arreglo[i] - arreglo[i+1];
        if(dif < 0) {
            dif = -dif;
        }
        if(dif > maxDif) {
            maxDif = dif;
        }
    }
    console.log("Mayor diferencia: ", maxDif);
}

function encontrarElemento() {
    let valor = parseInt(prompt("Ingrese un número para buscar en el arreglo:"));
    let encontrado = false;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] === valor) {
            encontrado = true;
            break;
        }
    }
    console.log("Esta el numero dentro del arreglo?", encontrado);
}

function posicionElemento() {
    let valor = parseInt(prompt("Ingrese un número para buscar su posición en el arreglo:"));
    let pos = -1;
    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] === valor) {
            pos = i;
            break;
        }
    }
    console.log("Posición del número en el arreglo: ", pos);
}

function invertirArreglo() {
    let arregloInvertido = [];
    for(let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido.push(arreglo[i]);
    }
    console.log("Arreglo invertido: ", arregloInvertido);
}

function insertarElemento() {
    let posicion = parseInt(prompt("Ingrese la posición para insertar un número:"));
    let valor = parseInt(prompt("Ingrese el número para insertar:"));
    if(posicion >= 0 && posicion < arreglo.length) {
        for(let i = arreglo.length - 1; i > posicion; i--) {
            arreglo[i] = arreglo[i-1];
        }
        arreglo[posicion] = valor;
    }
    console.log("Arreglo después de insertar: ", arreglo);
}

function mostrarArreglo() {
    let contenido = "";
    for(let i = 0; i < arreglo.length; i++) {
        contenido += arreglo[i] + " ";
    }
    console.log("Contenido del arreglo: ", contenido);
}

function finalizarAplicacion() {
    arreglo = [];
    console.log("Aplicación finalizada.");
}

// llamo a las funciones
let opcion;
do {
    opcion = prompt("Seleccione una opción: \n1. Construir arreglo \n2. Llenar arreglo \n3. Calcular promedio \n4. Contar mayores al promedio \n5. Sumar valor \n6. Sumar impares \n7. Encontrar mayor \n8. Mayor diferencia \n9. Encontrar elemento \n10. Posición de elemento \n11. Invertir arreglo \n12. Insertar elemento \n13. Mostrar arreglo \n14. Finalizar aplicación \n");
    switch(opcion) {
        case '1':
            construirArreglo();
            break;
        case '2':
            llenaArreglo();
            break;
        case '3':
            promedioArreglo();
            break;
        case '4':
            mayoresPromedio();
            break;
        case '5':
            sumaValor();
            break;
        case '6':
            sumaImPares();
            break;
        case '7':
            mayorArreglo();
            break;
        case '8':
            mayorDiferencia();
            break;
        case '9':
            encontrarElemento();
            break;
        case '10':
            posicionElemento();
            break;
        case '11':
            invertirArreglo();
            break;
        case '12':
            insertarElemento();
            break;
        case '13':
            mostrarArreglo();
            break;
        case '14':
            finalizarAplicacion();
            break;
        default:
            console.log("Opción no válida.");
    }
} while(opcion !== '14');
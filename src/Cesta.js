document.querySelector('#header').innerHTML = "estoy leyendo el documento Cesta.js"

var cesta = []
var i = 0

do {
    i++
    var respuesta = prompt("1.Ver cesta\n2. Añadir a cesta\n3. Quitar ultima fruta de cesta\n4. Eliminar un elemento especifico de la cesta\n5. Salir")

    switch (parseInt(respuesta)) {
        case 1:
            alert("El contenido de la cesta es: " + cesta)
            break
        case 2:
            var fruta = prompt("Introduce el nombre de la fruta a añadir:")
            cesta.push(fruta)
            alert("Se ha añadido la fruta " + fruta + " a la cesta.")
            break
        case 3:
            if (cesta.length > 0) {
                var ultimaFruta = cesta.pop()
                alert("Se ha eliminado la última fruta de la cesta: " + ultimaFruta)
            } else {
                alert("La cesta está vacía.")
            }
            break
        case 4:
            if (cesta.length > 0) {
                var frutaAEliminar = prompt("Introduce el nombre de la fruta a eliminar:")
                var index = cesta.indexOf(frutaAEliminar)
                if (index > -1) {
                    cesta.splice(index, 1)
                    alert("Se ha eliminado la fruta " + frutaAEliminar + " de la cesta.")
                } else {
                    alert("La fruta no se encuentra en la cesta.")
                }
            } else {
                alert("La cesta está vacía.")
            }
            break
        case 5:
            alert("Saliendo del programa...")
            i = 900
            break
        default:
            alert("Opción no válida. Introduce un número entre 1 y 5.")
    }
} while (i < 900)
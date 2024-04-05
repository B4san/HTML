document.querySelector('#header').innerHTML = "estoy leyendo el documento array.js"

var cesta = ["fresa","pera","cereza"]
console.log(cesta)

cesta[0] = "uva" //para modificar el valor de una posicion
console.log(cesta)

console.log(cesta.length)

cesta.push("naranja")
console.log(cesta)

cesta.pop()
console.log(cesta)

cesta.push("piña")
console.log(cesta)
cesta.push("mandarina")
console.log(cesta)


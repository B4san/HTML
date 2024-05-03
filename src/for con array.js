document.querySelector('#header').innerHTML = "estoy leyendo el documento For_con_array.js"

// Array con un largo de 10

var arreglo = new Array(10)

for (let i = 0; i < arreglo.length; i++){
// Se llena el array con los valores de i
    arreglo[i] = i

}
console.log(arreglo)
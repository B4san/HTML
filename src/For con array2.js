document.querySelector('#header').innerHTML = "estoy leyendo el documento For_con_array.js"

var arreglo = []

for (let i = 0; i <10; i++){
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numeroAleatorio
}

console.log(arreglo)
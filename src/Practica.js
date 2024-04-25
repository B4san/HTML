document.querySelector('#header').innerHTML = "estoy leyendo el documento Practica.js"

var tareas = [];
i = 0

function Agregartarea() {
    var agregar = prompt("Ingrese la tarea que desea agregar");
    tareas.push(agregar);
    window.alert("Tarea agregada: " + agregar);
}

function ModificarTarea() {
    var modificar = prompt("Ingrese el número de la tarea que desea modificar");
    if (modificar > 0 , modificar <= tareas.length) {
        var nuevaTarea = prompt("Ingrese la nueva tarea");
        tareas[modificar - 1] = nuevaTarea;
        window.alert("Tarea modificada: " + nuevaTarea);
    } else {
        window.alert("Número de tarea inválido");
    }
}

function EliminarTarea() {
    var eliminar = prompt("Ingrese el número de la tarea que desea eliminar");
    if (eliminar > 0 , eliminar <= tareas.length) {
        tareas.splice(eliminar - 1, 1);
        window.alert("Tarea eliminada");
    } else {
        window.alert("Número de tarea inválido");
    }
}

function VerTareas() {
    window.alert(tareas);
}

do {
    var respuesta = prompt("1.Agregar Tarea\n2. Modificar tarea\n3. Eliminar tarea\n4. Ver tarea\n5. Salir")

    switch (respuesta) {
        case "1":
            Agregartarea();
            break;

        case "2":
            ModificarTarea();
            break;

        case "3":
            EliminarTarea();
            break;

        case "4":
            VerTareas();
            break;

        case "5":
            respuesta = 0
            break;

        default:
            window.alert("Opción inválida. Por favor, ingrese una opción válida.");
    }
} while (respuesta!= 0);
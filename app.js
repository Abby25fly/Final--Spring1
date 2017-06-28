var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
// TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
var nombre = prompt("Ingrese su nombre");
var porcenTec = prompt("Ingrese su Porcentaje Técnico");
var porcenHSE = prompt("Ingrese su Porcentaje de Habilidades Socio Emocionales");
// Hint: El estudiante debe ser agregado a la lista de estudiantes

var estudiante = {
  name: nombre,
  portec: porcenTec,
  porHSE: porcenHSE
}
    estudiantes.push(estudiante)
    return estudiante;
}
// TO DO: Retornar el estudiante recientemente creado

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.name + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.portec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    var lista = "";
    for(var i = 0; i < estudiantes.length; i++){
      lista += mostrar(estudiantes[i]);
    }
    return lista;
    // Retornar el template de todos los estudiantes];
}

function buscar(nombre, estudiantes) {
for(var i = 0; i < estudiantes.length; i++){
  if (nombre.toLowerCase() == estudiantes[i].name.toLoweCase()){
    return mostrarLista(estudiantes[i]);
  }
  else {
    return ("El nombre que ingresó no se encuentra en el sistema");
  }
}

    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}
/*
function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
*/

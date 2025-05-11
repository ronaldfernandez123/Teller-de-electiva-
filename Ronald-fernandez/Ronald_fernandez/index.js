const prompt = require('prompt-sync')();

console.log("===== Taller de Carlos Vargas =====");
console.log("1. Buscar estudiante por cédula");
console.log("2. Gestión de libros");
console.log("3. Gestión completa de estudiantes");
console.log("4. Registro de ventas");
console.log("5. Gestión de inventario");
console.log("0. Salir");

const opcion = prompt("Seleccione una opción: ");

switch (opcion) {
  case "1":
    require("./ejercicio1")();
    break;
  case "2":
    require("./ejercicio2")();
    break;
  case "3":
    require("./ejercicio3")();
    break;
  case "4":
    require("./ejercicio4")();
    break;
  case "5":
    require("./ejercicio5")();
    break;
  default:
    console.log("Saliendo...");
}

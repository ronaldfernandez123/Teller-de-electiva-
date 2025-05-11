module.exports = function () {
  const registros = [
    { id: "A001", nombre: "Camila", apellido: "Fernández" },
    { id: "B002", nombre: "Esteban", apellido: "López" },
  ];

  const input = require('prompt-sync')();
  const entradaId = input("Digite la cédula del alumno: ");
  
  const resultado = registros.find(persona => persona.id === entradaId);

  if (resultado !== undefined) {
    console.log("Alumno localizado:", resultado);
  } else {
    console.log("No se halló ningún alumno con esa cédula.");
  }
};

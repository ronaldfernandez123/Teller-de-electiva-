module.exports = function () {
  let listaPersonas = [];

  const input = require('prompt-sync')();

  // Registro inicial
  listaPersonas.push({ id: "1", nombre: "Sofía", apellido: "Martínez" });
  listaPersonas.push({ id: "2", nombre: "Carlos", apellido: "Benítez" });

  // Ordenar alfabéticamente por apellido
  listaPersonas.sort((x, y) => x.apellido.localeCompare(y.apellido));
  console.log("\nListado ordenado de personas:");
  console.log(listaPersonas);

  // Búsqueda
  const idBuscar = input("\nDigite el ID para buscar: ");
  const personaEncontrada = listaPersonas.find(p => p.id === idBuscar);
  console.log("Resultado:", personaEncontrada || "No se encontró ningún registro.");

  // Actualización
  const idActualizar = input("\nID de la persona a modificar: ");
  const nombreActualizado = input("Escriba el nuevo nombre: ");
  const posicion = listaPersonas.findIndex(p => p.id === idActualizar);
  if (posicion !== -1) {
    listaPersonas[posicion].nombre = nombreActualizado;
    console.log("Datos actualizados:", listaPersonas[posicion]);
  } else {
    console.log("No se encontró el ID para actualizar.");
  }

  // Eliminación
  const idEliminar = input("\nIngrese el ID para eliminar: ");
  listaPersonas = listaPersonas.filter(p => p.id !== idEliminar);
  console.log("Listado final después de eliminar:");
  console.log(listaPersonas);
};

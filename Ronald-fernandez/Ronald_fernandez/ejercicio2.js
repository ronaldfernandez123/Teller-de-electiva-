module.exports = function () {
  const coleccion = [];

  const input = require('prompt-sync')();
  const nombreLibro = input("Escriba el nombre del libro: ");
  const escritor = input("Indique el nombre del escritor: ");
  const fechaPublicacion = input("Año en que se publicó: ");
  const codigoISBN = input("Código ISBN del ejemplar: ");

  coleccion.push({
    nombre: nombreLibro,
    autor: escritor,
    año: fechaPublicacion,
    isbn: codigoISBN
  });

  console.log("\nListado de libros almacenados:");
  console.log(coleccion);

  const termino = input("\nBuscar libro por nombre o escritor: ");
  const encontrados = coleccion.filter(item =>
    item.nombre.includes(termino) || item.autor.includes(termino)
  );

  console.log("\nLibros encontrados:");
  console.log(encontrados);
};

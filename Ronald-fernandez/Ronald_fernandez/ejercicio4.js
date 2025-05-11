module.exports = function () {
  const TASA_IVA = 0.19;
  const input = require('prompt-sync')();
  const listaArticulos = [];

  let opcion = "s";
  while (opcion.toLowerCase() === "s") {
    let valorUnitario = parseFloat(input("Digite el valor del artículo: "));
    let unidades = parseInt(input("Cantidad adquirida: "));

    if (valorUnitario > 0 && unidades > 0) {
      listaArticulos.push({
        valor: valorUnitario,
        cantidad: unidades,
        parcial: valorUnitario * unidades
      });
    } else {
      console.log("⚠️  El valor y la cantidad deben ser mayores que cero.");
    }

    opcion = input("¿Desea registrar otro artículo? (s/n): ");
  }

  const montoBase = listaArticulos.reduce((suma, item) => suma + item.parcial, 0);
  const impuesto = montoBase * TASA_IVA;
  const montoFinal = montoBase + impuesto;

  console.log("\n🧾 Factura:");
  console.log("Monto antes de IVA:", montoBase.toFixed(2));
  console.log("IVA (19


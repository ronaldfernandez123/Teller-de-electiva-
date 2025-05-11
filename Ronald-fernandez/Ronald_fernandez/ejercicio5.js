

let almacen = [];

function registrarArticulo(id, descripcion, valorUnitario, existencias, estadoActual) {
  if (almacen.some(item => item.id === id)) {
    console.log("⚠️  Ya existe un artículo con ese ID.");
    return;
  }

  if (valorUnitario < 0 || existencias < 0) {
    console.log("⚠️  El valor y la cantidad deben ser mayores o iguales a cero.");
    return;
  }

  almacen.push({
    id,
    descripcion,
    valor: valorUnitario,
    cantidad: existencias,
    estado: estadoActual
  });
}

function modificarExistencias(id, nuevaCantidad) {
  const articulo = almacen.find(a => a.id === id);
  if (articulo) {
    articulo.cantidad = nuevaCantidad;
    console.log("✅ Existencias actualizadas:", articulo);
  } else {
    console.log("❌ Artículo no encontrado.");
  }
}

function mostrarInventario() {
  const listado = [...almacen].sort((a, b) => a.descripcion.localeCompare(b.descripcion));
  console.log("📦 Inventario actual:");
  console.table(listado);
}

// Prueba
registrarArticulo("A101", "Monitor", 120000, 8, "En stock");
registrarArticulo("A102", "Parlantes", 30000, 15, "En stock");
modificarExistencias("A101", 12);
mostrarInventario();

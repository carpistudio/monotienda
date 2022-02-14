productos = localStorage.getItem("productos");
productos = JSON.parse(productos);

let checkoutCarrito = document.getElementById("checkoutCarrito");

for (const producto of productos) {
  if(producto.agregado == true) {
      let checkoutProducto = document.createElement("div");
      checkoutProducto.className = "checkoutProducto";
      checkoutProducto.id = "checkoutProducto" + producto.sku;
      checkoutProducto.innerHTML = `
        <img class="checkoutProducto__imagen" src="${producto.imagen}">
        <div class="checkoutProducto__titulo">${producto.titulo}</div>
        <div class="checkoutProducto__cantidad">${producto.cantidad}</div>
        <div class="checkoutProducto__precio">$${(producto.precio * producto.cantidad).toFixed(2)}</div>
      `;
      checkoutCarrito.appendChild(checkoutProducto);
  };
}

let checkoutTotal = document.getElementById("checkoutTotal");

precioTotal = productos.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
checkoutTotal.textContent = "$" + precioTotal.toFixed(2);
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
let botonConfirmarPrecioTotal = document.getElementById("botonConfirmarPrecioTotal");

precioTotal = productos.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
checkoutTotal.textContent = "$" + precioTotal.toFixed(2);
botonConfirmarPrecioTotal.textContent = "$" + precioTotal.toFixed(2);




// *********** FORMULARIO DETALLES ************/

let formTusDetalles = document.getElementById("tusDetalles");
formTusDetalles.addEventListener("submit", submitFormTusDetalles);

let enviarADireccionDiferente = document.getElementById("enviarADireccionDiferente")
enviarADireccionDiferente.addEventListener("input", aDireccionDiferente);

let direccionDiferente = document.getElementById("direccionDiferente");

function aDireccionDiferente() {
  if (enviarADireccionDiferente.checked) {
    direccionDiferente.classList.remove("cerrado");
  } else {
    direccionDiferente.classList.add("cerrado");
  }
}

let detalles__tusDetalles = document.getElementById("detalles__tusDetalles");
let detalles__envio = document.getElementById("detalles__envio");

let principal__tusDetalles = document.getElementById("principal__tusDetalles");
let principal__pago = document.getElementById("principal__pago");
let principal__confirmacion = document.getElementById("principal__confirmacion");

let pasos__tusDetalles = document.getElementById("pasos__tusDetalles");
let pasos__pago = document.getElementById("pasos__pago");
let pasos__confirmacion = document.getElementById("pasos__confirmacion");

function submitFormTusDetalles(event) {
  event.preventDefault();

  detalles__tusDetalles.innerHTML = "<h4>Tus detalles</h4>"
  detalles__tusDetalles.classList.remove("cerrado");
  let infoPersonal = document.createElement("div");
  infoPersonal.className = "infoPersonal";
  infoPersonal.innerHTML = `
    <div class="infoPersonal__nombre">${formTusDetalles[0].value} ${formTusDetalles[1].value}</div>
    <div class="infoPersonal__email">${formTusDetalles[2].value} - ${formTusDetalles[3].value} - ${formTusDetalles[4].value}</div>
    <div class="infoPersonal__pais">${formTusDetalles[5].value} ${formTusDetalles[6].value} - ${formTusDetalles[7].value}</div>
    <div class="infoPersonal__direccion">${formTusDetalles[8].value} - ${formTusDetalles[9].value}</div>
  `;
  detalles__tusDetalles.appendChild(infoPersonal);

  if (enviarADireccionDiferente.checked) {
    detalles__envio.innerHTML = "<h4>Detalles de envío</h4>"
    detalles__envio.classList.remove("cerrado");
    let infoEnvio = document.createElement("div");
    infoEnvio.clasName = "checkoutEnvio";
    infoEnvio.innerHTML = `
      <div class="checkoutEnvio__pais">${formTusDetalles[11].value} - ${formTusDetalles[12].value}- ${formTusDetalles[13].value}</div>
      <div class="checkoutEnvio__direccion">${formTusDetalles[14].value} ${formTusDetalles[15].value} - ${formTusDetalles[16].value}</div>
    `;
    detalles__envio.appendChild(infoEnvio);
  }

  principal__tusDetalles.classList.add("cerrado");
  principal__pago.classList.remove("cerrado");

  pasos__tusDetalles.classList.add("disabled");
  pasos__pago.classList.remove("disabled");
}

let pago__atras = document.getElementById("pago__atras");
pago__atras.addEventListener("click", pagoAtrasClicked);

function pagoAtrasClicked(event) {
  event.preventDefault();

  principal__tusDetalles.classList.remove("cerrado");
  principal__pago.classList.add("cerrado");

  pasos__tusDetalles.classList.remove("disabled");
  pasos__pago.classList.add("disabled");
}

let pagoTarjeta = document.getElementById("pagoTarjeta");
pagoTarjeta.addEventListener("submit", finalizarCompra);

function finalizarCompra(event) {
  event.preventDefault();

  principal__pago.classList.add("cerrado");
  principal__confirmacion.classList.remove("cerrado");

  pasos__pago.classList.add("disabled");
  pasos__confirmacion.classList.remove("disabled");

  for (const producto of productos) {
    if(producto.agregado == true) {
        producto.agregado = false;
        producto.stock = producto.stock + producto.cantidad;
        producto.cantidad = 0;

        localStorage.setItem("productos", JSON.stringify(productos));
    };
  }
}
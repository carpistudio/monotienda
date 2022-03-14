import * as DomElements from "./domElements.js";
import { formTusDetalles } from "./domElements.js";

// Setea los precios con los decimales separados por coma, en lugar de por punto
function toLocaleFixed (num) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
};

export function imprimirProductos (carritoAgregados) {
  for (const producto of carritoAgregados) {
    let checkoutProducto = document.createElement("div");
    checkoutProducto.className = "checkoutProducto";
    checkoutProducto.id = "check    outProducto" + producto.sku;
    checkoutProducto.innerHTML = `
      <div class="checkoutProducto__imagen">
        <img src="${producto.imagen}" alt="${producto.titulo}">
      </div>
      <div class="checkoutProducto__titulo">${producto.titulo}</div>
      <div class="checkoutProducto__cantidad">${producto.cantidad}</div>
      <div class="checkoutProducto__precio">$${toLocaleFixed(producto.precio * producto.cantidad)}</div>
    `;
    DomElements.checkoutCarrito.appendChild(checkoutProducto);
  }
}

export function cargarPrecioTotal(carritoAgregados) {
    // Suma los precios de todos los productos multiplicados por sus cantidades
    let precioTotal = carritoAgregados.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
    DomElements.checkoutTotal.textContent = `$${toLocaleFixed(precioTotal)}`;
    DomElements.botonConfirmarPrecioTotal.textContent = `$${toLocaleFixed(precioTotal)}`;
}

// Al hacer clic en checkbox, abre la segunda parte del form
DomElements.enviarADireccionDiferente.addEventListener("click", function(){
  if (DomElements.enviarADireccionDiferente.checked) { 
    DomElements.direccionDiferente.classList.remove("cerrado"); // Si está marcado, lo muestra
  } else {
    DomElements.direccionDiferente.classList.add("cerrado"); // si no, lo oculta
  }
}); 

formTusDetalles.addEventListener("submit", submitFormTusDetalles);
function submitFormTusDetalles(event) {
  event.preventDefault();
  DomElements.detalles__tusDetalles.innerHTML = "<h4>Tus detalles</h4>"
  DomElements.detalles__tusDetalles.classList.remove("cerrado");
  let infoPersonal = document.createElement("div"); // Agrega toda la info personal en la columna derecha
  infoPersonal.className = "infoPersonal";
  infoPersonal.innerHTML = `
    <div class="infoPersonal__nombre">${formTusDetalles[0].value} ${formTusDetalles[1].value}</div>
    <div class="infoPersonal__email">${formTusDetalles[2].value} - ${formTusDetalles[3].value} - ${formTusDetalles[4].value}</div>
    <div class="infoPersonal__pais">${formTusDetalles[5].value} ${formTusDetalles[6].value} - ${formTusDetalles[7].value}</div>
    <div class="infoPersonal__direccion">${formTusDetalles[8].value} - ${formTusDetalles[9].value}</div>
  `;
  DomElements.detalles__tusDetalles.appendChild(infoPersonal);

  // Si hay dirección diferente, también agrega la info de envío aparte en la columna derecha
  if (DomElements.enviarADireccionDiferente.checked) {
    DomElements.detalles__envio.innerHTML = "<h4>Detalles de envío</h4>"
    DomElements.detalles__envio.classList.remove("cerrado");
    let infoEnvio = document.createElement("div");
    infoEnvio.clasName = "checkoutEnvio";
    infoEnvio.innerHTML = `
      <div class="checkoutEnvio__pais">${formTusDetalles[11].value} - ${formTusDetalles[12].value}- ${formTusDetalles[13].value}</div>
      <div class="checkoutEnvio__direccion">${formTusDetalles[14].value} ${formTusDetalles[15].value} - ${formTusDetalles[16].value}</div>
    `;
    DomElements.detalles__envio.appendChild(infoEnvio);
  }

  DomElements.principal__tusDetalles.classList.add("cerrado");
  DomElements.principal__pago.classList.remove("cerrado");

  DomElements.pasos__tusDetalles.classList.add("disabled");
  DomElements.pasos__pago.classList.remove("disabled");
}

pago__atras.addEventListener("click", pagoAtrasClicked);
function pagoAtrasClicked(event) {
  event.preventDefault();

  DomElements.principal__pago.classList.add("cerrado");
  DomElements.principal__tusDetalles.classList.remove("cerrado");

  DomElements.pasos__pago.classList.add("disabled");
  DomElements.pasos__tusDetalles.classList.remove("disabled");
}

// Al terminar con el pago, dispara esta función
pagoTarjeta.addEventListener("submit", finalizarCompra);
function finalizarCompra(event) {
    event.preventDefault();
    
    DomElements.principal__pago.classList.add("cerrado");
    DomElements.principal__confirmacion.classList.remove("cerrado");
    
    DomElements.pasos__pago.classList.add("disabled");
    DomElements.pasos__confirmacion.classList.remove("disabled");
    
    let carritoAgregados = []; // Redeclara el array de los productos en el Carrito
    localStorage.setItem("productos", JSON.stringify(carritoAgregados)); // y lo vuelve a cargar vacío en el LS
    localStorage.setItem("numerito", 0);
    localStorage.setItem("precioTotal", 0);
}
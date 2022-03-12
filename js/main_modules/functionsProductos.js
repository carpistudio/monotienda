import * as Botones from "./botones.js"; // Importa todas las funciones de los botones
import * as DomElements from "./domElements.js"; // Importa todos los elementos del dom
import * as WhatsApp from "./whatsapp.js";

// Setea los precios con los decimales separados por coma, en lugar de por punto
export function toLocaleFixed (num) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
};

// Imprime los productos en la home
export function imprimirProductos(listadoProductos, productos) {
    listadoProductos.innerHTML = "";
    for (const producto of productos) {
        let contenedorProducto = document.createElement("div");
        contenedorProducto.className = "producto";
        contenedorProducto.id = producto.sku;
        contenedorProducto.innerHTML = `
        <div class="producto__img">
            <img src="${producto.imagen}">
        </div>
        <h4 class="producto__titulo">${producto.titulo.toUpperCase()}</h4>
        <h4 class="producto__precio">$<span>${toLocaleFixed(producto.precio)}</span></h4>
        <div class="producto__agregar">AGREGAR AL CARRITO</div>
        <div class="producto__sinStock">SIN STOCK</div>
        <div class="producto__whatsapp">
            <i class="fab fa-whatsapp"></i>
            <p>CONSULTAR POR WHATSAPP</p>
        </div>
        `;
        listadoProductos.appendChild(contenedorProducto);
    }

    Botones.asignarBotonesAgregar(productos); // Reasigna todos los botones de Agregar al carrito
    WhatsApp.asignarBotonesWhatsApp(productos);
}

export let carritoAgregados = []; // Declara el array de los productos agregados al Carrito

// Imprime los productos en el Carrito
export function imprimirProductosEnCarrito() {
    carritoProductos.innerHTML = ""; // Primero vacía el div
    carritoAgregados.forEach((productoAgregado) => { // Y luego imprime todos los que hay con los cambios
        let nuevoProducto = document.createElement("div");
        nuevoProducto.className = "nuevoProducto";
        nuevoProducto.id = "agregado" + productoAgregado.sku;
        nuevoProducto.innerHTML = `
            <div class="carritoImagen">
            <img src="${productoAgregado.imagen}">
            </div>
            <div class="carritoTitulo">${productoAgregado.titulo}</div>
            <div class="carritoCantidad">
            <div class="menos">-</div>
            <div class="cant">${productoAgregado.cantidad}</div>
            <div class="mas">+</div>
            </div>
            <div class="carritoPrecio">$${toLocaleFixed(productoAgregado.precio * productoAgregado.cantidad)}</div>
            <div class="carritoBorrar"><i class="fas fa-trash-alt"></i></div>
        `;
        carritoProductos.appendChild(nuevoProducto);
  });

  Botones.asignarBotonesMasMenos(); // Reasigna los botones de + y -
  Botones.asignarBotonesBorrar(); // Reasigna los botones de borrar producto
  actualizarPrecioTotal(); // Actualiza el precio total basado en los productos acutales
  actualizarNumerito(); // Actualiza el numerito (cantidades de cada producto sumadas)
  Botones.estaVacioCheck(); // Chequea si el Carrito quedó vacío para ocultarlo
  localStorage.setItem("productos", JSON.stringify(carritoAgregados)); // Guarda los productos en el LS
}

// Actualiza el precio total que aparece en el carrito
function actualizarPrecioTotal() {

    // Suma todos los precios de los productos en el array multiplicado por sus cantidades
    const precioTotal = carritoAgregados.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0); 
    carritoTotal.textContent = toLocaleFixed(precioTotal); // y lo imprime
    
    localStorage.setItem("precioTotal", precioTotal); // Luego lo guarda en el LS
}

export let numerito = 0;
function actualizarNumerito() {
    // Se agregan y quitan clases para generar la animación en el numerito
    DomElements.numeritoContenedor.classList.remove("shake");
    DomElements.numeritoContenedor.offsetWidth;
    DomElements.numeritoContenedor.classList.add("shake");

    // Suma todas las cantidades de los productos agregados en el array del carrito
    numerito = carritoAgregados.reduce((suma, productoAgregado) => suma + parseInt(productoAgregado.cantidad), 0);
    DomElements.numeritoContenedor.textContent = numerito; // y lo imprime

    localStorage.setItem("numerito", numerito); // Luego lo guarda en el LS
};

// Obtiene el numerito desde el LS
// Si es mayor a cero, carga el carrito que tenemos guardado en el LS
numerito = localStorage.getItem("numerito");
if(numerito > 0) {
    carritoAgregados = localStorage.getItem("productos");
    carritoAgregados = JSON.parse(carritoAgregados);
    imprimirProductosEnCarrito();
}
import { toastify } from "./toastify.js";
import { carritoAgregados } from "./functionsProductos.js";
import { imprimirProductos } from "./functionsProductos.js";
import { imprimirProductosEnCarrito } from "./functionsProductos.js";
import { numerito } from "./functionsProductos.js";
import * as DomElements from "./domElements.js"; // Importa todos los elementos del dom



// Reasigna todos los botones de Agregar al carrito cada vez que cambian los productos que se muestran
export function asignarBotonesAgregar(productos) {
    const botonesAgregar = document.querySelectorAll('.producto__agregar');
    botonesAgregar.forEach((botonAgregar) => {
      botonAgregar.addEventListener('click', function() {
          botonAgregarClicked(event, productos);
      }, false);
    });
  };
  
// Se ejecuta al clickear un botón de Agregar al carrito
function botonAgregarClicked(event, productos) {
    const productoAgregadoPadre = event.target.closest('.producto'); // Busca el div del producto
    const productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id); // y lo busca por SKU en el array fetcheado

    // Lo busca en el array de productos en el Carrito
    const estaEnCarrito = carritoAgregados.find((buscarSiEsta) => buscarSiEsta.sku == productoAgregadoPadre.id);
    
    if (estaEnCarrito) {
        estaEnCarrito.cantidad++; // Si está en el Carrito, solo aumenta la cantidad
    } else {
        productoAgregado.cantidad = 1; // Si no está, le setea cantidad
        carritoAgregados.push(productoAgregado); // y lo agrega
    }

    imprimirProductosEnCarrito(); // Imprime los productos en el div de Carrito
    toastify("agregado"); // Dispara el toast
}

// Asigna los botones + y - de los productos del Carrito
export function asignarBotonesMasMenos() {
    const botonesMas = document.querySelectorAll('.mas');
    const botonesMenos = document.querySelectorAll('.menos');

    botonesMas.forEach((botonMas) => {
        botonMas.addEventListener('click', botonMasClicked);
    });

    botonesMenos.forEach((botonMenos) => {
        botonMenos.addEventListener('click', botonMenosClicked);
    });
};

// Al hacer click en un botón + (más)
function botonMasClicked(event) {
    const productoAgregadoPadre = event.target.closest('.nuevoProducto'); // Busca el div del producto
    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id); // y lo busca en el array del carrito
  
    productoAgregado.cantidad++; // Le suma uno
    imprimirProductosEnCarrito(); // Vuelve a imprimir los productos en el Carrito
}

// Al hacer click en un botón - (menos)
function botonMenosClicked(event) {
    const productoAgregadoPadre = event.target.closest('.nuevoProducto'); // Busca el div del producto
    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id); // y lo busca en el array del carrito
    
    if (productoAgregado.cantidad > 1) {
        productoAgregado.cantidad--; // Le resta uno
        imprimirProductosEnCarrito();
    }
}

export function asignarBotonesBorrar() {
    const botonesBorrar = document.querySelectorAll('.carritoBorrar i');

    botonesBorrar.forEach((botonBorrar) => {
        botonBorrar.addEventListener('click', botonBorrarClicked);
    });
};

function botonBorrarClicked(event) {
    const productoAgregadoPadre = event.target.closest('.nuevoProducto'); // Busca el div del producto
    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id); // y lo busca en el array del carrito

    const index = carritoAgregados.indexOf(productoAgregado); // Busca el index de este producto en el array
    if (index > -1) {
        carritoAgregados.splice(index, 1); // y lo elimina del array
    }
    imprimirProductosEnCarrito(); // Vuelve a imprimir los productos en el Carrito
    toastify("borrado"); // Dispara el toast
}

DomElements.botonVaciar.addEventListener('click', popUpVaciarCarrito);
function popUpVaciarCarrito() {
    swal(`Tenés ${numerito} ${numerito > 1 ? "productos" : "producto"} en el carrito.`, {
        title: "¿Estás seguro?",
        icon: "warning",
        buttons: {
        cancel: "Cancelar",
        aceptar: {
            text: "Aceptar",
            value: "aceptar",
        },
        },
    })
    .then((value) => {
        switch (value) {

        case "aceptar":
            numerito > 1 ? swal(`Carrito vaciado. Se eliminaron ${numerito} productos.`,{icon: "success",}) : swal(`Carrito vaciado. Se eliminó ${numerito} producto.`,{icon: "success",});
            botonVaciarClicked();
            break; 
        }
    });
}

function botonVaciarClicked() {
    while (carritoAgregados.length) {
        carritoAgregados.pop();
    }
    imprimirProductosEnCarrito();
}


// Eventos de abrir y cerrar el carrito
DomElements.botonCarrito.addEventListener('click', botonCarritoClick);
DomElements.cerrarCarrito.addEventListener('click', cerrarCarritoClick);

function botonCarritoClick() {
    DomElements.carrito.classList.remove("cerrado");
    DomElements.botonCarrito.classList.add("cerrado");
}
function cerrarCarritoClick() {
    DomElements.carrito.classList.add("cerrado");
    DomElements.botonCarrito.classList.remove("cerrado");
}

// Ocultar el div de Carrito si está vacío después de alguna acción
export function estaVacioCheck() {
    if(numerito == "0" || numerito == null) {
        DomElements.carrito.classList.add("cerrado");
    } else {
        if(DomElements.carrito.classList.contains("cerrado")){
            DomElements.botonCarrito.classList.remove("cerrado");
        }
    }
}


// Esta es la función para asignar el botón de Ver todos en las búsquedas
export function asignarBotonVerTodos(productos) {
    let verTodos = document.querySelector(".verTodos");
    verTodos.addEventListener("click", function() {
        verTodosClicked(productos);
    }, false);
};

// Se imprimen todos los productos del array al hacer clic en Ver todos
function verTodosClicked(productos) {
    DomElements.listadoProductos.scrollIntoView();
    imprimirProductos(DomElements.listadoProductos, productos);
    
    DomElements.botonesCategorias.forEach((botonCategoria) => {
      botonCategoria.children[0].classList.remove("active");
    });
};
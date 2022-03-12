import * as FunctionsCheckout from "./checkout_modules/functionsCheckout.js"; // Importa las funciones de Checkout

let carritoAgregados = localStorage.getItem("productos"); // Obtiene el Carrito desde el LS
carritoAgregados = JSON.parse(carritoAgregados);

FunctionsCheckout.imprimirProductos(carritoAgregados); // Imprime todos los productos en el Carrito lateral
FunctionsCheckout.cargarPrecioTotal(carritoAgregados); // Imprime el precio Total en el Carrito y en el botón de Confirmar Pago
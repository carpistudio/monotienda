import * as FunctionsCheckout from "./checkout_modules/functionsCheckout.js";

let carritoAgregados = localStorage.getItem("productos");
carritoAgregados = JSON.parse(carritoAgregados);

FunctionsCheckout.imprimirProductos(carritoAgregados); // Imprime todos los productos en el Carrito lateral
FunctionsCheckout.cargarPrecioTotal(carritoAgregados); // Imprime el precio Total en el Carrito y en el botón de Confirmar Pago
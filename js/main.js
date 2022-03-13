import * as DomElements from "./main_modules/domElements.js";
import { imprimirProductos } from "./main_modules/functionsProductos.js";
import { buscar } from "./main_modules/busqueda.js";
import { categoriaClick } from "./main_modules/busqueda.js";

const URL_PRODUCTOS = "./js/productos.json";


// Fetch de los productos
const pedirProductos = async () => {
    const resp = await fetch(URL_PRODUCTOS);
    let productos = await resp.json();
    return productos;
};
let productos = pedirProductos();
productos
.then((productos) => productosFetched(productos))

function productosFetched(productos) {
    imprimirProductos(DomElements.listadoProductos, productos);

    // Evento del buscador del header
    DomElements.buscadorTop.addEventListener("submit", function() {
        buscar(event, productos);
    }, false);

    // Evento de las categorías laterales
    DomElements.botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.addEventListener("click", function() {
            categoriaClick(event, productos);
        }, false);
    });
}
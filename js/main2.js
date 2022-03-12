import * as DomElements from "./modules/domElements.js"; // Importa todos los elementos del dom
import { imprimirProductos } from "./modules/functionsProductos.js"; // Importa todas las funciones para los productos
import { buscar } from "./modules/busqueda.js"; // Importa todas las funciones para los productos
import { categoriaClick } from "./modules/busqueda.js"; // Importa todas las funciones para los productos

const URL_PRODUCTOS = "./js/productos.json"; // Setea la URL de donde vienen los productos


// Fetch de los productos
const pedirProductos = async () => {
    const resp = await fetch(URL_PRODUCTOS);
    let productos = await resp.json();
    return productos;
};
let productos = pedirProductos();
productos
.then((productos) => productosFetched(productos))

// Función que sale del fetch
function productosFetched(productos) {
    imprimirProductos(DomElements.listadoProductos, productos); // Imprime los productos en la home

    DomElements.buscadorTop.addEventListener("submit", function() {
        buscar(event, productos);
    }, false);

    DomElements.botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.addEventListener("click", function() {
            categoriaClick(event, productos);
        }, false);
    });
}
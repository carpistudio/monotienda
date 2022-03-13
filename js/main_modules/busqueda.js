import { imprimirProductos } from "./functionsProductos.js";
import { listadoProductos } from "./domElements.js";
import { asignarBotonVerTodos } from "./botones.js";
import { botonesCategorias } from "./domElements.js";

// Función al enviar el formulario de búsqueda
export function buscar(event, productos) {
    event.preventDefault();
    listadoProductos.scrollIntoView();
    let busqueda = buscadorTop.children[0].value;
    const result = productos.filter(
        producto =>
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
    imprimirProductos(listadoProductos, result);

    // Si no hay resultados, muestra el mensaje de error
    if(result.length === 0 || busqueda === "" || busqueda === " ") {
        listadoProductos.innerHTML = "";
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <h4>No hay productos que coincidan con la búsqueda "${busqueda}".</h4>
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.appendChild(noHayCoincidencias);
    // Si hay, muestra el mensaje de resultados de la búsqueda
    } else {
        let tituloBusqueda = document.createElement("h3");
        tituloBusqueda.className = "nombreCategoria";
        tituloBusqueda.innerHTML = `
        Resultados de búsqueda para "${busqueda}"
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.prepend(tituloBusqueda);
    }

    asignarBotonVerTodos(productos);
    buscadorTop.children[0].value = ""; // Se vacía el input del buscador
}

// Función al hacer click en alguna categoría
export function categoriaClick(event, productos) {
    listadoProductos.scrollIntoView();
    botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.children[0].classList.remove("active");
    });
    event.target.classList.add("active");
    
    const result = productos.filter(producto => producto.categoria === event.target.textContent);
    imprimirProductos(listadoProductos, result);

    // Si es la categoría de Todos, solamente imprime nuevamente todos los productos fetcheados
    if(event.target.textContent === "Todos los productos") {
        imprimirProductos(listadoProductos, productos);
    // Si la categoría está vacía, imprime el mensaje de error
    } else if(result.length === 0) {
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <h4>No hay productos que coincidan con la categoría ${event.target.textContent}.</h4>
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.appendChild(noHayCoincidencias);
    // Si hay resultados, imprime los productos en esa categoría con su título
    } else {
        let nombreCategoria = document.createElement("h3");
        nombreCategoria.className = "nombreCategoria";
        nombreCategoria.innerHTML = `
        ${event.target.textContent}
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.prepend(nombreCategoria);
    }

    asignarBotonVerTodos(productos);
}
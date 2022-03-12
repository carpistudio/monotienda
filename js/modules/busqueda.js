import { imprimirProductos } from "./functionsProductos.js";
import { listadoProductos } from "./domElements.js";
import { asignarBotonVerTodos } from "./botones.js";
import { botonesCategorias } from "./domElements.js";

export function buscar(event, productos) {
    event.preventDefault();
    listadoProductos.scrollIntoView(); // Scrollea hasta los productos
    let busqueda = buscadorTop.children[0].value;
    const result = productos.filter(
        producto =>
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    imprimirProductos(listadoProductos, result);

    if(result.length === 0 || busqueda === "" || busqueda === " ") {
        listadoProductos.innerHTML = "";
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <h4>No hay productos que coincidan con la búsqueda "${busqueda}".</h4>
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.appendChild(noHayCoincidencias);
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
    buscadorTop.children[0].value = ""; // Se vacía el buscador
}

export function categoriaClick(event, productos) {
    listadoProductos.scrollIntoView();
    botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.children[0].classList.remove("active");
    });
    event.target.classList.add("active");
    
    // Filtra la categoría en el array de productos
    const result = productos.filter(producto => producto.categoria === event.target.textContent);

    imprimirProductos(listadoProductos, result);

    if(event.target.textContent === "Todos los productos") {
        imprimirProductos(listadoProductos, productos);
    } else if(result.length === 0) {
        let noHayCoincidencias = document.createElement("div");
        noHayCoincidencias.className = "noHayCoincidencias";
        noHayCoincidencias.innerHTML = `
        <h4>No hay productos que coincidan con la categoría ${event.target.textContent}.</h4>
        <a class="verTodos">Ver todos los productos</a>
        `;
        listadoProductos.appendChild(noHayCoincidencias);
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
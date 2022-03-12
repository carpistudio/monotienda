import { imprimirProductos } from "./functionsProductos.js"; // Importa la función de imprimir productos en la home
import { listadoProductos } from "./domElements.js"; // Importa el div de los productos en la home
import { asignarBotonVerTodos } from "./botones.js"; // Importa la función de asignar el botón de Ver todos
import { botonesCategorias } from "./domElements.js"; // Importa los botones de las categorías

// Función al enviar el formulario de búsqueda
export function buscar(event, productos) {
    event.preventDefault();
    listadoProductos.scrollIntoView(); // Scrollea hasta los productos
    let busqueda = buscadorTop.children[0].value; // Declara una variable con el valor de la búsqueda
    const result = productos.filter( // y la filtra en los productos fetcheados
        producto =>
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    imprimirProductos(listadoProductos, result); // Imprime los productos que coincidan en la home

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

    asignarBotonVerTodos(productos); // Reasigna el botón de Ver todos los productos
    buscadorTop.children[0].value = ""; // Se vacía el input del buscador
}

// Función al hacer click en alguna categoría
export function categoriaClick(event, productos) {
    listadoProductos.scrollIntoView(); // Scrollea hasta los productos
    botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.children[0].classList.remove("active"); // Elimina todos los active que pueda haber en otras categorías
    });
    event.target.classList.add("active"); // Y se lo agrega a la clickeada
    
    // Filtra la categoría en el array de productos
    const result = productos.filter(producto => producto.categoria === event.target.textContent);

    imprimirProductos(listadoProductos, result); // Imprime los productos de esa categoría

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

    asignarBotonVerTodos(productos); // Reasigna el botón de Ver todos los productos
}
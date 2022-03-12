const URL_PRODUCTOS = "./js/productos.json"; // Setear la URL de donde vienen los productos

// Definir todas las constantes del documento
const listadoProductos = document.getElementById("listadoProductos");
const listadoCategorias = document.getElementById("listadoCategorias");
const botonesCategorias = document.querySelectorAll(".cat");
const buscadorTop = document.querySelector("#buscadorTop");
const carritoProductos = document.getElementById("carritoProductos");

// Definir el toast que va a aparecer al agregar un producto al carrito
const toastifyAgregado = () => {
    Toastify({
        text: "Producto agregado",
        duration: 2000,
        close: true,
        className: "toastifyToast",
        onClick: () => {botonCarritoClick()}
    }).showToast();
}

// Función que permite setear los precios con los decimales separados por coma y no por punto
Number.prototype.toLocaleFixed = function(n) {
    return this.toLocaleString(undefined, {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    });
};

// Fetch de los productos
const pedirProductos = async () => {
    const resp = await fetch(URL_PRODUCTOS);
    let productos = await resp.json();
    return productos;
};
let productos = pedirProductos();
productos.then((productosJSON) => renderProductos(productosJSON));

// Función que sale del fetch
function renderProductos(productos) {

    // Asigna los botones de categorías
    botonesCategorias.forEach((botonCategoria) => {
        botonCategoria.addEventListener('click', botonCategoriaClicked);
    });

    // Lo que se ejecuta al cliquear en una categoría
    function botonCategoriaClicked(e) {
        listadoProductos.scrollIntoView();

        botonesCategorias.forEach((botonCategoria) => {
            botonCategoria.children[0].classList.remove("active");
        });
        e.target.classList.add("active");

        // Filtra la categoría en el array de productos
        const result = productos.filter(producto => producto.categoria === e.target.textContent);

        // Si no hay resultados, muestra mensaje de error
        // Si hay, muestra el título de la categoría
        listadoProductos.innerHTML = "";
        if(e.target.textContent === "Todos los productos") {
            imprimirProductos(productos)
        } else if(result.length === 0) {
            let noHayCoincidencias = document.createElement("div");
            noHayCoincidencias.className = "noHayCoincidencias";
            noHayCoincidencias.innerHTML = `
            <h4>No hay productos que coincidan con la categoría ${e.target.textContent}.</h4>
            <a class="verTodos">Ver todos los productos</a>
            `;
            listadoProductos.appendChild(noHayCoincidencias);
            asignarBotonVerTodos();
        } else {
            let nombreCategoria = document.createElement("h3");
            nombreCategoria.className = "nombreCategoria";
            nombreCategoria.innerHTML = `
            ${e.target.textContent}
            <a class="verTodos">Ver todos los productos</a>
            `;
            listadoProductos.prepend(nombreCategoria);
            asignarBotonVerTodos();
        }

        // Muestra los resultados abajo del título
        for (const producto of result) {
            let contenedorProducto = document.createElement("div");
            contenedorProducto.className = "producto";
            contenedorProducto.id = producto.sku;
            contenedorProducto.innerHTML = `
            <div class="producto__img">
                <img src="${producto.imagen}">
            </div>
            <h4 class="producto__titulo">${producto.titulo.toUpperCase()}</h4>
            <h4 class="producto__precio">$<span>${producto.precio.toLocaleFixed(2)}</span></h4>
            <div class="producto__agregar">AGREGAR AL CARRITO</div>
            <div class="producto__sinStock">SIN STOCK</div>
            <div class="producto__whatsapp">
                <i class="fab fa-whatsapp"></i>
                <p>CONSULTAR POR WHATSAPP</p>
            </div>
            `;
            listadoProductos.appendChild(contenedorProducto);
        };
        asignarBotonesAgregar(); // Asigna nuevamente los botones de agregar al carrito
    };

    buscadorTop.addEventListener("submit", buscadorTopSubmit); 
    // Lo que se ejecuta al enviar el formulario de búsqueda
    function buscadorTopSubmit(e) {
        e.preventDefault();
        listadoProductos.scrollIntoView(); // Scrollea hasta los productos
        let busqueda = buscadorTop.children[0].value;
        
        // Filtra la búsqueda en las categorías y los títulos de productos
        const result = productos.filter(
            producto =>
            producto.categoria.toLowerCase().includes(busqueda.toLowerCase()) ||
            producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );

        // Si no hay resultados, muestra mensaje de error
        // Si hay, muestra el título de la búsqueda
        listadoProductos.innerHTML = "";
        if(result.length === 0 || busqueda === "" || busqueda === " ") {
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
        
        // Imprime los productos de esa categoría abajo del título
        for (const producto of result) {
            let contenedorProducto = document.createElement("div");
            contenedorProducto.className = "producto";
            contenedorProducto.id = producto.sku;
            contenedorProducto.innerHTML = `
            <div class="producto__img">
                <img src="${producto.imagen}">
            </div>
            <h4 class="producto__titulo">${producto.titulo.toUpperCase()}</h4>
            <h4 class="producto__precio">$<span>${producto.precio.toLocaleFixed(2)}</span></h4>
            <div class="producto__agregar">AGREGAR AL CARRITO</div>
            <div class="producto__sinStock">SIN STOCK</div>
            <div class="producto__whatsapp">
                <i class="fab fa-whatsapp"></i>
                <p>CONSULTAR POR WHATSAPP</p>
            </div>
            `;
            listadoProductos.appendChild(contenedorProducto);
        };
    
        asignarBotonVerTodos(); // Se asigna el botón de Ver todos los productos
        asignarBotonesAgregar(); // Se asignan los botones de Agregar al carrito
        buscadorTop.children[0].value = ""; // Se vacía el buscador
    }

    // Esta es la función para asignar el botón de Ver todos
    function asignarBotonVerTodos() {
        let verTodos = document.querySelector(".verTodos");
        verTodos.addEventListener("click", verTodosClicked);
    };

    // Se imprimen todos los productos del array al hacer clic en Ver todos
    function verTodosClicked() {
        listadoProductos.scrollIntoView();

        imprimirProductos(productos);
        asignarBotonesAgregar();
        
        botonesCategorias.forEach((botonCategoria) => {
          botonCategoria.children[0].classList.remove("active");
        });
    };

}

const tituloCategorias = document.querySelector("#listadoCategorias .titulo");
const todasCategorias = document.querySelectorAll("#listadoCategorias .cat");
tituloCategorias.addEventListener('click', abrirCategorias);

function abrirCategorias() {
    for(categoria of todasCategorias) {
        categoria.style.maxHeight = categoria.style.maxHeight === '100px' ? '0' : '100px';
    }
}
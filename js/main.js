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
    
    //Imprime los productos en la home
    function imprimirProductos() {
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
    }

    imprimirProductos();
    asignarBotonesAgregar(); // Asigna los botones de agregar al carrito una vez que se agregan los productos en la home

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

    // Esta es la función para asignar los botones de Agregar al carrito
    function asignarBotonesAgregar() {
      botonesAgregar = document.querySelectorAll('.producto__agregar');
      botonesAgregar.forEach((botonAgregar) => {
        botonAgregar.addEventListener('click', botonAgregarClicked);
      });
    }

    let carritoAgregados = []; // Se declara el array de productos en Carrito

    // Se ejecuta cuando se hace clic sobre un botón de Agregar al carrito
    function botonAgregarClicked(e) {
        productoAgregadoPadre = e.target.closest('.producto'); // Busca el div del producto
        productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id); // y lo busca por SKU en el array

        estaEnCarrito = carritoAgregados.find((buscarSiEsta) => buscarSiEsta.sku == productoAgregadoPadre.id); // Acá lo busca en el carrito

        // Si está en el carrito, solo aumenta la cantidad
        if (estaEnCarrito) {
            estaEnCarrito.cantidad++;
        // Si no está, lo agrega
        } else {
            productoAgregado.cantidad = 1;
            carritoAgregados.push(productoAgregado);
        }
        agregarProductosEnCarrito(); // Imprime los productos en el carrito
        toastifyAgregado(); // Dispara el toast
        botonesMasMenos(); // Asigna los botones de + y -
        actualizarNumerito(); // Actualiza el numerito del carrito
        botonesBorrarCarrito(); // Asigna los botones de borrar producto
        actualizarPrecioTotal(); // Actualiza el precio total
        localStorage.setItem("productos", JSON.stringify(carritoAgregados)); // Guarda el array del carrito en el LS

        // Si el carrito está abierto, no se cierra al agregar un producto
        if(carrito.classList.contains("cerrado") && botonCarrito.classList.contains("cerrado")) {
            cerrarCarritoClick();
        }
    }

    // Función que imprime los productos en el carrito
    function agregarProductosEnCarrito() {
        carritoProductos.innerHTML = "";
        carritoAgregados.forEach((productoAgregado) => {
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
                <div class="carritoPrecio">$${(productoAgregado.precio * productoAgregado.cantidad).toLocaleFixed(2)}</div>
                <div class="carritoBorrar"><i class="fas fa-trash-alt"></i></div>
            `;
            carritoProductos.appendChild(nuevoProducto);
      });
    };

    const botonCarrito = document.getElementById("botonCarrito");
    const cerrarCarrito = document.getElementById("cerrarCarrito");
    const carrito = document.getElementById("carrito");

    // Eventos de abrir y cerrar el carrito
    botonCarrito.addEventListener('click', botonCarritoClick);
    cerrarCarrito.addEventListener('click', cerrarCarritoClick);

    function botonCarritoClick() {
        carrito.classList.remove("cerrado");
        botonCarrito.classList.add("cerrado");
    }

    function cerrarCarritoClick() {
        carrito.classList.add("cerrado");
        botonCarrito.classList.remove("cerrado");
    }

    const numeritoContenedor = document.getElementById("numerito");
    numeritoContenedor.textContent = numerito;

    // Actualiza el numerito del carrito con un efecto CSS 
    function actualizarNumerito() {
        numeritoContenedor.classList.remove("shake");
        numeritoContenedor.offsetWidth;
        numeritoContenedor.classList.add("shake");

        numerito = carritoAgregados.reduce((suma, productoAgregado) => suma + parseInt(productoAgregado.cantidad), 0);
        numeritoContenedor.textContent = numerito;
        localStorage.setItem("numerito", JSON.stringify(numerito));
    };

    let botonesMas;
    let botonesMenos;

    // Funciones de los botones + y -
    function botonesMasMenos() {
        botonesMas = document.querySelectorAll('.mas');
        botonesMenos = document.querySelectorAll('.menos');

        botonesMas.forEach((botonMas) => {
            botonMas.addEventListener('click', botonMasClicked);
        });
    
        botonesMenos.forEach((botonMenos) => {
            botonMenos.addEventListener('click', botonMenosClicked);
        });
    };

    // Evento del botón +
    function botonMasClicked(event) {
        productoAgregadoPadre = event.target.closest('.nuevoProducto'); // Busca el div del producto
        productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id); // y lo busca en el array del carrito
      
        productoAgregado.cantidad++; // Le suma uno
        actualizarNumerito();
        agregarProductosEnCarrito();
        botonesMasMenos();
        botonesBorrarCarrito();
        actualizarPrecioTotal();
        localStorage.setItem("productos", JSON.stringify(carritoAgregados));
    }

    // Evento del botón -
    function botonMenosClicked(event) {
        productoAgregadoPadre = event.target.closest('.nuevoProducto');
        productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
      
        if(productoAgregado.cantidad > 1) {
            productoAgregado.cantidad--; // Le resta uno
            actualizarNumerito();
            agregarProductosEnCarrito();
            botonesMasMenos();
            botonesBorrarCarrito();
            actualizarPrecioTotal();
            localStorage.setItem("productos", JSON.stringify(carritoAgregados));
        }
    }

    let precioTotal = 0; // Se declara el precio total inicial
    const carritoTotal = document.getElementById("carritoTotal");
    carritoTotal.textContent = precioTotal.toLocaleFixed(2);

    // Función de actualizar el precio total en el Carrito
    function actualizarPrecioTotal() {
        precioTotal = carritoAgregados.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
        carritoTotal.textContent = precioTotal.toLocaleFixed(2);
        localStorage.setItem("precioTotal", JSON.stringify(precioTotal));
    };

    // Las funciones de los botones de borrar productos en el Carrito
    let botonesBorrar;
    function botonesBorrarCarrito() {
        botonesBorrar = document.querySelectorAll('.carritoBorrar i');

        botonesBorrar.forEach((botonBorrar) => {
            botonBorrar.addEventListener('click', botonBorrarClicked);
        });
    };

    function botonBorrarClicked(event) {
        productoAgregadoPadre = event.target.closest('.nuevoProducto');
        productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
        const index = carritoAgregados.indexOf(productoAgregado);
        if (index > -1) {
            carritoAgregados.splice(index, 1);
        }
        actualizarNumerito();
        agregarProductosEnCarrito();
        botonesMasMenos();
        botonesBorrarCarrito();
        actualizarPrecioTotal();
        siEstaVacio();
        localStorage.setItem("productos", JSON.stringify(carritoAgregados));
    }

    // Ocultar el div de Carrito si está vacío
    function siEstaVacio() {
        if(numerito == 0 || numerito == null) {
            carrito.classList.add("cerrado");
            botonCarrito.classList.add("cerrado");
        } else {
            if(carrito.classList.contains("cerrado")){
              botonCarrito.classList.remove("cerrado");
            }
        }
    }

    // Funciones para vaciar el carrito, con Sweet Alert incorporado
    const botonVaciar = document.getElementById("vaciarCarrito");
    botonVaciar.addEventListener('click', popUpVaciarCarrito);
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
        carritoAgregados = [];
        actualizarPrecioTotal();
        actualizarNumerito();
        agregarProductosEnCarrito();
        siEstaVacio();
        localStorage.setItem("productos", JSON.stringify(carritoAgregados));
    }

    // Obtiene el numerito del LS
    // Si es mayor a 0, declara el array de Carrito con los productos que existen en el LS
    numerito = localStorage.getItem("numerito");
    if(numerito > 0) {
        carritoAgregados = localStorage.getItem("productos");
        carritoAgregados = JSON.parse(carritoAgregados);
        console.log(carritoAgregados);

        actualizarNumerito();
        agregarProductosEnCarrito();
        botonesMasMenos();
        botonesBorrarCarrito();
        actualizarPrecioTotal();
        siEstaVacio();
    // Si no, lo declara vacío
    } else {
        carritoAgregados = [];
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
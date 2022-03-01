async function getProductos() {
  let res = await fetch('./js/productos.json')

  productosJSON = await res.json();
  return productosJSON;
}

Number.prototype.toLocaleFixed = function(n) {
return this.toLocaleString(undefined, {
  minimumFractionDigits: n,
  maximumFractionDigits: n
});
};

const listadoProductos = document.getElementById("listadoProductos");
function agregarProductosEnHome(productos) {  
  listadoProductos.innerHTML = "";
  for (const producto of productos) {
    if(producto.inCat == true) {
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
    }
  }
  asignarBotonesAgregar();
}

async function getCategorias() {
let res = await fetch('./js/categorias.json')

categoriasJSON = await res.json();
return categoriasJSON;
}

let categorias = getCategorias();
categorias.then((categoriasJSON) => agregarCategoriasEnHome(categoriasJSON));

const listadoCategorias = document.getElementById("listadoCategorias");
function agregarCategoriasEnHome(categorias) {
  for (const categoria of categorias) {
    let contenedorCategoria = document.createElement("li");
    contenedorCategoria.className = "cat";
    contenedorCategoria.id = "cat" + categoria.id;
    contenedorCategoria.innerHTML = `
      <a>${categoria.nombre}</a>
    `;
    listadoCategorias.appendChild(contenedorCategoria);
  };

  const botonesCategoria = document.querySelectorAll(".cat");
  botonesCategoria.forEach((botonCategoria) => {
    botonCategoria.addEventListener('click', botonCategoriaClicked);
  });
}

function botonCategoriaClicked(event) {
  event.preventDefault();
  productos.forEach((producto) => {
      producto.inCat = false;
      if(producto.categoria == event.target.textContent) {
          producto.inCat = true;
      } else if(event.target.textContent == "Todos los productos") {
        producto.inCat = true;
      }
  });
  agregarProductosEnHome();
  asignarBotonesAgregar();
  noTieneStock();
  listadoProductos.scrollIntoView();

  botonesCategoria.forEach((botonCategoria) => {
    botonCategoria.children[0].classList.remove("active");
  });
  event.target.classList.add("active");

  
  productoInCat = productos.find((buscarProducto) => buscarProducto.inCat == true);
  if(productoInCat == undefined) {
    let noHayCoincidencias = document.createElement("div");
    noHayCoincidencias.className = "noHayCoincidencias";
    noHayCoincidencias.innerHTML = `
      <h4>No hay productos que coincidan con tu búsqueda.</h4>
      <a class="verTodos">Ver todos</a>
    `;
    listadoProductos.appendChild(noHayCoincidencias);
    asignarBotonVerTodos();
  } else {
    let nombreCategoria = document.createElement("h3");
    nombreCategoria.className = "nombreCategoria";
    nombreCategoria.innerHTML = `
      ${event.target.textContent}
    `;
    listadoProductos.prepend(nombreCategoria);
  }
};

function asignarBotonVerTodos() {
  let verTodos = document.querySelector(".verTodos");
  verTodos.addEventListener("click", verTodosClicked);
};

function verTodosClicked() {
  productos.forEach((producto) => {
      producto.inCat = true;
  });
  agregarProductosEnHome();
  asignarBotonesAgregar();
  noTieneStock();
  listadoProductos.scrollIntoView();
  
  botonesCategoria.forEach((botonCategoria) => {
    botonCategoria.children[0].classList.remove("active");
  });
};

let buscadorTop = document.querySelector("#buscadorTop");
buscadorTop.addEventListener("submit", buscadorTopSubmit);

function buscadorTopSubmit(event) {
  event.preventDefault();
  let busqueda = buscadorTop.children[0].value;
  
  productos.forEach((producto) => {
    producto.inCat = false;

    if (
      (
        producto.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
      )
      && busqueda != ""
    ) {
      producto.inCat = true;
    }
  });
  agregarProductosEnHome();
  asignarBotonesAgregar();
  noTieneStock();

  productoInCat = productos.find((buscarProducto) => buscarProducto.inCat == true);
  if(productoInCat == undefined) {
    let noHayCoincidencias = document.createElement("div");
    noHayCoincidencias.className = "noHayCoincidencias";
    noHayCoincidencias.innerHTML = `
      <h4>No hay productos que coincidan con "${busqueda.toLowerCase()}"</h4>
      <a class="verTodos">Ver todos</a>
    `;
    listadoProductos.appendChild(noHayCoincidencias);
    asignarBotonVerTodos();
  } else {
    let nombreCategoria = document.createElement("h3");
    nombreCategoria.className = "nombreCategoria";
    nombreCategoria.innerHTML = `
    Resultados de búsqueda para "${busqueda.toLowerCase()}"
    `;
    listadoProductos.prepend(nombreCategoria);
  };

  botonesCategoria.forEach((botonCategoria) => {
    botonCategoria.children[0].classList.remove("active");
  });

  listadoProductos.scrollIntoView();
  buscadorTop.children[0].value = "";
  
}

//*******************************************************/
// DECLARACIÓN DE LOS ELEMENTOS PARA ABRIR Y CERRAR CARRITO
const botonCarrito = document.getElementById("botonCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carrito = document.getElementById("carrito");

// EVENTOS DE ABRIR Y CERRAR CARRITO
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

const carritoProductos = document.getElementById("carritoProductos");

function agregarProductosEnCarrito() {
  carritoProductos.innerHTML = "";

  productos.forEach((productoAgregado) => {
    if(productoAgregado.agregado == true) {
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
    };
  });
};

function asignarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll('.producto__agregar');
  botonesAgregar.forEach((botonAgregar) => {
    botonAgregar.addEventListener('click', botonAgregarClicked);
  });
}
asignarBotonesAgregar();

const aumentarCantidad = () => { productoAgregado.cantidad++ };
const reducirCantidad = () => { productoAgregado.cantidad-- };
const aumentarStock = () => { productoAgregado.stock++ };
const reducirStock = () => { productoAgregado.stock-- };

function noTieneStock() {
  productos.forEach((productoAgregado) => {
    if(productoAgregado.stock == 0 && productoAgregado.inCat == true){
      productoSinStock = document.getElementById(productoAgregado.sku).children;
      productoSinStock[3].style.display = "none"; 
      productoSinStock[4].style.display = "block"; 
    };
  });
};

function tieneStock() {
  productos.forEach((productoAgregado) => {
    if(productoAgregado.stock > 0 && productoAgregado.inCat == true){
      productoSinStock = document.getElementById(productoAgregado.sku).children;
      productoSinStock[3].style.display = "block"; 
      productoSinStock[4].style.display = "none"; 
    };
  });
};

let botonesMas;
let botonesMenos;

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

let botonesBorrar;

function botonesBorrarCarrito() {
  botonesBorrar = document.querySelectorAll('.carritoBorrar i');

  botonesBorrar.forEach((botonBorrar) => {
    botonBorrar.addEventListener('click', botonBorrarClicked);
  });
};

const numeritoContenedor = document.getElementById("numerito");
numeritoContenedor.textContent = numerito;

function actualizarNumerito() {
  numeritoContenedor.classList.remove("shake");
  numeritoContenedor.offsetWidth;
  numeritoContenedor.classList.add("shake");

  numerito = productos.reduce((suma, productoAgregado) => suma + productoAgregado.cantidad, 0);
  numeritoContenedor.textContent = numerito;

  localStorage.setItem("numerito", numerito);
};

let precioTotal = 0;
const carritoTotal = document.getElementById("carritoTotal");
carritoTotal.textContent = precioTotal.toLocaleFixed(2);

function actualizarPrecioTotal() {
  precioTotal = productos.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
  carritoTotal.textContent = precioTotal.toLocaleFixed(2);
  
  localStorage.setItem("precioTotal", precioTotal);
};

function actualizarCantidad() {
  cantidadActualizar = document.querySelector("#agregado" + productoAgregado.sku + "  .carritoCantidad .cant");
  cantidadActualizar.textContent = productoAgregado.cantidad;
};

function botonAgregarClicked(event) {
    productoAgregadoPadre = event.target.closest('.producto');
    productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id);

    productoAgregado.agregado = productoAgregado.agregado || true;

    aumentarCantidad();
    reducirStock();
    noTieneStock();
    actualizarPrecioTotal();
    actualizarNumerito();
    agregarProductosEnCarrito();
    botonesMasMenos();
    botonesBorrarCarrito();
    siEstaVacio();
    localStorage.setItem("productos", JSON.stringify(productos));

    Toastify({
      text: "Producto agregado",
      duration: 2000,
      close: true,
      className: "toastifyToast",
      onClick: () => {botonCarritoClick()}
      }).showToast();
};

function botonMasClicked(event) {
  productoAgregadoPadre = event.target.closest('.nuevoProducto');
  productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);

  if(productoAgregado.stock > 0) {
    aumentarCantidad();
    reducirStock();
    actualizarPrecioTotal();
    actualizarNumerito();
    agregarProductosEnCarrito();
    noTieneStock();
    tieneStock();
    botonesMasMenos();
    botonesBorrarCarrito();
    siEstaVacio();
    localStorage.setItem("productos", JSON.stringify(productos));
  }
}

function botonMenosClicked(event) {
  productoAgregadoPadre = event.target.closest('.nuevoProducto');
  productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
  if(productoAgregado.cantidad > 1){
    reducirCantidad();
    aumentarStock();
    actualizarPrecioTotal();
    actualizarNumerito();
    agregarProductosEnCarrito();
    noTieneStock();
    tieneStock();
    botonesMasMenos();
    botonesBorrarCarrito();
    siEstaVacio();
    localStorage.setItem("productos", JSON.stringify(productos));
  }
}

function botonBorrarClicked(event) {
  productoAgregadoPadre = event.target.closest('.nuevoProducto');
  productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);

  productoAgregado.stock = productoAgregado.stock + productoAgregado.cantidad;
  productoAgregado.cantidad = 0;
  productoAgregado.agregado = false;
  actualizarPrecioTotal();
  actualizarNumerito();
  agregarProductosEnCarrito();
  noTieneStock();
  tieneStock();
  botonesMasMenos();
  botonesBorrarCarrito();
  siEstaVacio();
  localStorage.setItem("productos", JSON.stringify(productos));
}

let botonVaciar = document.getElementById("vaciarCarrito");
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
  productos.forEach((producto) => {
    producto.stock = producto.stock + producto.cantidad;
    producto.cantidad = 0;
    producto.agregado = false;
  })
  actualizarPrecioTotal();
  actualizarNumerito();
  tieneStock();
  noTieneStock();
  agregarProductosEnCarrito();
  siEstaVacio();
  localStorage.setItem("productos", JSON.stringify(productos));
}

let productos = [];

numerito = localStorage.getItem("numerito");
if(numerito > 0) {
  productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);
  productos.forEach((producto) => {
    producto.inCat = true;
  });

  agregarProductosEnHome(productos);
  agregarProductosEnCarrito();
  actualizarNumerito();
  actualizarPrecioTotal();
  tieneStock();
  noTieneStock();
  botonesMasMenos();
  botonesBorrarCarrito();
  siEstaVacio();
} else {
  productos = getProductos();
  productos
    .then((productosJSON) => 
      agregarProductosEnHome(productosJSON)
    )
    .then(() => 
      productos = [...productosJSON]
    );
};

siEstaVacio();
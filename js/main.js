// DECLARACIÓN DE TODOS LOS PRODUCTOS
let productos = [
  {
    sku: 1,
    titulo: 'Producto de ejemplo 1',
    imagen: 'img/fotoproducto.png',
    precio: 100,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 2,
    titulo: 'Producto de ejemplo 2',
    imagen: 'img/fotoproducto.png',
    precio: 200,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 3,
    titulo: 'Producto de ejemplo 3',
    imagen: 'img/fotoproducto.png',
    precio: 300,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 4,
    titulo: 'Producto de ejemplo 4',
    imagen: 'img/fotoproducto.png',
    precio: 400,
    stock: 3,
    cantidad: 0,
    agregado: false
  }
];

const listadoProductos = document.getElementById("listadoProductos");
for (const producto of productos) {
  let contenedorProducto = document.createElement("div");
  contenedorProducto.className = "producto";
  contenedorProducto.id = producto.sku;
  contenedorProducto.innerHTML = `
  <img class="producto__img" src="${producto.imagen}">
  <h4 class="producto__titulo">${producto.titulo.toUpperCase()}</h4>
  <h4 class="producto__precio">$<span>${producto.precio.toFixed(2)}</span></h4>
  <div class="producto__agregar">AGREGAR AL CARRITO</div>
  <div class="producto__sinStock">SIN STOCK</div>
  <div class="producto__whatsapp">
    <i class="fab fa-whatsapp"></i>
    <p>CONSULTAR POR WHATSAPP</p>
  </div>
  `;
  listadoProductos.appendChild(contenedorProducto);
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
          <img class="carritoImagen" src="${productoAgregado.imagen}">
          <div class="carritoTitulo">${productoAgregado.titulo}</div>
          <div class="carritoCantidad">
            <div class="menos">-</div>
            <div class="cant">${productoAgregado.cantidad}</div>
            <div class="mas">+</div>
          </div>
          <div class="carritoPrecio">$${(productoAgregado.precio * productoAgregado.cantidad).toFixed(2)}</div>
          <div class="carritoBorrar"><i class="fas fa-trash-alt"></i></div>
        `;
        carritoProductos.appendChild(nuevoProducto);
    };
  });
};

const botonesAgregar = document.querySelectorAll('.producto__agregar');
botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener('click', botonAgregarClicked);
});

const aumentarCantidad = () => { productoAgregado.cantidad = productoAgregado.cantidad + 1 };
const reducirCantidad = () => { productoAgregado.cantidad = productoAgregado.cantidad - 1 };
const aumentarStock = () => { productoAgregado.stock = productoAgregado.stock + 1 };
const reducirStock = () => { productoAgregado.stock = productoAgregado.stock - 1 };

function noTieneStock() {
  productos.forEach((productoAgregado) => {
    if(productoAgregado.stock == 0){
      productoSinStock = document.getElementById(productoAgregado.sku).children;
      productoSinStock[3].style.display = "none"; 
      productoSinStock[4].style.display = "block"; 
    };
  });
};

function tieneStock() {
  productos.forEach((productoAgregado) => {
    if(productoAgregado.stock > 0){
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
let numerito = 0;
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
carritoTotal.textContent = precioTotal.toFixed(2);

function actualizarPrecioTotal() {
  precioTotal = productos.reduce((suma, productoAgregado) => suma + (productoAgregado.precio * productoAgregado.cantidad), 0);
  carritoTotal.textContent = precioTotal.toFixed(2);
  
  localStorage.setItem("precioTotal", precioTotal);
};

function actualizarCantidad() {
  cantidadActualizar = document.querySelector("#agregado" + productoAgregado.sku + "  .carritoCantidad .cant");
  cantidadActualizar.textContent = productoAgregado.cantidad;
};

function botonAgregarClicked(event) {
    productoAgregadoPadre = event.target.closest('.producto');
    productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id);

    if(productoAgregado.agregado == false) {
        productoAgregado.agregado = true;
    }

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
botonVaciar.addEventListener('click', botonVaciarClicked);

function botonVaciarClicked() {
  for (const producto of productos) {
    producto.stock = producto.stock + producto.cantidad;
    producto.cantidad = 0;
    producto.agregado = false;
  }
  actualizarPrecioTotal();
  actualizarNumerito();
  tieneStock();
  noTieneStock();
  agregarProductosEnCarrito();
  siEstaVacio();
  localStorage.setItem("productos", JSON.stringify(productos));
}

numerito = localStorage.getItem("numerito");
if(numerito > 0) {
  productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);
  agregarProductosEnCarrito();
  actualizarNumerito();
  actualizarPrecioTotal();
  tieneStock();
  noTieneStock();
  botonesMasMenos();
  botonesBorrarCarrito();
  siEstaVacio();
};

siEstaVacio();
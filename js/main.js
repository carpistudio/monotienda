// DECLARAR TODOS LOS PRODUCTOS CON SUS DATOS

const productos = [
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
  },
  {
    sku: 5,
    titulo: 'Producto de ejemplo 5',
    imagen: 'img/fotoproducto.png',
    precio: 50,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 6,
    titulo: 'Producto de ejemplo 6',
    imagen: 'img/fotoproducto.png',
    precio: 150,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 7,
    titulo: 'Producto de ejemplo 7',
    imagen: 'img/fotoproducto.png',
    precio: 250,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 8,
    titulo: 'Producto de ejemplo 8',
    imagen: 'img/fotoproducto.png',
    precio: 350,
    stock: 3,
    cantidad: 0,
    agregado: false
  }
];

// AGREGAR TODOS LOS PRODUCTOS EN EL DOCUMENTO
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


// ABRIR EL CARRITO AL PRESIONAR LA X
let botonCarrito = document.getElementById("botonCarrito");
let carrito = document.getElementById("carrito");
let cerrarCarrito = document.getElementById("cerrarCarrito");
let numerito = document.getElementById("numerito");
let numeritoInicial = 0;

botonCarrito.addEventListener('click', botonCarritoClick);
function botonCarritoClick() {
  carrito.classList.remove("cerrado");
  botonCarrito.classList.add("cerrado");
};

cerrarCarrito.addEventListener('click', cerrarCarritoClick);
function cerrarCarritoClick() {
  carrito.classList.add("cerrado");
  botonCarrito.classList.remove("cerrado");
};

// SELECCIONAR TODOS LOS BOTONES DE AGREGAR AL CARRITO
const botonesAgregar = document.querySelectorAll('.producto__agregar');

// EVENTO DE CLICK PARA AGREGAR AL CARRITO
botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener('click', botonAgregarClicked);
});

// DECLARACIÓN DEL PRECIO TOTAL PARA QUE INICIE EN CERO
let precioTotal = 0;

// FUNCIÓN A EJECUTAR CUANDO SE HAGA CLIC EN AGREGAR AL CARRITO
function botonAgregarClicked(event) {
  //BUSCAR EL PRODUCTO EN EL ARRAY SEGÚN EL ID
  const productoAgregadoPadre = event.target.closest('.producto');
  const productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id);

  // AGREGAR EL PRODUCTO AL CARRITO
  const carritoProductos = document.getElementById("carritoProductos");

  function algunasAcciones() {
    // ALGUNAS ACCIONES SOBRE EL STOCK Y LA CANTIDAD
    productoAgregado.stock = productoAgregado.stock - 1;
    productoAgregado.agregado = true;
    productoAgregado.cantidad = productoAgregado.cantidad + 1;

    // ALGUNAS ACCIONES SOBRE EL NUMERITO DEL CARRITO
    numerito.classList.remove("shake")
    numerito.offsetWidth
    numerito.classList.add("shake")
    numeritoInicial = numeritoInicial + 1;
    numerito.textContent = numeritoInicial;
    // ALGUNAS ACCIONES SOBRE EL PRECIO TOTAL
    precioTotal = precioTotal + productoAgregado.precio;
    carritoTotal.textContent = precioTotal.toFixed(2);
  }

  if(productoAgregado.agregado == false) {
    algunasAcciones();
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
      <div class="carritoPrecio">$${productoAgregado.precio.toFixed(2)}</div>
    `;
    carritoProductos.appendChild(nuevoProducto);
  }
  else {
    algunasAcciones();    
    let cantidadProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoCantidad .cant");
    cantidadProducto.textContent = productoAgregado.cantidad;

    let precioProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoPrecio");
    precioProducto.textContent = "$" + (productoAgregado.precio * productoAgregado.cantidad).toFixed(2);
  }

  // REEMPLAZAR EL BOTÓN DE AGREGAR AL CARRITO POR SIN STOCK SI QUEDA EN 0
  if(productoAgregado.stock == 0){
    const productoSinStock = productoAgregadoPadre.children;
    productoSinStock[3].style.display = "none"; 
    productoSinStock[4].style.display = "block"; 
  }

  // MOSTRAR EL DIV DE CARRITO
  if (carrito.classList.contains("cerrado")) {
    botonCarrito.classList.remove("cerrado");
  }

  
  // DEFINIR TODOS LOS BOTONES DE MAS Y MENOS QUE VAYAN APARECIENDO
  window.botonesMas = document.querySelectorAll('.mas');
  window.botonesMenos = document.querySelectorAll('.menos');

  // EVENTO DE CLICK PARA LOS BOTONES DE MÁS
  botonesMas.forEach((botonMas) => {
    botonMas.addEventListener('click', botonMasClicked);
  });

  // EVENTO DE CLICK PARA LOS BOTONES DE MENOS
  botonesMenos.forEach((botonMenos) => {
    botonMenos.addEventListener('click', botonMenosClicked);
  });
  
}


// *************** BOTONES MAS Y MENOS  ***************

function botonMasClicked(event) {
  //BUSCAR EL PRODUCTO EN EL ARRAY SEGÚN EL ID
  const productoAgregadoPadre = event.target.closest('.nuevoProducto');
  const productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);

  if(productoAgregado.stock > 0) {

    productoAgregado.stock = productoAgregado.stock - 1;
    productoAgregado.agregado = true;
    productoAgregado.cantidad = productoAgregado.cantidad + 1;

    let cantidadProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoCantidad .cant");
    cantidadProducto.textContent = productoAgregado.cantidad;

    let precioProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoPrecio");
    precioProducto.textContent = "$" + (productoAgregado.precio * productoAgregado.cantidad).toFixed(2);
    
    precioTotal = precioTotal + productoAgregado.precio;
    carritoTotal.textContent = precioTotal.toFixed(2);

    numeritoInicial = numeritoInicial + 1;
    numerito.textContent = numeritoInicial;

  }

  // REEMPLAZAR EL BOTÓN DE AGREGAR AL CARRITO POR SIN STOCK SI QUEDA EN 0
  if(productoAgregado.stock == 0){
    const productoSinStock = document.getElementById(productoAgregado.sku).children;
    productoSinStock[3].style.display = "none"; 
    productoSinStock[4].style.display = "block"; 
  }
}

function botonMenosClicked() {
  //BUSCAR EL PRODUCTO EN EL ARRAY SEGÚN EL ID
  const productoAgregadoPadre = event.target.closest('.nuevoProducto');
  const productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);

  if(productoAgregado.cantidad > 1) {

    productoAgregado.stock = productoAgregado.stock + 1;
    productoAgregado.agregado = true;
    productoAgregado.cantidad = productoAgregado.cantidad - 1;

    let cantidadProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoCantidad .cant");
    cantidadProducto.textContent = productoAgregado.cantidad;

    let precioProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoPrecio");
    precioProducto.textContent = "$" + (productoAgregado.precio * productoAgregado.cantidad).toFixed(2);
    
    precioTotal = precioTotal - productoAgregado.precio;
    carritoTotal.textContent = precioTotal.toFixed(2);

    numeritoInicial = numeritoInicial - 1;
    numerito.textContent = numeritoInicial;

  }

  // REEMPLAZAR EL BOTÓN DE AGREGAR AL CARRITO POR SIN STOCK SI QUEDA EN 0
  if(productoAgregado.stock > 0){
    const productoSinStock = document.getElementById(productoAgregado.sku).children;
    productoSinStock[3].style.display = "block"; 
    productoSinStock[4].style.display = "none"; 
  }
}

// *************** COMPRAR POR WHATSAPP ***************

// SELECCIONAR TODOS LOS BOTONES DE COMPRAR POR WHATSAPP
const botonesWhatsApp = document.querySelectorAll('.producto__whatsapp');

// EVENTO DE CLICK PARA AGREGAR AL CARRITO
botonesWhatsApp.forEach((botonWhatsApp) => {
  botonWhatsApp.addEventListener('click', botonWhatsAppClicked);
});

// FUNCIÓN A EJECUTAR CUANDO SE HAGA CLIC EN COMPRAR POR WHATSAPP
function botonWhatsAppClicked(event) {
  //BUSCAR EL PRODUCTO EN EL ARRAY SEGÚN EL ID
  const productoAgregadoID = event.target.closest('.producto').id;
  const productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoID);

  if(productoAgregado.stock > 0){
    window.open(
      "https://api.whatsapp.com/send?phone=++5491157667000&text=Hola,%20quiero%20comprar%20el%20producto%20*" + productoAgregado.titulo + "*,%20que%20tiene%20un%20precio%20de%20*$" + productoAgregado.precio.toFixed(2) + "*.%20Muchas%20gracias!",
      "_blank" // <- This is what makes it open in a new window.
    );
  } 
  else {
    window.open(
      "https://api.whatsapp.com/send?phone=++5491157667000&text=Hola,%20quiero%20consultar%20por%20el%20producto%20*" + productoAgregado.titulo + "*.%20En%20la%20tienda%20figura%20como%20*agotado*%20.%20Muchas%20gracias!",
      "_blank" // <- This is what makes it open in a new window.
    );
  }
  
}
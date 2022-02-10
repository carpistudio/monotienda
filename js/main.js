// DECLARAR TODOS LOS PRODUCTOS CON SUS DATOS

const productos = [
  {
    sku: 1,
    titulo: 'Producto de ejemplo 1',
    imagen: '../img/fotoproducto.png',
    precio: 100,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 2,
    titulo: 'Producto de ejemplo 2',
    imagen: '../img/fotoproducto.png',
    precio: 200,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 3,
    titulo: 'Producto de ejemplo 3',
    imagen: '../img/fotoproducto.png',
    precio: 300,
    stock: 3,
    cantidad: 0,
    agregado: false
  },
  {
    sku: 4,
    titulo: 'Producto de ejemplo 4',
    imagen: '../img/fotoproducto.png',
    precio: 400,
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
  <div class="producto__whatsapp">
    <i class="fab fa-whatsapp"></i>
    <p>COMPRAR POR WHATSAPP</p>
  </div>
  `;
  listadoProductos.appendChild(contenedorProducto);
}

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
  const productoAgregadoID = event.target.closest('.producto').id;
  const productoAgregado = productos.find(function(buscarProducto) {
    return buscarProducto.sku == productoAgregadoID;
  });

  if(productoAgregado.stock > 0){
    // AGREGAR EL PRODUCTO AL CARRITO
    const carritoProductos = document.getElementById("carritoProductos");

    function algunasAcciones() {
      // ALGUNAS ACCIONES SOBRE EL STOCK Y LA CANTIDAD
      productoAgregado.stock = productoAgregado.stock - 1;
      productoAgregado.agregado = true;
      productoAgregado.cantidad = productoAgregado.cantidad + 1;
      // ALGUNAS ACCIONES SOBRE EL PRECIO TOTAL
      precioTotal = precioTotal + productoAgregado.precio;
      console.log(precioTotal);
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
        <div class="carritoCantidad">${productoAgregado.cantidad}</div>
        <div class="carritoPrecio">$${productoAgregado.precio.toFixed(2)}</div>
      `;
      carritoProductos.appendChild(nuevoProducto);
    }
    else {
      algunasAcciones();
      let cantidadProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoCantidad");
      cantidadProducto.textContent = productoAgregado.cantidad;

      let precioProducto = document.querySelector("#agregado" + productoAgregado.sku + " .carritoPrecio");
      precioProducto.textContent = "$" + (productoAgregado.precio * productoAgregado.cantidad).toFixed(2);
    }
  } 
  else {
    document.getElementById("noQuedaStockBoton").click();
  }

  carrito.style.display = 'flex'; 
  
}

// CERRAR EL CARRITO AL PRESIONAR LA X
carritoCerrar.addEventListener('click', carritoCerrado);
function carritoCerrado() {
  carrito.style.display = 'none'; 
}

console.log(productos);
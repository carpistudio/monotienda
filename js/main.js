// DEFINICIÓN DE VARIABLES PARA EL USO DEL HTML
const carrito = document.getElementById('carrito');
const botonesAgregar = document.querySelectorAll('.producto__agregar');
const carritoTotal = document.getElementById("carritoTotal");
const carritoProductos = document.getElementById("carritoProductos");
const carritoCerrar = document.getElementById("carritoCerrar");

// DEFINICIÓN DEL PRECIO TOTAL INICIAL PARA COMENZAR A CONTAR
let precioTotal = 0;

// AGREGAR EL EVENTO DE CLIC A TODOS LOS BOTONES DE AGREGAR AL CARRITO
botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener('click', botonAgregarClicked);
});

// CREACIÓN DEL ARRAY DE PRODUCTOS PARA VER EN EL CARRITO
const productos = [];

// SE EJECUTA AL HACER CLIC EN ALGÚN BOTÓN DE AGREGAR AL CARRITO
function botonAgregarClicked(event) {
  const boton = event.target;
  const producto = boton.closest('.producto');
  
  const productoTitulo = producto.querySelector('.producto__titulo').textContent;
  const productoPrecio = parseInt(producto.querySelector('.producto__precio span').textContent);
  const productoImagen = producto.querySelector('.producto__img').src;

  class Producto {
    constructor(productoTitulo, productoPrecio, productoImagen) {
      this.titulo = productoTitulo;
      this.precio = productoPrecio;
      this.imagen = productoImagen;
    }
  }

  let nuevoProducto = new Producto(productoTitulo, productoPrecio, productoImagen);
  productos.push(nuevoProducto);

  carrito.style.display = 'flex'; 

  carritoProductos.innerHTML = "";
  for (cadaProducto in productos) {
    carritoProductos.innerHTML += `
      <div class="nuevoProducto">
        <img class="carritoImagen" src="${productos[cadaProducto].imagen}">
        <div class="carritoTitulo">${productos[cadaProducto].titulo}</div>
        <div class="carritoPrecio">${productos[cadaProducto].precio}</div>
      </div>
    `;
  }

  precioTotal = precioTotal + productoPrecio;
  carritoTotal.textContent = precioTotal;
  
}

// CERRAR EL CARRITO AL PRESIONAR LA X
carritoCerrar.addEventListener('click', carritoCerrado);
function carritoCerrado() {
  carrito.style.display = 'none'; 
}
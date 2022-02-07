const carrito = document.getElementById('carrito');
const botonesAgregar = document.querySelectorAll('.producto__agregar');
let carritoTotal = document.getElementById("carritoTotal");
let carritoProductos = document.getElementById("carritoProductos");
let carritoCerrar = document.getElementById("carritoCerrar");

let precioTotal = 0;

botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener('click', botonAgregarClicked);
});

const productos = [];

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

 // carritoProductos.innerHTML += `
 //   <div class="nuevoProducto">
 //     <img class="carritoImagen" src="${productoImagen}">
 //     <div class="carritoTitulo">${productoTitulo}</div>
 //     <div class="carritoPrecio">${productoPrecio}</div>
 //   </div>
 // `;

 // console.log(productos);

//   TODAVÍA NO DESCUBRÍ CÓMO HACER PARA QUE FUNCIONE ASÍ JEJE
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

carritoCerrar.addEventListener('click', carritoCerrado);

function carritoCerrado() {
  carrito.style.display = 'none'; 
}
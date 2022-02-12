// DECLARACIÓN DE TODOS LOS PRODUCTOS
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
    }
  ];
  
  // AGREGAR TODOS LOS PRODUCTOS AL DOCUMENTO
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
  
  // INICIAR EL ARRAY DE PRODUCTOS AGREGADOS AL CARRITO
  let productosAgregados = localStorage.getItem('productosCarrito');
  productosAgregados = JSON.parse(productosAgregados);
  console.log(productosAgregados);
  const carritoProductos = document.getElementById("carritoProductos");
  
  // FILTRAR LOS PRODUCTOS AGREGADOS
  function filtrarProductosAgregados() {
    productosAgregados = productos.filter((productoAgregado) => productoAgregado.agregado == true);
  }
  console.log(productosAgregados);
  
  // AGREGAR PRODUCTOS AGREGADOS AL ARRAY DEL CARRITO
  function agregarProductosEnCarrito() {
  
    carritoProductos.innerHTML = "";
    
    productosAgregados.forEach((productoAgregado) => {
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
      `;
      carritoProductos.appendChild(nuevoProducto);
    });
  }
  
  agregarProductosEnCarrito();
  console.log(productosAgregados);
  let cantidadActualizar;
  
  function actualizarCantidad() {
    cantidadActualizar = document.querySelector("#agregado" + productoAgregado.sku + "  .carritoCantidad .cant");
    cantidadActualizar.textContent = productoAgregado.cantidad;
  }
  
  function actualizarPrecio() {
    precioActualizar = document.querySelector("#agregado" + productoAgregado.sku + "  .carritoPrecio");
    precioActualizar.textContent = "$" + (productoAgregado.precio * productoAgregado.cantidad).toFixed(2);
  }
  
  // SELECCIONAR TODOS LOS BOTONES DE AGREGAR AL CARRITO
  const botonesAgregar = document.querySelectorAll('.producto__agregar');
  
  // EVENTO DE CLICK PARA AGREGAR AL CARRITO
  botonesAgregar.forEach((botonAgregar) => {
    botonAgregar.addEventListener('click', botonAgregarClicked);
  });
  
  let productoAgregadoPadre;
  let productoAgregado;
  
  const aumentarCantidad = () => { productoAgregado.cantidad = productoAgregado.cantidad + 1 };
  const reducirCantidad = () => { productoAgregado.cantidad = productoAgregado.cantidad - 1 };
  const aumentarStock = () => { productoAgregado.stock = productoAgregado.stock + 1 };
  const reducirStock = () => { productoAgregado.stock = productoAgregado.stock - 1 };
  
  let productoSinStock;
  
  function noTieneStock() {
    if(productoAgregado.stock == 0){
      productoSinStock = document.getElementById(productoAgregado.sku).children;
      productoSinStock[3].style.display = "none"; 
      productoSinStock[4].style.display = "block"; 
    }
  }
  
  function tieneStock() {
    if(productoAgregado.stock > 0){
      productoSinStock = document.getElementById(productoAgregado.sku).children;
      productoSinStock[3].style.display = "block"; 
      productoSinStock[4].style.display = "none"; 
    }
  }
  
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
  }
  
  const numeritoContenedor = document.getElementById("numerito");
  let numerito = 0;
  numeritoContenedor.textContent = numerito;
  
  function aumentarNumerito() {
    numeritoContenedor.classList.remove("shake");
    numeritoContenedor.offsetWidth;
    numeritoContenedor.classList.add("shake");
    numerito = numerito + 1;
    numeritoContenedor.textContent = numerito;
  }
  
  function reducirNumerito() {
    numerito = numerito - 1;
    numeritoContenedor.textContent = numerito;
  }
  
  let precioTotal = 0;
  const carritoTotal = document.getElementById("carritoTotal");
  carritoTotal.textContent = precioTotal.toFixed(2);
  
  function aumentarPrecioTotal() {
    precioTotal = precioTotal + productoAgregado.precio;
    carritoTotal.textContent = precioTotal.toFixed(2);
  }
  
  function reducirPrecioTotal() {
    precioTotal = precioTotal - productoAgregado.precio;
    carritoTotal.textContent = precioTotal.toFixed(2);
  }
  
  function botonAgregarClicked(event) {
    productoAgregadoPadre = event.target.closest('.producto');
    productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id);
  
    if(productoAgregado.agregado == false) {
      productoAgregado.agregado = true;
      aumentarCantidad();
      reducirStock();
      agregarProductosEnCarrito();
  
    } else {
      aumentarCantidad();
      reducirStock();
      actualizarCantidad();
    }
    
    noTieneStock();
    tieneStock();
    botonesMasMenos();
    actualizarPrecio();
    aumentarNumerito();
    aumentarPrecioTotal();
    
    localStorage.setItem('productosCarrito', JSON.stringify(productosAgregados));
  }
  
  function botonMasClicked(event) {
    productoAgregadoPadre = event.target.closest('.nuevoProducto');
    productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
  
    if(productoAgregado.stock > 0) {
      aumentarCantidad();
      actualizarCantidad();
      reducirStock();
      aumentarNumerito();
      aumentarPrecioTotal();
    }
    actualizarPrecio();
    noTieneStock();
    tieneStock();
  }
  
  function botonMenosClicked(event) {
    productoAgregadoPadre = event.target.closest('.nuevoProducto');
    productoAgregado = productos.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
  
    if(productoAgregado.cantidad > 1) {
      reducirCantidad();
      actualizarCantidad();
      aumentarStock();
      reducirNumerito();
      reducirPrecioTotal();
    }
    actualizarPrecio();
    noTieneStock();
    tieneStock();
  }
  
  
  // *************** COMPRAR POR WHATSAPP ***************
  
  // SELECCIONAR TODOS LOS BOTONES DE COMPRAR POR WHATSAPP
  const botonesWhatsApp = document.querySelectorAll('.producto__whatsapp');
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
        "_blank"
      );
    } 
    else {
      window.open(
        "https://api.whatsapp.com/send?phone=++5491157667000&text=Hola,%20quiero%20consultar%20por%20el%20producto%20*" + productoAgregado.titulo + "*.%20En%20la%20tienda%20figura%20como%20*agotado*%20.%20Muchas%20gracias!",
        "_blank"
      );
    }
    
  }
// DECLARACIÓN DE TODOS LOS PRODUCTOS
let productos = [
  {
    sku: 1,
    titulo: 'Samsung Galaxy A12 64 GB azul 4 GB RAM',
    imagen: 'img/celulares/1.webp',
    precio: 33999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 2,
    titulo: 'Samsung Galaxy S21 Fe Blanco 5g',
    imagen: 'img/celulares/2.webp',
    precio: 124999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 3,
    titulo: 'Quantum UP32 Dual SIM 32 GB negro 1 GB RAM',
    imagen: 'img/celulares/3.webp',
    precio: 12020,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 4,
    titulo: 'Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM',
    imagen: 'img/celulares/4.webp',
    precio: 94999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 5,
    titulo: 'Samsung Galaxy A12 64 GB azul 4 GB RAM',
    imagen: 'img/celulares/5.webp',
    precio: 33999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 6,
    titulo: 'Samsung Galaxy M12 (5000 mAh) Dual SIM 128 GB black 4 GB RAM',
    imagen: 'img/celulares/6.webp',
    precio: 39999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 7,
    titulo: 'LG K62 128 GB sky blue 4 GB RAM',
    imagen: 'img/celulares/7.webp',
    precio: 35999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Celulares',
    inCat: true
  },
  {
    sku: 8,
    titulo: 'Calefactor eléctrico convector Magiclick C1009 blanco 220V',
    imagen: 'img/calefaccion/1.webp',
    precio: 5138,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Calefacción',
    inCat: true
  },
  {
    sku: 9,
    titulo: 'Calefactor Tiro Balanceado Emege Euro 2000c Multigas 2019',
    imagen: 'img/calefaccion/2.webp',
    precio: 20990,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Calefacción',
    inCat: true
  },
  {
    sku: 9,
    titulo: 'Calefactor eléctrico convector Peabody PE-VC10 blanco 220V',
    imagen: 'img/calefaccion/3.webp',
    precio: 8833,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Calefacción',
    inCat: true
  },
  {
    sku: 10,
    titulo: 'Calefactor eléctrico convector Peabody PE-VC10 negro 220V',
    imagen: 'img/calefaccion/4.webp',
    precio: 8833,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Calefacción',
    inCat: true
  },
  {
    sku: 11,
    titulo: 'Auriculares in-ear inalámbricos Samsung Galaxy Buds2 black',
    imagen: 'img/auriculares/1.webp',
    precio: 15499,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Auriculares',
    inCat: true
  },
  {
    sku: 12,
    titulo: 'Auriculares inalámbricos Sony WH-CH510 negro',
    imagen: 'img/auriculares/2.webp',
    precio: 4999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Auriculares',
    inCat: true
  },
  {
    sku: 13,
    titulo: 'Auriculares Bluetooth F9 Tws Mejor Que Xiaomi Earpods',
    imagen: 'img/auriculares/3.webp',
    precio: 2766,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Auriculares',
    inCat: true
  },
  {
    sku: 14,
    titulo: 'Auriculares in-ear inalámbricos Xiaomi Redmi AirDots 2 negro',
    imagen: 'img/auriculares/4.webp',
    precio: 2439,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Auriculares',
    inCat: true
  },
  {
    sku: 15,
    titulo: 'Auriculares in-ear inalámbricos Samsung Galaxy Buds2 black',
    imagen: 'img/auriculares/5.webp',
    precio: 15499,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Auriculares',
    inCat: true
  },
  {
    sku: 16,
    titulo: 'Parlante Spica Sp-2065 Bluetooth Portatil Led Rgb Inalambric',
    imagen: 'img/parlantes/1.webp',
    precio: 1924,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 17,
    titulo: 'Parlante Philco DJP10 portátil con bluetooth negro 220V',
    imagen: 'img/parlantes/2.webp',
    precio: 7699,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 18,
    titulo: 'Parlante Edifier R2000DB con bluetooth wood finish',
    imagen: 'img/parlantes/3.webp',
    precio: 46990,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 19,
    titulo: 'Parlante Spica SP-4408 con bluetooth',
    imagen: 'img/parlantes/4.webp',
    precio: 8999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 20,
    titulo: 'Parlante HP DHS-2101 black',
    imagen: 'img/parlantes/5.webp',
    precio: 3701,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 21,
    titulo: 'Parlante Spica SP 3312TM con bluetooth 220V',
    imagen: 'img/parlantes/6.webp',
    precio: 9999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 22,
    titulo: 'Parlante Crown Mustang CMA-802BT con bluetooth negro',
    imagen: 'img/parlantes/7.webp',
    precio: 12021,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 23,
    titulo: 'Parlante Aliver Iggy Go portátil con bluetooth negro',
    imagen: 'img/parlantes/8.webp',
    precio: 6999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Parlantes',
    inCat: true
  },
  {
    sku: 24,
    titulo: 'Smart TV JVC LT-32DA3125 LED HD 32" 220V',
    imagen: 'img/smarttv/1.webp',
    precio: 28999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Smart TV',
    inCat: true
  },
  {
    sku: 25,
    titulo: 'Smart TV Noblex DK32X5000 LED HD 32" 220V',
    imagen: 'img/smarttv/2.webp',
    precio: 33499,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Smart TV',
    inCat: true
  },
  {
    sku: 26,
    titulo: 'Smart TV BGH B5021UH6A LED 4K 50" 220V',
    imagen: 'img/smarttv/3.webp',
    precio: 59960,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Smart TV',
    inCat: true
  },
  {
    sku: 27,
    titulo: 'Smart TV TCL S6500 Series L42S6500 LED Full HD 42" 220V',
    imagen: 'img/smarttv/4.webp',
    precio: 40999,
    stock: 3,
    cantidad: 0,
    agregado: false,
    categoria: 'Smart TV',
    inCat: true
  }
];

//MEZCLAR LOS PRODUCTOS PARA QUE NO APAREZCAN EN ORDEN
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(productos);

// AGREGAR TODOS LOS PRODUCTOS EN LA HOME
const listadoProductos = document.getElementById("listadoProductos");
let botonesAgregar;

Number.prototype.toLocaleFixed = function(n) {
  return this.toLocaleString(undefined, {
    minimumFractionDigits: n,
    maximumFractionDigits: n
  });
};

function agregarProductosEnHome() {  
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
  noTieneStock();
}
agregarProductosEnHome();

// DECLARACIÓN DE TODAS LAS CATEGORÍAS
let categorias = [
  { id: 1, nombre: "Auriculares" },
  { id: 2, nombre: "Calefacción" },
  { id: 3, nombre: "Celulares" },
  { id: 4, nombre: "Electrodomésticos" },
  { id: 5, nombre: "Parlantes" },
  { id: 6, nombre: "Smart TV" },
  { id: 999, nombre: "Todos los productos" }
];

const listadoCategorias = document.getElementById("listadoCategorias");
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

numerito = localStorage.getItem("numerito");
if(numerito > 0) {
  productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);
  productos.forEach((producto) => {
    producto.inCat = true;
  });

  agregarProductosEnHome();
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
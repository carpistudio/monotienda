// Alerts de bienvenida y explicación de funcionamiento
alert("Bienvenido a Monotienda");
alert("Cliqueá en AGREGAR AL CARRITO en el producto que quieras comprar");

// Definir las variables de carrito, donde se van a agregar los productos y el total más tarde
let carritoProductos = document.getElementById("carritoProductos");
let carritoTotal = document.getElementById("carritoTotal");
let costoTotal = 0;

// Función a ejecutarse cuando presionen "AGREGAR AL CARRITO"
function agregarAlCarrito() {
    let cantidad = prompt("Ingrese la cantidad de productos que desea agregar.");
    if(cantidad > 0) {
        alert("Agregaste " + cantidad + " productos al carrito.");
        document.getElementById("carrito").style.display = 'flex'; 
        let textoCarrito = document.createTextNode("Agregado: " + cantidad);
        carritoProductos.appendChild(textoCarrito);
        carritoProductos.innerHTML += "<br>";
        costoTotal = costoTotal + cantidad * 500;
        carritoTotal.textContent = costoTotal;
    } else {
        alert("No ingresaste una cantidad válida, intentá nuevamente.");
    }
}

// Función para cerrar el carrito con la X
function cerrarPopup() {
    document.getElementById("carrito").style.display = 'none'; 
}
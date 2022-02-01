// Alerts de bienvenida y explicación de funcionamiento
alert("Bienvenido a Monotienda");
alert("Cliqueá en AGREGAR AL CARRITO en el producto que quieras comprar");

// Definir las variables de carrito, donde se van a agregar los productos y el total más tarde
let carritoProductos = document.getElementById("carritoProductos");
let carritoTotal = document.getElementById("carritoTotal");
let costoTotal = 0;
let cantidad;

// Función a ejecutarse cuando presionen "AGREGAR AL CARRITO"
function agregarAlCarrito() {
    do {
        cantidad = prompt("Ingrese la cantidad de productos que desea agregar. Para finalizar, ingrese 0.");

        if(isNaN(cantidad) || cantidad == null || cantidad == "" || cantidad < 0) {
            alert("No ingresaste una cantidad válida, intentá nuevamente.");
        }
        else if(cantidad == 0) {
            alert("Todos los productos fueron agregados al carrito. Podés seguir comprando.");
        }
        else {
            alert("Agregaste " + cantidad + " productos al carrito.");
            document.getElementById("carrito").style.display = 'flex'; 
            let textoCarrito = document.createTextNode("Agregado: " + cantidad);
            carritoProductos.appendChild(textoCarrito);
            carritoProductos.innerHTML += "<br>";
            costoTotal = costoTotal + cantidad * 500;
            carritoTotal.textContent = costoTotal;
        }
        console.log(cantidad);
    } while(cantidad != "0");
}

// Función para cerrar el carrito con la X
function cerrarPopup() {
    document.getElementById("carrito").style.display = 'none'; 
}
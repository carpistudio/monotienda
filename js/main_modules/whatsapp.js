export function asignarBotonesWhatsApp(productos) {
    const botonesWhatsApp = document.querySelectorAll('.producto__whatsapp');
    botonesWhatsApp.forEach((botonWhatsApp) => {
        botonWhatsApp.addEventListener('click', function() {
            botonWhatsAppClicked(event, productos);
      }, false);
    });
}

// Se ejecuta al hacer click en un botón de WhatsApp
function botonWhatsAppClicked(event, productos) {
  const productoAgregadoID = event.target.closest('.producto').id;
  const productoAgregado = productos.find(function(buscarProducto) {
    return buscarProducto.sku == productoAgregadoID;
  });

  // Abre un link a WhatsApp, con un mensaje con la info del producto
  window.open(
    "https://api.whatsapp.com/send?phone=++5491157667000&text=Hola,%20quiero%20comprar%20el%20producto%20*" + productoAgregado.titulo + "*,%20que%20tiene%20un%20precio%20de%20*$" + productoAgregado.precio.toFixed(2) + "*.%20Muchas%20gracias!",
    "_blank"
  )

}
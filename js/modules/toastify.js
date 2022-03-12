export const toastify = (status) => {
    Toastify({
        text: `Producto ${status}`,
        duration: 2000,
        close: true,
        className: "toastifyToast"
    }).showToast();
}
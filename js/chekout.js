const carrito = JSON.parse(localStorage.getItem('carrito'))

const carritoLenght = carrito.length;

const dropdownCarrito = document.getElementById("dropdown-carrito");

const productosEnCarrito = document.createElement("ul");
productosEnCarrito.innerHTML = `
    <li> ${carritoLenght} PRODUCTOS EN EL CARRITO </li>
    <li> <img src="../img/down-arrow.png" alt="dropdown arrow" class="dropdown-arrow"> </li>
`;

dropdownCarrito.append(productosEnCarrito);





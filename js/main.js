const productos = [
    { id: 1, nombre: "Whey Protein Star Nutrition", sabor: "chocolate", precio: 15000, imagen: "https://desuplementos.com/wp-content/uploads/2019/12/Star-Nutrition-Whey-Protein-Isolada-1000-Chocolate-Frente-scaled-e1629853813382.jpg" },
    { id: 2, nombre: "Whey Protein Star Nutrition", sabor: "vainilla", precio: 15000, imagen: "https://army.com.ar/images/thumbs/0000037_platinum-whey-isolate-2lb_510.jpeg" },
    { id: 3, nombre: "Creatina Monohidratada Star Nutrition", sabor: "Sin sabor", precio: 20000, imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/792/557/products/star-nutrition-creatine-monohydrate1-dc32cb0696afe533fc16761557247757-640-0.jpg" },
];

const carrito = [];

productos.forEach((producto) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="product">
          <img src="${producto.imagen}" alt="${producto.nombre} ${producto.sabor}">
          <h3>${producto.nombre}</h3>
          <span>$${producto.precio}</span>
          <h4>Sabor: ${producto.sabor}</h4> 
          <button class="add-chart">Agregar al Carrito</button>
      </div>
    `;

    let products = document.getElementById("products-container");
    products.append(div);


    const button = div.querySelector(".add-chart");
    button.producto = {
        imagen: producto.imagen,
        id: producto.id,
        nombre: producto.nombre,
        sabor: producto.sabor,
        precio: producto.precio,
    };

    button.addEventListener("click", () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Producto agregado al carrito`,
            showConfirmButton: false,
            timer: 1000,
        });

        carrito.push(button.producto);
        console.log(carrito);
    });
});

//creacion del container del modal y su titulo
const verCarrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");

verCarrito.addEventListener("click", () => {

    modalContainer.style.display = "block";
    modalContainer.innerHTML = "";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h2 class="modal-header-title">Mi Carrito</h2>
    `;
    modalContainer.append(modalHeader);

    // Cruz modal
    const modalCruz = document.createElement("img");
    modalCruz.src = "../img/cruz.png";
    modalCruz.className = "modal-cruz";
    modalHeader.append(modalCruz);

    //cerrar carrito de compras
    modalCruz.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    //carrito productos agregados
    if (carrito.length === 0) {
        const carritoVacio = document.createElement("p");
        carritoVacio.innerText = "Carrito vacío";
        carritoVacio.className = "carrito-vacio"
        modalContainer.append(carritoVacio);
    } else {
        carrito.forEach((product) => {
            const carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML = `
                <img src="${product.imagen}">
                <h3>${product.nombre}</h3>
                <p>${product.precio}$</p>
            `;
            modalContainer.append(carritoContent);
        });
        //footer
        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";

        const total = carrito.reduce((acum, product) => acum + product.precio, 0);


        modalFooter.innerHTML = `
            <div class = "carrito_total-compra">
              Total: ${total} $ 
            </div>
            `;

        modalContainer.append(modalFooter);
    }
});




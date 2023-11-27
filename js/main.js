//carrito Storage

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//Produtos en el DOM 
const catalogoDom = async () => {
    try {
        const response = await fetch(`../productos.json`);
        const data = await response.json();
        
        data.forEach((producto) => {
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

            const products = document.getElementById("products-container");
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
                    timer: 900,
                });

                carrito.push(button.producto);
            });
        });
    } catch (error) {
        console.log(error);
    }
};

catalogoDom();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //filtado al clickear
    const proteinaFilter = document.getElementById("proteina");
    const creatinaFilter = document.getElementById("creatina");
    const allProductsFilter = document.getElementById("all-products");


    proteinaFilter.addEventListener("click", () => {
        // Cambio de título
        const filtradosTitle = document.getElementById("products-title");
        filtradosTitle.innerText = "Proteina";

        const productsProteinaContainer = document.getElementById("products-container");
        productsProteinaContainer.innerHTML = "";


        // Filtrado de productos proteína
        const productosProteina = async () => {
            try {
                const response = await fetch(`../productos.json`);
                const data = await response.json();

                // Filtrar productos por categoría "proteina"
                const productosProteina = data.filter(producto => producto.categoria === "proteina");

                // Recorrer productos filtrados
                productosProteina.forEach((producto) => {
                    const proteinaProductosDiv = document.createElement("div");
                    proteinaProductosDiv.innerHTML = `
                        <div class="product">
                            <img src="${producto.imagen}" alt="${producto.nombre} ${producto.sabor}">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <h4>Sabor: ${producto.sabor}</h4>
                            <button class="add-chart">Agregar al Carrito</button>
                        </div>
                    `;

                    productsProteinaContainer.append(proteinaProductosDiv);

                    const button = proteinaProductosDiv.querySelector(".add-chart");
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
                            title: "Producto agregado al carrito",
                            showConfirmButton: false,
                            timer: 900,
                        });

                        carrito.push(button.producto);
                    });
                });
            } catch (error) {
                console.log(error);
            }
        };

        productosProteina();
    });


    creatinaFilter.addEventListener("click", () => {
        // Cambio de título
        const filtradosTitle = document.getElementById("products-title");
        filtradosTitle.innerText = "Creatina";

        const productsCreatinaContainer = document.getElementById("products-container");
        productsCreatinaContainer.innerHTML = "";


        // Filtrado de productos proteína
        const productosCreatina = async () => {
            try {
                const response = await fetch(`../productos.json`);
                const data = await response.json();

                // Filtrar productos por categoría "creatina"
                const productosCreatina = data.filter(producto => producto.categoria === "creatina");

                // Recorrer productos filtrados
                productosCreatina.forEach((producto) => {
                    const creatinaProductosDiv = document.createElement("div");
                    creatinaProductosDiv.innerHTML = `
                        <div class="product">
                            <img src="${producto.imagen}" alt="${producto.nombre} ${producto.sabor}">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <h4>Sabor: ${producto.sabor}</h4>
                            <button class="add-chart">Agregar al Carrito</button>
                        </div>
                    `;

                    productsCreatinaContainer.append(creatinaProductosDiv);

                    const button = creatinaProductosDiv.querySelector(".add-chart");
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
                            title: "Producto agregado al carrito",
                            showConfirmButton: false,
                            timer: 900,
                        });

                        carrito.push(button.producto);
                    });
                });
            } catch (error) {
                console.log(error);
            }
        };

        productosCreatina();
    });

    allProductsFilter.addEventListener("click", () => {
        // Cambio de título
        const filtradosTitle = document.getElementById("products-title");
        filtradosTitle.innerText = "Todos los Productos";

        const allProductsContainer = document.getElementById("products-container");
        allProductsContainer.innerHTML = "";


        // Filtrado de productos proteína
        const allProducts = async () => {
            try {
                const response = await fetch(`../productos.json`);
                const data = await response.json();

                // Recorrer productos 
                data.forEach((producto) => {
                    const allProductsDiv = document.createElement("div");
                    allProductsDiv.innerHTML = `
                        <div class="product">
                            <img src="${producto.imagen}" alt="${producto.nombre} ${producto.sabor}">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <h4>Sabor: ${producto.sabor}</h4>
                            <button class="add-chart">Agregar al Carrito</button>
                        </div>
                    `;

                    allProductsContainer.append(allProductsDiv);

                    const button = allProductsDiv.querySelector(".add-chart");
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
                            title: "Producto agregado al carrito",
                            showConfirmButton: false,
                            timer: 900,
                        });

                        carrito.push(button.producto);
                    });
                });
            } catch (error) {
                console.log(error);
            }
        };

        allProducts();
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creacion del container del modal y su titulo
const verCarrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");

verCarrito.addEventListener("click", () => {

    modalContainer.style.display = "block"; //visibilidad del modal
    modalContainer.innerHTML = ""; //limpia el contenido previo antes de agregar nuevos productos

    //Creacion del header del modal
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


    //animacion cerrar carrito
    modalCruz.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    //Carrito vacio y agregado de productos al carrito
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
                <button class = "btn_eliminar-producto" data-id="${product.id}"> Eliminar </button>
            `;
            modalContainer.append(carritoContent);
        });
    }

    //ELiminar producto del carrito
    const botonesEliminar = document.querySelectorAll(".btn_eliminar-producto");

    botonesEliminar.forEach(eliminarProducto => {
        eliminarProducto.addEventListener("click", () => {

            // Obtiene el id del producto clickeado
            const productoId = eliminarProducto.getAttribute('data-id');

            const index = carrito.findIndex(producto => producto.id === productoId);

            if (index == -1) {
                Swal.fire({
                    title: "Eliminar producto del carrito?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar"
                }).then((result) => {
                    if (result.isConfirmed) {

                        // Elimina el producto del carrito
                        carrito.splice(index, 1);

                        // Actualiza el localStorage 
                        localStorage.setItem('carrito', JSON.stringify(carrito));

                        // Elimina el elemento del DOM 
                        eliminarProducto.closest('.modal-content').remove();

                        // Recalcula el total después de la eliminación
                        const total = carrito.reduce((acum, product) => acum + product.precio, 0);

                        // Actualiza el total en el footer
                        document.querySelector('.carrito_total-compra').innerText = `Total: ${total} $`;
                    }
                });
            }
        });
    });

    //footer
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    
    
    // Calcula el total inicial
    const totalInicial = carrito.reduce((acum, product) => acum + product.precio, 0);

    modalFooter.innerHTML = `
    <div class="carrito_total-compra">
        Total: ${totalInicial} $ 
    </div>

    <a href="https://wa.me/543512289769?text=Hola! Estoy interesado en tus suplementos" target="_blank">
    <div id= "checkout"> COMPRAR </div> 
    </a>
     
    `;
    
    modalContainer.append(modalFooter);

    // Actualiza el localStorage con el carrito actualizado
    localStorage.setItem('carrito', JSON.stringify(carrito));

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//alerta contacto asincronica 
const alertaContacto = document.getElementById("alerta-contacto");
alertaContacto.style.display = "none";

const alertaContactoPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    });
};



alertaContactoPromise () 
.then ((response) => {
    const destacados = document.getElementById ("destacados"); 
    destacados.style.opacity = ".6";
    alertaContacto.style.display = "flex";
    alertaContacto.style.opacity = 1; 

    const alertaContactoContainer = document.createElement("div");
    alertaContactoContainer.className = "alerta-contacto_container";
    alertaContactoContainer.innerHTML = `

        <div id = "alerta-cruz"> <img src="../img/cruz.png" alt="Cruz cerrar alerta"> </div>
        
        <div class = "alerta-contacto_title"> 
            <h4> Con </h4> 
            <h4> tac </h4>
            <h4> ta </h4>
            <h4> nos </h4>
        </div> 

        <div class = "alerta-contacto-redes"> 
            <div class = "alerta-contacto-redes_container"> 
                <div>
                    <a href="https://wa.me/543512289769?text=Hola! Estoy interesado en tus suplementos" target="_blank">
                        <img src="../img/whatsapp.png" alt="Whatsapp" class="social-media_logo">
                        <p> Numero de telefono</p>
                    </a>
                </div>
                    
                    
                <div>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="../img/insta.png" alt="Instagram" class="social-media_logo">
                        <p> @FitnessFuel_Suplementos</p>
                    </a>
                </div>
                   
                        
                <div>
                        <img src="../img/email.png" alt="Email" class="social-media_logo">
                        <p> FitnessFuel.Suplementos@gmail.com</p>
                </div>
            </div>
        </div>
    `;
    alertaContacto.append(alertaContactoContainer);

    const cruzAlerta = document.getElementById ("alerta-cruz"); 
    cruzAlerta.addEventListener ( "click" , () => {
        alertaContacto.style.display = "none";
        destacados.style.opacity = "1";
    });

    
})
.catch ((error) => {
    const errorDiv = document.createElement ("div");
    errorDiv.innerHTML = `
    Error: ${error}
    `;
	alertaContacto.append (errorDiv);

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
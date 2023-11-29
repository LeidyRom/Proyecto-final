// Evento para crear nuevos productos
document.getElementById("Lista de productos").addEventListener("submit", crear);

// Función crear
function crear(e) {
    e.preventDefault();

    let titulo = document.getElementById("producto").value;
    let descripcion = document.getElementById("descripcion").value;
    let vencimiento = document.getElementById("fecha de vencimiento").value;
    let lote = document.getElementById("lote").value;
    let precio = document.getElementById("precio").value;

    let producto = {
        producto: titulo,
        descripcion: descripcion,
        vencimiento: vencimiento,
        lote: lote,
        precio: precio
    };

    if (localStorage.getItem("productos") === null) {
        let productos = [];
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    } else {
        let productos = JSON.parse(localStorage.getItem("productos"));
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    leer();
}

// Función leer
function leer() {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].producto;
        let descripcion = productos[i].descripcion;
        let fechaVencimiento = productos[i].vencimiento;
        let lote = productos[i].lote;
        let precio = productos[i].precio;

        let fila = `
            <tr>
                <td>${producto}</td>
                <td>${descripcion}</td>
                <td>${fechaVencimiento}</td>
                <td>${lote}</td>
                <td>${precio}</td>
                <td>
                    <button onclick="eliminar('${producto}')">Eliminar</button>
                    <button onclick="editar('${producto}')">Editar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    }

    // Limpiar el formulario
    document.getElementById("Lista de productos").reset();
    console.log("Producto agregado");
}

// Función eliminar
function eliminar(producto) {
    let productos = JSON.parse(localStorage.getItem("productos"));
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].producto === producto) {
            productos.splice(i, 1);
        }
    }
    localStorage.setItem("productos", JSON.stringify(productos));
    leer();
}

// Función editar
function editar(titulo) {
    let productos = JSON.parse(localStorage.getItem("productos"));

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].producto === titulo) {
            document.getElementById("productos").innerHTML =
                `
                <div class="container mt-4" id="body">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="card">
                                <div class="card-header">
                                    <h2>Lista de Productos</h2>
                                </div>
                                <div class="card-body">
                                    <form id="formulario-edicion">
                                        <div class="form-group">
                                            <input type="text" id="newproducto" class="form-control my-3" placeholder="Ingresar producto" value="${productos[i].producto}">
                                        </div>
                                        <div class="form-group">
                                            <textarea id="newdescripcion" class="form-control my-3" placeholder="Descripción del producto">${productos[i].descripcion}</textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="date" id="newvencimiento" class="form-control my-3" placeholder="Fecha de vencimiento" value="${productos[i].vencimiento}">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="newlote" class="form-control my-3" placeholder="Lote" value="${productos[i].lote}">
                                        </div>
                                        <div class="form-group">
                                            <input type="number" id="newprecio" class="form-control my-3" placeholder="Precio" value="${productos[i].precio}">
                                            <button type="button" class="btn btn-primary" onclick="actualizar(${i})">Actualizar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        }
    }
}


// Función actualizar
function actualizar(i) {
    let productos = JSON.parse(localStorage.getItem("productos"));
    productos[i].producto = document.getElementById("newproducto").value;
    productos[i].descripcion = document.getElementById("newdescripcion").value;
    productos[i].vencimiento = document.getElementById("newvencimiento").value;
    productos[i].lote = document.getElementById("newlote").value;
    productos[i].precio = document.getElementById("newprecio").value;

    localStorage.setItem("productos", JSON.stringify(productos));
    leer();

    // Limpiar el formulario de edición
    document.getElementById("formulario-edicion").innerHTML = "";
}

// Función cancelar
function cancelar() {
    // Limpiar el formulario de edición
    document.getElementById("formulario-edicion").innerHTML = "";
}

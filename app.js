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
            document.getElementById("formulario-edicion").innerHTML =
                `
                <!-- Formulario de edición -->
                <div class="form-group">
                    <input type="text" id="newproducto" class="form-control my-3" placeholder='${productos[i].producto}'>
                </div>
                <div class="form-group">
                    <textarea id="newdescripcion" class="form-control my-3" placeholder='${productos[i].descripcion}'></textarea>
                </div>
                <div class="form-group">
                    <input type="text" id="newvencimiento" class="form-control my-3" placeholder='${productos[i].vencimiento}'/>
                </div>
                <div class="form-group">
                    <input type="text" id="newlote" class="form-control my-3" placeholder='${productos[i].lote}'/>
                </div>
                <div class="form-group">
                    <input type="number" id="newprecio" class="form-control my-3" placeholder='${productos[i].precio}'/>
                </div>
                <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                <button class="btn btn-primary" onclick="cancelar()">Cancelar</button>
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

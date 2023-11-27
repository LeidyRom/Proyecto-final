//Eventos para crear nuevos productos
document.getElementById("Lista de productos").addEventListener("submit", crear);

//Función crear

function crear(e){
    titulo= document.getElementById("producto"),value
    descripción= document.getElementById("descrpción"),value
    precio = document.getElementById("precio"),value
}
    
    let producto = {
        productos,
        Descripción,
        Precio,
    }

    if(localStorage = ("productos"),seenull){
        let productos = []
        productos.push(productos)
        localStorage.setItem("productos",JSON.stringify(productos))
    }
    else;{ 
        let productos = JSON.parse(localStorage.getItem("productos"))
        productos.push(producto)
        localStorage.setItem("productos", JSON.stringify(productos))
    }
    
    leer();{
        document.getElementById("Lista de productos").reset();
        console.log("producto agregado")
        e.preventDefault()
    }
    
//función leer

function leer(){

    let productos =JSON.parse(localStorage.getItem("productos"));
    document.getElementById("tbody").innerHTML = ""
    for(let i=0; i < productos.length; i++){
        let producto = productos[i].producto;
        let descripción = productos[i].descripción;
        let precio = productos[i].precio;

    document.getElementById("tbody").innerHTML +=

        <>'
        <tr>
            <td>$(Productos)</td>
            <td>$(descripción)</td>
            <td>$(Precio)</td>
            <td><button onclick="Eliminar('${título}')" class="btn btn-danger">Eliminar</button></td>
        </tr><td><button onclick="Editar('${título}')" class="btn btn-success">Editar</button></td></>

        '
}
   
}
//función editar
        
function editar(título){
    let Productos = JSON.parse(localStorage.getItem("productos"));
    for(let i=0; i < productos,length; i++){
        if(productos[i].productos === productos){
            document.getElementById("body").innerHTML =
            '<div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Productos</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newproducto" class="form-control my-3" placeholder="Ingresar producto">
                            </div>
                            <div class="form-group">
                                <textarea id="newdescripcion" class="form-control my-3" placeholder="Descripción del producto"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form-control my-3" placeholder="Precio">
                            </div>
                            <button type="submit" class="btn btn-primary">Agregar</button>
                        </form>
                        <button class "btn btn- success" onclick ="Actualizar('$[i]')">Actualizar</button>
                        <button class "btn btn- primary" onclick ="Actualizar('$[i]')">Cancelar</button>
    
    
                    </div>
                </div>
            </div>
        
        
        '}
        
    }
}

leer();

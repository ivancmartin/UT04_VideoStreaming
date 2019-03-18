const dbName = "VSystemDB";
var db;

function cargarDB() {
    
    if (!window.indexedDB) 
        console.log("La base de datos no se ha podido cargar porque el navegador no la soporta");
      
    var request = indexedDB.open(dbName,1);

    request.onerror = function (event) {
        alert("no se ha cargado la base de datos");
    }

    request.onupgradeneeded  = function(event) { 
        var db = event.target.result;
    
        db.createObjectStore("categorias", { keyPath: "nombre" });
        db.createObjectStore("actores", { keyPath: "name" });
        db.createObjectStore("directores", { keyPath: "name" });
        db.createObjectStore("producciones", { keyPath: "title" });
        db.createObjectStore("categoriasAsig", { keyPath: "categoria" });
    };
}


function introducirElemento(elemento,tipo) {
    var request = indexedDB.open(dbName);

    request.onsuccess = function() {
        var db = event.target.result;
        switch (tipo){
            //opción 1: categorías
            case 1:
                var request = db.transaction("categorias", "readwrite").objectStore("categorias").add(elemento);
                break;
            //opción 2: actores
            case 2:
                var request = db.transaction("actores", "readwrite").objectStore("actores").add(elemento);
                break;
            //opcion 3: directores
            case 3:
                var request = db.transaction("directores", "readwrite").objectStore("directores").add(elemento);
                break;
            //opcion 4: peliculas y series
            case 4:
                var request = db.transaction("producciones", "readwrite").objectStore("producciones").add(elemento);
                break;
            case 5:
            //console.log(elemento)
                var request = db.transaction("producciones", "readwrite").objectStore("producciones").add(elemento);
                break;
            default:
                console.log("ningun tipo seleccionado");
                break;
        }
    }
}


function borrarElementos(tabla,elemento) {
    var request = indexedDB.open(dbName);

    request.onsuccess = function (event) {
        var db = event.target.result;
        db.transaction([tabla],"readwrite").objectStore(tabla).delete(elemento);
    };
}

function asignarCatDb(categoria,produccion) {
    var request = indexedDB.open(dbName);
    request.onsuccess = function(){
        var db = event.target.result;
        var elemento = {categoria: categoria, produccion: produccion}
        var request = db.transaction("categoriasAsig", "readwrite").objectStore("categoriasAsig").add(elemento);
    };
}

function recuperarCategorias() {
    var request = indexedDB.open(dbName);

    request.onsuccess = function() {
        var db = event.target.result;
        var store = db.transaction("categorias", "readonly").objectStore('categorias');
        store.getAll().onsuccess = function (event) {
            alert(event.target.result);
            console.log(event.target.result)
        }
    } 
}

function recuperarActores() {
    var request = indexedDB.open(dbName);

    request.onsuccess = function() {
        var db = event.target.result;
        var store = db.transaction("actores", "readonly").objectStore('actores');
        store.getAll().onsuccess = function (event) {
            alert(event.target.result);
            console.log(event.target.result)
        }
    } 
}

function recuperarDirectores() {
    var request = indexedDB.open(dbName);
    request.onsuccess = function() {
        var db = event.target.result;
        var store = db.transaction("directores", "readonly").objectStore('directores');
        store.getAll().onsuccess = function (event) {
            alert(event.target.result);
            console.log(event.target.result)
        }
    }
}

function recuperarProducciones() {
    var request = indexedDB.open(dbName);
    request.onsuccess = function() {
        var db = event.target.result;
        var store = db.transaction("producciones", "readonly").objectStore('producciones');
        store.getAll().onsuccess = function (event) {
            alert(event.target.result);
            console.log(event.target.result)
        }
    }
}

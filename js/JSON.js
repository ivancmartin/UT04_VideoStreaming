"use strict";
function loadDoc() {
  
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      var obj;
      if (this.readyState == 4 && this.status == 200) {
        //console.log(this.response);
        var obj = JSON.parse(this.response);
        //console.log(obj);
        console.log(obj.VideoSystem)
        
        var arrayObj = obj.VideoSystem.Categorias;

        for (let i = 0; i < arrayObj.length; i++) {
          console.log("aqui");
          introducirElemento(arrayObj[i],1);
        }

        var arrayObj = obj.VideoSystem.Directores;

        for (let i = 0; i < arrayObj.length; i++) {
          console.log("aqui");
          introducirElemento(arrayObj[i],3);
        }

        var arrayObj = obj.VideoSystem.Actores;

        for (let i = 0; i < arrayObj.length; i++) {
          console.log("aqui");
          introducirElemento(arrayObj[i],2);
        }

        var arrayObj = obj.VideoSystem.Poducciones;

        for (let i = 0; i < arrayObj.length; i++) {
          console.log("aqui");
          introducirElemento(arrayObj[i],4);
        }
      
      }
      
    };
    xhttp.open("GET", "../UT04_VideoStreaming/json/registro.json", true);
    xhttp.send();
    
}

function crearDoc(){
  var categorias = [];
  var actores = [];
  var directores = [];
  var producciones = [];
  var usuarios = [];

  var request = indexedDB.open("VSystemDB");
  request.onsuccess = function() {
      var db = event.target.result;
      var store = db.transaction(["categorias","directores","actores","producciones","usuarios"]);
      
      // Desgraciadamente, todo sigue siendo asíncrono y lo que podría ser
      // un sencillo y lineal bucle se convierte en callbacks 
      var DdBb = store.objectStore('actores');
      DdBb.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          // cursor será truthy mientras haya elementos que procesar
          if (cursor) {
            actores.push(cursor.value)
            cursor.continue();
          }
      };

      var DdBb = store.objectStore('categorias');
      DdBb.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          // cursor será truthy mientras haya elementos que procesar
          if (cursor) {
              categorias.push(cursor.value)
              cursor.continue();
          }
      };

      var DdBb = store.objectStore('directores');
      DdBb.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          // cursor será truthy mientras haya elementos que procesar
          if (cursor) {
            directores.push(cursor.value)
            cursor.continue();
          }
      };

      var DdBb = store.objectStore('producciones');
      DdBb.openCursor().onsuccess = function(event) {
              var cursor = event.target.result;
              // cursor será truthy mientras haya elementos que procesar
              if (cursor) {
                  // En cursor.value tenemos el elemento actual
                  var current = cursor.value;
                  if (current.seasons === undefined) {
                    producciones.push(cursor.value)
                    cursor.continue();
              }else{
                cursor.continue();
              }
              
          };
      };

      var DdBb = store.objectStore('usuarios');
      DdBb.openCursor().onsuccess = function(event) {
              var cursor = event.target.result;
              // cursor será truthy mientras haya elementos que procesar
              if (cursor) {
                  // En cursor.value tenemos el elemento actual
                  var current = cursor.value;
                  if (current.seasons === undefined) {
                    usuarios.push(cursor.value)
                    cursor.continue();
              }else{
                cursor.continue();
              }
          };
      };

      store.oncomplete = function (event) {
        var dbActUsuaio = {
          VideoSystem:{
            Usuarios: getCookie("username"), 
            Categorias: categorias,
            Actores: actores,
            Directores: directores,
            Producciones: producciones
          }
        }

        
        var request = new XMLHttpRequest();
        var info = JSON.stringify(dbActUsuaio);

        request.open("POST","../UT04_VideoStreaming/json/generar.php", true);
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        request.send('info=' + info + "&" + "user=" + getCookie("username"));
        //window.location = "../UT04_VideoStreaming/json/generar.php?info=" + info;

    }
  }
}


/* crearDoc();   */




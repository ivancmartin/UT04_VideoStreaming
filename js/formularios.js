// inicio cookie

//comprueba si el usuario existe e inicia sesión
function compUsu(UName,pass){

    //console.log(usuario,pass);
    //var NewUsuario = new User(usuario,"",pass);

    //recorremos el iterador y mostramos los valores
    var usuarios = vSistem.users;
    var usuario = usuarios.next();
    var encontrado = false;
    while (usuario.done !== true){
        // console.log(usuario.value.name + " vs " + UName.value);
        //console.log(usuario.value.name.localeCompare(usuario));
        //console.log(usuario.value.password.localeCompare(pass));

        if (usuario.value.name === UName.value.trim() && usuario.value.password === pass.trim()) {
            encontrado = true;
            //console.log(encontrado);
            //console.log ("" + usuario.value.name);
        }

        usuario = usuarios.next();
    }

    var div = document.getElementById("msg");
    var opcion = document.getElementById("administrar");
    if (encontrado) {
        div.removeChild;

        //console.log(document.cookie);
        if (getCookie("username")=="") {
            //console.log(UName);
            setCookie(UName.value.trim(), pass);
            //console.log(getCookie("username"));
        }
        
        if(checkCookie()){
            var btnIni = document.getElementById("iniciar");
            btnIni.removeAttribute("data-target");
            var msg2 = document.createTextNode("Cerrar sesión");
            btnIni.replaceChild(msg2,btnIni.lastChild);
            btnIni.setAttribute("onclick","cerrarSes()");
            opcion.setAttribute("class","nav-item d-line");
            var username = document.getElementById("userName");
            username.innerHTML = "Bienvenido: " + UName.value.trim();
            $('#myModal').modal('hide');
        };

        div.innerHTML = "";
        var modal = document.getElementById("myModal");
        //modal.setAttribute("class","modal fade hide"); 
    }else{
        div.innerHTML = "No se encuentra la cuenta";
    }

}
//quita el nombre a la cookie (la "borra")
function cerrarSes() {
    var opcion = document.getElementById("administrar");
    if (checkCookie()) {
        setCookie("", "");
        var btnIni = document.getElementById("iniciar");
        var msg2 = document.createTextNode("Iniciar sesión");
        btnIni.replaceChild(msg2,btnIni.lastChild);
        btnIni.removeAttribute("onclick","cerrarSes()");
        btnIni.setAttribute("data-target","#myModal");
        opcion.setAttribute("class","nav-item d-none");
        var username = document.getElementById("userName");
        username.innerHTML = "";
        hideAll();
        showHomePage();
    }
    //console.log("existe prueba?: " + getCookie("prueba"))

}
//comprueba si la cookie existe
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
//comprueba la cookie
function checkCookie() {
    var username = getCookie("username");
    //console.log(username.localeCompare("prueba") === 0);
    if ((username.localeCompare("prueba") === 0)) {
        return true;
    } else {
        return false;
    }
}
//crea la cookie
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); //10 días
    var expires = "expires="+d.toUTCString();
    document.cookie = "username=" + cname + "; pass =" + cvalue + ";" + expires + ";path=/";
}
// Fin cookie

//muestra las operaciones y formularios para la edición de categorías, producciones...
function showAdmin(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var div_actions = document.createElement("div");
    div_actions.setAttribute("id","actions_list"); 
    div_actions.setAttribute("class","m-auto w-50 text-center");

    mainAdmin.appendChild(div_actions);

    //var operaciones = ["Categorías","Actores","Directores","producciones","Recursos"];

    var div_action = document.createElement("div");
    
    var h2Cat = document.createElement("h2");
    var catText = document.createTextNode("Categorías");
    h2Cat.appendChild(catText);
    div_action.appendChild(h2Cat);

    //categorias: añadir
    var aAd = document.createElement("a");
    aAd.setAttribute("class","d-block p-3 m-2");
    aAd.setAttribute("href","#");
    
    aAd.setAttribute("onclick","showAddCat()");               
    var nodeTex_actions = document.createTextNode("Catgorías: Añadir");
    //console.log ("Direct:" + Direct.name + ", Personaje: " + Direct.character + "\n");

    aAd.appendChild(nodeTex_actions);
    div_action.appendChild(aAd);

    //categorias:borrar
    div_actions.appendChild(div_action);

    var aB = document.createElement("a");
    aB.setAttribute("class","d-block p-3 m-2");
    aB.setAttribute("href","#");
    
    aB.setAttribute("onclick","showOpCat()");               
    var nodeTex_actions = document.createTextNode("Categorías: Borrar y Modificar");
    //console.log ("Direct:" + Direct.name + ", Personaje: " + Direct.character + "\n");

    aB.appendChild(nodeTex_actions);
    div_action.appendChild(aB); 

    var h2Act = document.createElement("h2");
    var actTex = document.createTextNode("Actores");
    h2Act.appendChild(actTex);
    div_action.appendChild(h2Act);

    //Actores: añadir
    var actAdd = document.createElement("a");
    actAdd.setAttribute("class","d-block p-3 m-2");
    actAdd.setAttribute("href","#");
    
    actAdd.setAttribute("onclick","showAddAct()");               
    var nodeTex_adAct = document.createTextNode("Actores: Añadir");

    actAdd.appendChild(nodeTex_adAct);
    div_action.appendChild(actAdd); 

    //Actores: borrar y editar
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showOpAct()");               
    var nodeTex_adAct = document.createTextNode("Actores: Modificar y borrar");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct); 

    
    div_actions.appendChild(div_action);

    var h2Act = document.createElement("h2");
    var actTex = document.createTextNode("Directores");
    h2Act.appendChild(actTex);
    div_action.appendChild(h2Act);

    //Actores: añadir
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showAddDir()");               
    var nodeTex_adAct = document.createTextNode("Directores: añadir");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct); 

    //Directores: borrar y editar
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showOpDir()");               
    var nodeTex_adAct = document.createTextNode("Directores: Modificar y borrar");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct); 

    /** */

    var h2Act = document.createElement("h2");
    var actTex = document.createTextNode("Producciones");
    h2Act.appendChild(actTex);
    div_action.appendChild(h2Act);

    //Películas: añadir
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showAddFilm()");               
    var nodeTex_adAct = document.createTextNode("Películas: añadir");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct); 

    //Series: añadir
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showAddSerie()");               
    var nodeTex_adAct = document.createTextNode("Series: añadir");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct);

    

    //Películas: borrar y editar
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","showDelPro()");               
    var nodeTex_adAct = document.createTextNode("Películas y series: borrar");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct);

    var h2Act = document.createElement("h2");
    var actTex = document.createTextNode("Base de datos");
    h2Act.appendChild(actTex);
    div_action.appendChild(h2Act);

    //generar db
    var delEditAct = document.createElement("a");
    delEditAct.setAttribute("class","d-block p-3 m-2");
    delEditAct.setAttribute("href","#");
    
    delEditAct.setAttribute("onclick","generarDoc()");               
    var nodeTex_adAct = document.createTextNode("Generar db");

    delEditAct.appendChild(nodeTex_adAct);
    div_action.appendChild(delEditAct);

    
}

//muestra las operaciones para las categorías
function showOpCat(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Buscar categoría");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar categoría... ");
    
    div.appendChild(h2);
    div.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Categoria");
    th_name.appendChild(name);

    var th_desc = document.createElement("th");
    var descrip = document.createTextNode("Descripción de la categoría");
    th_desc.appendChild(descrip);

    var th_delete = document.createElement("th");
    var dele = document.createTextNode("Eliminar");
    th_delete.appendChild(dele);

    var th_edit = document.createElement("th");
    var dele = document.createTextNode("Modificar");
    th_edit.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_desc);
    tr.appendChild(th_delete);
    tr.appendChild(th_edit);
    thead.appendChild(tr);

    table.appendChild(thead);
    div.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las categorías
    var tbody = rechargeTableCat();
    table.appendChild(tbody);

}

//añadir categorías
function showAddCat(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar categoría");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    form.setAttribute("method","post");
    form.setAttribute("onsubmit","return addCat()"); 
    //form.setAttribute("onsubmit","return false");

    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nombre para la categoría");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","ADesc");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Descripción para la categoría");

    //div con la información del error
    var divInfoDesc = document.createElement("div");
    divInfoDesc.setAttribute("class","d-none invalid-feedback");
    divInfoDesc.setAttribute("id","divInfoDesc");

    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoDesc);

    var btnAdd = document.createElement("input");
    btnAdd.setAttribute("type","submit");
    //btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value","Añadir");
    //btnAdd.addEventListener("click",function(){addCat(document.addForm.AName.value,document.addForm.ADesc.value)});
    var textNodeBtn = document.createTextNode("Añadir");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);

}

//recargamos la tabla de categorías
function rechargeTableCat(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //rellenamos el cuerpo de la tabla
    var categorias = vSistem.categories;
    var categoria = categorias.next();
    var contFila = 0;
    while (categoria.done !== true){
        
        var tr = document.createElement("tr");
    
        tr.setAttribute("id",contFila);
        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(categoria.value.name);
        tdNAme.appendChild(textName);

        var tdDesc = document.createElement("td");
        var textDesc = document.createTextNode(categoria.value.description);
        tdDesc.appendChild(textDesc);

        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",categoria.value.name);
        button_del.addEventListener("click",function(){eliminarCat(this.value)});

        var del = document.createElement("ion-icon");
        del.setAttribute("name","trash");

        button_del.appendChild(del);

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",categoria.value.name);
        button_edit.addEventListener("click",function(){showModCat(this.value)});
        
        var edit = document.createElement("ion-icon");
        edit.setAttribute("name","brush");

        button_edit.appendChild(edit);

        tdEdit.appendChild(button_edit);

        tr.appendChild(tdNAme);
        tr.appendChild(tdDesc);
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);

        categoria = categorias.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    
    return tbody;
}

//eliminamos la categoría
function eliminarCat(nameCAt){
    //recorremos el iterador y recojemos la categoría seleccionada
    var categorias = vSistem.categories;
    var categoria = categorias.next();
    var encontrado = false;

    while (categoria.done !== true && !encontrado){
        //console.log(categoria.value.name.localeCompare(nameCAt));
        if (categoria.value.name.localeCompare(nameCAt) === 0) { 
            encontrado = true;

            //console.log ("aqui " + categoria.value);
            var auxCat = new Category(categoria.value.name,categoria.value.description);
            //console.log(typeof auxCat);
            //console.log(auxCat);

            //recorremos el iterador y mostramos los valores
            var producciones = vSistem.getProductionsCategory(auxCat);
            //console.log(producciones.next());
            var produccion = producciones.next();
            while (produccion.done !== true){
                //console.log(produccion);
                vSistem.deassignCategory(auxCat,produccion.value);
                produccion = producciones.next();
            }

            vSistem.removeCategory(auxCat);
            borrarElementos("categorias",auxCat.name);
           
            //console.log((categoria.value.name.localeCompare(nameCAt) === 0));
        }else{
            categoria = categorias.next();
        }
    }

    $('#myModalAdv').modal('show');
    $('#myModalAdv').modal('handleUpdate');
    
    var h5Advert = document.getElementById("myModalAdvh5");
    var texth5 = document.createTextNode("Info:");
    //h5Advert.appendChild(texth5);
    //console.log(h5Advert);
    h5Advert.innerHTML = texth5.textContent;

    var msgAdvert = document.getElementById("myModalAdvMsg");
    msgAdvert.setAttribute("class","green");
    var msgh5 = document.createTextNode("operación realizada correctamente");
    msgAdvert.innerHTML = msgh5.textContent;

    categoriesMenuPopulate();
    rechargeTableCat();
    showOpCat();
}

//Editar categorías
function showModCat(nameCat){
    hideAll();

    //console.log(nameCat);
    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    mainAdmin.appendChild(div);

    //recorremos el iterador y recojemos la categoría seleccionada
    var categorias = vSistem.categories;
    var categoria = categorias.next();
    var encontrado = false;
    var cont = 0;
    while (categoria.done !== true && !encontrado){
        if (categoria.value.name.localeCompare(nameCat) === 0) { 
            encontrado = true;
            var auxCat = new Category(categoria.value.name,categoria.value.description);
        }else{
            categoria = categorias.next();
            cont++;
        }
    }

    //formulario para modificacion de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Modificar categoría");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.setAttribute("metoh","post");
    //form.setAttribute("onsubmit","modCat("+cont+")");

    //grupo 1
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group text-left");

    var spanName = document.createElement("div");
    spanName.innerHTML = "Nombre actual: " + auxCat.name;

    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nuevo nombre para la categoría");
    inputNamCAt.setAttribute("value",auxCat.name);

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(spanName);
    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group text-left");

    //var spanDesc = document.createElement("div");
    //spanDesc.innerHTML = "Descripción actual: " + auxCat.description;

    var inputDesCAt = document.createElement("textarea");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","ADesc");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.innerHTML = auxCat.description;
    inputDesCAt.setAttribute("placeholder","Nueva descripción para la categoría");
    
    //div con la información del error
    var divInfoDesc = document.createElement("div");
    divInfoDesc.setAttribute("class","d-none invalid-feedback");
    divInfoDesc.setAttribute("id","divInfoDesc");

    //formGroup1.appendChild(spanDesc);
    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoDesc);

    var btnAdd = document.createElement("input");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("value","Modificar");
    console.log(cont)
    btnAdd.setAttribute("onclick","modCat("+cont+")");
    

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(btnAdd);

    div.appendChild(form);
    div.appendChild(advert);

}

//Comprueba que se pueda añadir, si no lanza un modal con el error
function addCat() {
    
    var name = document.forms["addForm"]["AName"].value;
    var desc = document.forms["addForm"]["ADesc"].value;

    //console.log("aqui: "  + name + " " + desc);
    
    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesCAt = document.getElementById("inputDesCAt");
    var divInfoDesc = document.getElementById("divInfoDesc");

    //comprobar errores
    var validacion = true;
    if (name === "" ){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
        return false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (desc === "" ){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoDesc.setAttribute("class","invalid-feedback text-left");
        divInfoDesc.innerHTML = "El campo no puede estar vacío";
        validacion = false;
        return false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoDesc.setAttribute("class","d-none");
    }

    
    if (validacion) {
        try {
            
            var auxCat = new Category(name,desc);
            vSistem.addCategory(auxCat);
            introducirElemento(auxCat.getObject(),1);

            categoriesMenuPopulate();
            rechargeTableCat();
            showAddCat();
            //console.log("aqui: "  + name + " " + desc);
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            return false;

        } catch (error) {

            //console.log("aqui: "  + name + " " + desc);

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }
}

//modificar categoría
function modCat(cont){

    var name = document.forms["addForm"]["AName"].value;
    var desc = document.forms["addForm"]["ADesc"].value;
    
    //console.log("aqui: "  + name + " " + desc + "  " + cont);

    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesCAt = document.getElementById("inputDesCAt");
    var divInfoDesc = document.getElementById("divInfoDesc");

    //comprobar errores
    var validacion = true;
    if (name === ""){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (desc === ""){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoDesc.setAttribute("class","invalid-feedback text-left");
        divInfoDesc.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoDesc.setAttribute("class","d-none");
    }
    console.log(validacion)
    if (validacion) {

        try {
            console.log(validacion)
            /*revisar*/ 
            //recorremos el iterador y recojemos la categoría seleccionada
            var categorias = vSistem.categories;
            var categoria = categorias.next();
            var encontrado = false;
            var contador = 0; //selecionamos el indice concreto de la categoría
            while (categoria.done !== true && !encontrado){
                //console.log(categoria.value + " " + cont +  " " + contador)
                if (contador === cont) { 
                    encontrado = true;
                    borrarElementos("categorias",categoria.value.name);
                    categoria.value.name = name;
                    categoria.value.description = desc;
                    //console.log(name,desc);
                    var categoria = new Category(name,desc);
                    introducirElemento(categoria.getObject(),1);
                }else{
                    categoria = categorias.next();
                }
                contador++;
            }

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
        
        categoriesMenuPopulate();
        rechargeTableCat();
        showOpCat();
    }

    return false;

}

//formulario añadir actores
function showAddAct(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar Actor");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nombre del actor o actriz");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","AlastName1");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Primer apellido");

    //div con la información del error
    var divInfoAlastName1 = document.createElement("div");
    divInfoAlastName1.setAttribute("id","divInfoAlastName1");
    divInfoAlastName1.setAttribute("class","d-none invalid-feedback");

    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoAlastName1);

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","inputDesAct");
    inputDesAct.setAttribute("name","AlastName2");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","Segundo apellido");

    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group");

    var inputDesDate = document.createElement("input");
    inputDesDate.setAttribute("id","inputDesDate");
    inputDesDate.setAttribute("name","ADate");
    inputDesDate.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesDate.setAttribute("type","date");

    //div con la información del error
    var divInfoDesDate = document.createElement("div");
    divInfoDesDate.setAttribute("id","InfoDesDate");
    divInfoDesDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesDate); 
    formGroup4.appendChild(divInfoDesDate);

    // grupo 5
    var formGroup5 = document.createElement("div");
    formGroup5.setAttribute("class","form-group");

    var inputImg = document.createElement("input");
    inputImg.setAttribute("id","inputImg");
    inputImg.setAttribute("name","AImg");
    inputImg.setAttribute("class","form-control mb-2 mr-sm-2");
    inputImg.setAttribute("type","file");

    formGroup5.appendChild(inputImg);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value","add");
    btnAdd.addEventListener("click",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, document.addForm.AImg.value )});
    var textNodeBtn = document.createTextNode("Añadir");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    //grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Asignar producciones");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar producciones... ");
    
    formGroup6.appendChild(h2);
    formGroup6.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Produccion");
    th_name.appendChild(name);

    var th_per = document.createElement("th");
    var per = document.createTextNode("Personaje");
    th_per.appendChild(per);

    var th_prota = document.createElement("th");
    var prota = document.createTextNode("Protagonista");
    th_prota.appendChild(prota);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_per);
    tr.appendChild(th_prota);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup6.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableAct();
    table.appendChild(tbody);

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup5);
    form.appendChild(formGroup6);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);

}

//recargamos la tabla de produciones a asignar a los actores
function rechargeTableAct(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //rellenamos el cuerpo de la tabla
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var contFila = 0;
    while (produccion.done !== true){
        
        var tr = document.createElement("tr");
    
        tr.setAttribute("id",contFila);
        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(produccion.value.title);
        tdNAme.appendChild(textName);

        var tdDesc = document.createElement("td");
        var textDesc = document.createElement("input")
        textDesc.setAttribute("type","text");
        textDesc.setAttribute("maxlength","20");
        textDesc.setAttribute("class","w-100");
        textDesc.setAttribute("id","pj " + produccion.value.title);
        tdDesc.appendChild(textDesc);

        var prota = document.createElement("td");
        var inputProta = document.createElement("select");
        inputProta.setAttribute("id","prota " + produccion.value.title);

        var opcTrue = document.createElement("option");
        opcTrue.innerHTML = "Si";
        opcTrue.setAttribute("value","true");

        var opcFalse = document.createElement("option");
        opcFalse.innerHTML = "No";
        opcFalse.setAttribute("value","flase");

        inputProta.appendChild(opcFalse);
        inputProta.appendChild(opcTrue);

        prota.appendChild(inputProta);

        var select = document.createElement("td");
        var inputSelec = document.createElement("input");
        inputSelec.setAttribute("type","checkbox");
        inputSelec.setAttribute("class","checkbox");
        inputSelec.setAttribute("name",produccion.value.title);
        inputSelec.setAttribute("value",produccion.value.title);
        select.appendChild(inputSelec);

        tr.appendChild(tdNAme);
        tr.appendChild(tdDesc);
        tr.appendChild(prota);
        tr.appendChild(select);

        produccion = producciones.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}

//añadir actores
function addAct(name,lastName1,lastName2,aDate,img){
    
    var porElementos=document.getElementsByClassName("checkbox");
    //console.log(porElementos);

    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesDate = document.getElementById("inputDesDate");
    var InfoDesDate = document.getElementById("InfoDesDate");

    var divInfoAlastName1 = document.getElementById("divInfoAlastName1");
    var inputDesCAt = document.getElementById("inputDesCAt");

    //comprobar errores
    var validacion = true;
    if (name === "" ){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (lastName1 === "" ){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","invalid-feedback text-left");
        divInfoAlastName1.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","d-none");
    }

    if (aDate === "" ){
        inputDesDate.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        InfoDesDate.setAttribute("class","invalid-feedback text-left");
        InfoDesDate.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesDate.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        InfoDesDate.setAttribute("class","d-none");
    }

    if (validacion) {
        try {

            var Ndate = new Date(aDate);
            var auxAct = new Person(name,lastName1,lastName2,Ndate,img);
            vSistem.addActor(auxAct);
            introducirElemento(auxAct.getObject(),2);
            //vSistem.assignActor(actor1,serie1,"El Personaje",false)

            //recorremos el iterador y mostramos los valores
            var producciones = vSistem.productions;
            var produccion = producciones.next();
            while (produccion.done !== true){
                for (let i = 0; i < porElementos.length; i++) {
                    //console.log (produccion.value.title );
                    if((porElementos[i].checked) && (porElementos[i].value === produccion.value.title) ){
                        
                        //comprobamos si es protagonista
                        var pjInput = document.getElementById("pj " + produccion.value.title).value;
                        //console.log(pjInput);

                        //comprobamos si es protagonista
                        var protaInput = document.getElementById("prota " + produccion.value.title);
                        var siProta = protaInput.options[protaInput.selectedIndex].value;
                        //console.log(siProta);
                        
                        vSistem.assignActor(auxAct,produccion.value,pjInput,siProta);
                        //console.log (produccion.value.toString() );
                    }
                }
                
                produccion = producciones.next();
            }

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            categoriesMenuPopulate();
            showAddAct();

            return false;

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }
}
//muestra las operaciones para los actores
function showOpAct(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Buscar actor");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar actor... ");
    
    div.appendChild(h2);
    div.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Nombre");
    th_name.appendChild(name);

    var th_lastname = document.createElement("th");
    var lastname = document.createTextNode("1º Apellido");
    th_lastname.appendChild(lastname);

    /*
    var th_date = document.createElement("th");
    var date = document.createTextNode("2º Apellido");
    th_date.appendChild(date);
    */
    var th_delete = document.createElement("th");
    var dele = document.createTextNode("Eliminar");
    th_delete.appendChild(dele);

    var th_edit = document.createElement("th");
    var dele = document.createTextNode("Modificar");
    th_edit.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_lastname);
    //tr.appendChild(th_date);
    tr.appendChild(th_delete);
    tr.appendChild(th_edit);
    thead.appendChild(tr);

    table.appendChild(thead);
    div.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las categorías
    var tbody = rechargeTableActors();
    table.appendChild(tbody);

}
//recargamos la tabla de actores
function rechargeTableActors(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;
    //rellenamos el cuerpo de la tabla
    var actores = vSistem.actors;
    var actor = actores.next();
    while (actor.done !== true){
        
        var tr = document.createElement("tr");
        tr.setAttribute("id",contFila);

        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(actor.value.name);
        tdNAme.appendChild(textName);

        var tdLastName = document.createElement("td");
        var textLastName1 = document.createTextNode(actor.value.lastName1);
        tdLastName.appendChild(textLastName1);
        /*
        var tdDate = document.createElement("td");
        var textDate = document.createTextNode(actor.value.lastName2);
        tdDate.appendChild(textDate);
        */
        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",actor.value.name);
        button_del.addEventListener("click",function(){eliminarAct(this.value)});

        var del = document.createElement("ion-icon");
        del.setAttribute("name","trash");

        button_del.appendChild(del);

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",actor.value.name);
        button_edit.addEventListener("click",function(){showModAct(this.value)});

        var edit = document.createElement("ion-icon");
        edit.setAttribute("name","brush");

        button_edit.appendChild(edit);

        tr.appendChild(tdNAme);
        tr.appendChild(tdLastName);
        //tr.appendChild(tdDate);
        
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);

        actor = actores.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//eliminamos la categoría
function eliminarAct(nameAct){
    //recorremos el iterador y recojemos la categoría seleccionada
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        //console.log(actor.value.name.localeCompare(nameAct));
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;

            //console.log ("aqui " + actor.value);
            var auxAct = actor.value;
            //console.log(typeof auxAct);
            //console.log(auxAct);

            vSistem.removeActor(actor.value);
            borrarElementos("actores",nameAct);
        }else{
            actor = actores.next();
        }
    }

    $('#myModalAdv').modal('show');
    $('#myModalAdv').modal('handleUpdate');
    
    var h5Advert = document.getElementById("myModalAdvh5");
    var texth5 = document.createTextNode("Info:");
    //h5Advert.appendChild(texth5);
    //console.log(h5Advert);
    h5Advert.innerHTML = texth5.textContent;

    var msgAdvert = document.getElementById("myModalAdvMsg");
    msgAdvert.setAttribute("class","green");
    var msgh5 = document.createTextNode("operación realizada correctamente");
    msgAdvert.innerHTML = msgh5.textContent;

    rechargeTableActors();
    showOpAct();
}
//Editar actores
function showModAct(nameAct){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    //recorremos el iterador y recojemos la categoría seleccionada
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        //console.log(actor.value.name.localeCompare(nameAct));
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            //console.log ("aqui " + actor.value);
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar Actor");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nombre del actor o actriz");
    inputNamCAt.setAttribute("value",auxAct.name);

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","AlastName1");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Primer apellido");
    inputDesCAt.setAttribute("value",auxAct.lastName1);

    //div con la información del error
    var divInfoAlastName1 = document.createElement("div");
    divInfoAlastName1.setAttribute("id","divInfoAlastName1");
    divInfoAlastName1.setAttribute("class","d-none invalid-feedback");

    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoAlastName1);

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","inputDesAct");
    inputDesAct.setAttribute("name","AlastName2");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","Segundo apellido");
    inputDesAct.setAttribute("value",auxAct.lastName2);
    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group");

    var inputDesDate = document.createElement("input");
    inputDesDate.setAttribute("id","inputDesDate");
    inputDesDate.setAttribute("name","ADate");
    inputDesDate.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesDate.setAttribute("type","date");
    inputDesDate.setAttribute("value",auxAct.born);

    inputDesDate.valueAsDate = new Date(auxAct.born);
    //div con la información del error
    var divInfoDesDate = document.createElement("div");
    divInfoDesDate.setAttribute("id","InfoDesDate");
    divInfoDesDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesDate); 
    formGroup4.appendChild(divInfoDesDate);

    // grupo 5
    var formGroup5 = document.createElement("div");
    formGroup5.setAttribute("class","form-group");

    var inputImg = document.createElement("input");
    inputImg.setAttribute("id","inputImg");
    inputImg.setAttribute("name","AImg");
    inputImg.setAttribute("class","form-control mb-2 mr-sm-2");
    inputImg.setAttribute("type","file");
    inputImg.setAttribute("values",auxAct.picture);

    formGroup5.appendChild(inputImg);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value",auxAct.name);
    btnAdd.addEventListener("click",function(){modAct(this.value)});
    var textNodeBtn = document.createTextNode("Modificar");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    //grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Modificar producciones asignadas");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar producciones... ");
    
    formGroup6.appendChild(h2);
    formGroup6.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Produccion");
    th_name.appendChild(name);

    var th_per = document.createElement("th");
    var per = document.createTextNode("Personaje");
    th_per.appendChild(per);

    var th_prota = document.createElement("th");
    var prota = document.createTextNode("Protagonista");
    th_prota.appendChild(prota);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_per);
    tr.appendChild(th_prota);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup6.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableConAct(auxAct.name);
    table.appendChild(tbody);

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup5);
    form.appendChild(formGroup6);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);
}
//recargamos la tabla de produciones a asignadas a un actor concreto
function rechargeTableConAct(nameAct){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //recorremos el iterador y recogemos la categoría seleccionada
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    //console.log("aquí");
    //rellenamos el cuerpo de la tabla
    var actores = vSistem.getProductionsActor(auxAct);
    var actor = actores.next();
    var contFila = 0;
    //console.log(actor);
    while (actor.done !== true){
        
        var tr = document.createElement("tr");
    
        tr.setAttribute("id",contFila);
        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(actor.production.title);
        tdNAme.appendChild(textName);

        var tdDesc = document.createElement("td");
        var textDesc = document.createElement("input")
        textDesc.setAttribute("type","text");
        textDesc.setAttribute("maxlength","20");
        textDesc.setAttribute("class","w-100");
        textDesc.setAttribute("id","pj " + actor.production.title);
        textDesc.setAttribute("value",actor.character);
        tdDesc.appendChild(textDesc);

        var prota = document.createElement("td");
        var inputProta = document.createElement("select");
        inputProta.setAttribute("id","prota " + actor.production.title);
    
        var opcTrue = document.createElement("option");
        opcTrue.innerHTML = "Si";
        opcTrue.setAttribute("value","true");

        var opcFalse = document.createElement("option");
        opcFalse.innerHTML = "No";
        opcFalse.setAttribute("value","flase");

        if (actor.main == true) {
            inputProta.appendChild(opcTrue);
            inputProta.appendChild(opcFalse);
        }else{
            inputProta.appendChild(opcFalse);
            inputProta.appendChild(opcTrue);
        }

        prota.appendChild(inputProta);
        

        var select = document.createElement("td");
        var inputSelec = document.createElement("input");
        inputSelec.setAttribute("type","checkbox");
        inputSelec.setAttribute("class","checkbox");
        inputSelec.setAttribute("name",actor.production.title);
        inputSelec.setAttribute("value",actor.production.title);
        select.appendChild(inputSelec);

        tr.appendChild(tdNAme);
        tr.appendChild(tdDesc);
        tr.appendChild(prota);
        tr.appendChild(select);

        actor = actores.next();
        tbody.appendChild(tr);

        contFila++;
    }

    return tbody;
}
//modificar actores
function modAct(nameAct){

    var name = document.forms["addForm"]["AName"].value;
    var lastName1 = document.forms["addForm"]["AlastName1"].value;
    var lastName2 = document.forms["addForm"]["AlastName2"].value;
    var born = document.forms["addForm"]["ADate"].value;
    var img = document.forms["addForm"]["inputImg"].value;
    
    //console.log("aqui: "  + name + " " + lastName1 + "  " + lastName2 + " " + born + " " + img);

    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesCAt = document.getElementById("inputDesCAt");
    var divInfoAlastName1 = document.getElementById("divInfoAlastName1");

    var inputDesDate= document.getElementById("inputDesDate");
    var divInfoDate = document.getElementById("InfoDesDate");

    //comprobar errores
    var validacion = true;
    if (name === ""){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (lastName1 === ""){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","invalid-feedback text-left");
        divInfoAlastName1.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","d-none");
    }

    if (lastName2 === ""){
        inputDesDate.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoDate.setAttribute("class","invalid-feedback text-left");
        divInfoDate.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesDate.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoDate.setAttribute("class","d-none");
    }

    if (validacion) {

        try {
            //console.log(validacion);
            var actores = vSistem.actors;
            var actor = actores.next();
            var encontrado = false;
            while (actor.done !== true && !encontrado){
                if (actor.value.name.localeCompare(nameAct) === 0) { 
                    encontrado = true;

                    borrarElementos("actores",actor.value.name);
                    //console.log(auxAct);
                    actor.value.name = name;
                    actor.value.lastName1 = lastName1;
                    actor.value.lastName2 = lastName2;
                    actor.value.born = new Date(born);
                    if(img !== "") actor.value.picture = img;

                    var actor = new Person(name,lastName1,lastName2, new Date(born),img);
                    introducirElemento(actor.getObject(),2);
                    
                }else{
                    actor = actores.next();
                }
            }

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            showOpAct();
        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }

    return false;

}
//modificar directores
function showOpDir(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Buscar director");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar director... ");
    
    div.appendChild(h2);
    div.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Nombre");
    th_name.appendChild(name);

    var th_lastname = document.createElement("th");
    var lastname = document.createTextNode("1º Apellido");
    th_lastname.appendChild(lastname);

    var th_date = document.createElement("th");
    var date = document.createTextNode("Fecha");
    th_date.appendChild(date);

    var th_delete = document.createElement("th");
    var dele = document.createTextNode("Eliminar");
    th_delete.appendChild(dele);

    var th_edit = document.createElement("th");
    var dele = document.createTextNode("Modificar");
    th_edit.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_lastname);
    tr.appendChild(th_date);
    tr.appendChild(th_delete);
    tr.appendChild(th_edit);
    thead.appendChild(tr);

    table.appendChild(thead);
    div.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las categorías
    var tbody = rechargeTableDirectors();
    table.appendChild(tbody);

}
//eliminamos la directores
function eliminarDirec(nameAct){
    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){
        //console.log ("" + director.value);
        director = directores.next();
    }

    //recorremos el iterador y recojemos la categoría seleccionada
    var directores = vSistem.directors;
    var director = directores.next();
    var encontrado = false;
    while (director.done !== true && !encontrado){
        //console.log(director.value.name.localeCompare(nameAct));
        if (director.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;

            //console.log ("aqui " + director.value);
            var auxAct = director.value;
            //console.log(typeof auxAct);
            //console.log(auxAct);

            vSistem.removeDirector(director.value);
            borrarElementos("directores",nameAct);

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;
        }else{
            director = directores.next();
        }
    }

    showOpDir();
}
//Editar direcores
function showModDir(nameAct){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    //recorremos el iterador y recojemos la categoría seleccionada
    var directores = vSistem.directors;
    var director = directores.next();
    var encontrado = false;
    while (director.done !== true && !encontrado){
        //console.log(director.value.name.localeCompare(nameAct));
        if (director.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            //console.log ("aqui " + director.value);
            var auxAct = director.value;
        }else{
            director = directores.next();
        }
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showOpDir()")
    var volver = document.createTextNode("volver a administración de directores");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Modificar director");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nombre del director/ra");
    inputNamCAt.setAttribute("value",auxAct.name);

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","AlastName1");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Primer apellido");
    inputDesCAt.setAttribute("value",auxAct.lastName1);

    //div con la información del error
    var divInfoAlastName1 = document.createElement("div");
    divInfoAlastName1.setAttribute("id","divInfoAlastName1");
    divInfoAlastName1.setAttribute("class","d-none invalid-feedback");

    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoAlastName1);

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","inputDesAct");
    inputDesAct.setAttribute("name","AlastName2");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","Segundo apellido");
    inputDesAct.setAttribute("value",auxAct.lastName2);
    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group");

    var inputDesDate = document.createElement("input");
    inputDesDate.setAttribute("id","inputDesDate");
    inputDesDate.setAttribute("name","ADate");
    inputDesDate.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesDate.setAttribute("type","date");
    inputDesDate.setAttribute("value",auxAct.born);

    inputDesDate.valueAsDate = new Date(auxAct.born);
    //div con la información del error
    var divInfoDesDate = document.createElement("div");
    divInfoDesDate.setAttribute("id","InfoDesDate");
    divInfoDesDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesDate); 
    formGroup4.appendChild(divInfoDesDate);

    // grupo 5
    var formGroup5 = document.createElement("div");
    formGroup5.setAttribute("class","form-group");

    var inputImg = document.createElement("input");
    inputImg.setAttribute("id","inputImg");
    inputImg.setAttribute("name","AImg");
    inputImg.setAttribute("class","form-control mb-2 mr-sm-2");
    inputImg.setAttribute("type","file");
    inputImg.setAttribute("values",auxAct.picture);

    formGroup5.appendChild(inputImg);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value",auxAct.name);
    btnAdd.addEventListener("click",function(){modDir(this.value)});
    var textNodeBtn = document.createTextNode("Modificar");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    //grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Modificar producciones asignadas");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar producciones... ");
    
    formGroup6.appendChild(h2);
    formGroup6.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Produccion");
    th_name.appendChild(name);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Desasignar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup6.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableConDir(auxAct.name);
    table.appendChild(tbody);

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup5);
    form.appendChild(btnAdd);
    form.appendChild(formGroup6);
    div.appendChild(form);
    div.appendChild(advert);
}
function modDir(dir){

    var name = document.forms["addForm"]["AName"].value;
    var lastName1 = document.forms["addForm"]["AlastName1"].value;
    var lastName2 = document.forms["addForm"]["AlastName2"].value;
    var born = document.forms["addForm"]["ADate"].value;
    var img = document.forms["addForm"]["inputImg"].value;
    
    //console.log("aqui: "  + name + " " + lastName1 + "  " + lastName2 + " " + born + " " + img);

    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesCAt = document.getElementById("inputDesCAt");
    var divInfoAlastName1 = document.getElementById("divInfoAlastName1");

    var inputDesDate= document.getElementById("inputDesDate");
    var divInfoDate = document.getElementById("InfoDesDate");

    //comprobar errores
    var validacion = true;
    if (name === ""){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (lastName1 === ""){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","invalid-feedback text-left");
        divInfoAlastName1.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","d-none");
    }

    if (lastName2 === ""){
        inputDesDate.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoDate.setAttribute("class","invalid-feedback text-left");
        divInfoDate.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesDate.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoDate.setAttribute("class","d-none");
    }

    if (validacion) {

        try {
            //console.log(validacion);
            var actores = vSistem.directors;
            var actor = actores.next();
            var encontrado = false;
            while (actor.done !== true && !encontrado){
                if (actor.value.name.localeCompare(dir) === 0) { 
                    encontrado = true;

                    borrarElementos("directores",actor.value.name);
                    //console.log(auxAct);
                    actor.value.name = name;
                    actor.value.lastName1 = lastName1;
                    actor.value.lastName2 = lastName2;
                    actor.value.born = new Date(born);
                    if(img !== "") actor.value.picture = img;

                    var actor = new Person(name,lastName1,lastName2, new Date(born),img);
                    introducirElemento(actor.getObject(),3);
                    
                }else{
                    actor = actores.next();
                }
            }

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            showOpDir();
        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }

    return false;

}

//recargamos la tabla de actores
function rechargeTableDirectors(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;
    //rellenamos el cuerpo de la tabla
    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){
        
        var tr = document.createElement("tr");
        tr.setAttribute("id",contFila);

        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(director.value.name);
        tdNAme.appendChild(textName);

        var tdLastName = document.createElement("td");
        var textLastName1 = document.createTextNode(director.value.lastName1);
        tdLastName.appendChild(textLastName1);

        var tdDate = document.createElement("td");
        var textDate = document.createTextNode(director.value.born);
        tdDate.appendChild(textDate);

        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",director.value.name);
        button_del.addEventListener("click",function(){eliminarDirec(this.value)});

        var del = document.createElement("ion-icon");
        del.setAttribute("name","trash");

        button_del.appendChild(del);

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",director.value.name);
        button_edit.addEventListener("click",function(){showModDir(this.value)});

        var edit = document.createElement("ion-icon");
        edit.setAttribute("name","brush");

        button_edit.appendChild(edit);

        tr.appendChild(tdNAme);
        tr.appendChild(tdLastName);
        tr.appendChild(tdDate);
        
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);

        director = directores.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//formulario añadir directores
function showAddDir(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar director");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","inputNamCAt");
    inputNamCAt.setAttribute("name","AName");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","Nombre del director/ra");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoName");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputDesCAt");
    inputDesCAt.setAttribute("name","AlastName1");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Primer apellido");

    //div con la información del error
    var divInfoAlastName1 = document.createElement("div");
    divInfoAlastName1.setAttribute("id","divInfoAlastName1");
    divInfoAlastName1.setAttribute("class","d-none invalid-feedback");

    formGroup2.appendChild(inputDesCAt); 
    formGroup2.appendChild(divInfoAlastName1);

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","inputDesAct");
    inputDesAct.setAttribute("name","AlastName2");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","Segundo apellido");

    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group");

    var inputDesDate = document.createElement("input");
    inputDesDate.setAttribute("id","inputDesDate");
    inputDesDate.setAttribute("name","ADate");
    inputDesDate.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesDate.setAttribute("type","date");

    //div con la información del error
    var divInfoDesDate = document.createElement("div");
    divInfoDesDate.setAttribute("id","InfoDesDate");
    divInfoDesDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesDate); 
    formGroup4.appendChild(divInfoDesDate);

    // grupo 5
    var formGroup5 = document.createElement("div");
    formGroup5.setAttribute("class","form-group");

    var inputImg = document.createElement("input");
    inputImg.setAttribute("id","inputImg");
    inputImg.setAttribute("name","AImg");
    inputImg.setAttribute("class","form-control mb-2 mr-sm-2");
    inputImg.setAttribute("type","file");

    formGroup5.appendChild(inputImg);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value","add");
    btnAdd.addEventListener("click",function(){addDirect(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, document.addForm.AImg.value )});
    var textNodeBtn = document.createTextNode("Añadir");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    //grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Asignar producciones");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar producciones... ");
    
    formGroup6.appendChild(h2);
    formGroup6.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Produccion");
    th_name.appendChild(name);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup6.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableDire();
    table.appendChild(tbody);

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup5);
    form.appendChild(formGroup6);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);

}
//recargamos la tabla de produciones a asignar a los directores
function rechargeTableDire(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //rellenamos el cuerpo de la tabla
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var contFila = 0;
    while (produccion.done !== true){
        
        var tr = document.createElement("tr");
    
        tr.setAttribute("id",contFila);
        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(produccion.value.title);
        tdNAme.appendChild(textName);

        var select = document.createElement("td");
        var inputSelec = document.createElement("input");
        inputSelec.setAttribute("type","checkbox");
        inputSelec.setAttribute("class","checkbox");
        inputSelec.setAttribute("name",produccion.value.title);
        inputSelec.setAttribute("value",produccion.value.title);
        select.appendChild(inputSelec);

        tr.appendChild(tdNAme);
        tr.appendChild(select);

        produccion = producciones.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//añadir actores
function addDirect(name,lastName1,lastName2,aDate,img){
    
    var porElementos=document.getElementsByClassName("checkbox");
    //console.log(porElementos);

    var inputNamCAt = document.getElementById("inputNamCAt");
    var divInfoName = document.getElementById("divInfoName");

    var inputDesDate = document.getElementById("inputDesDate");
    var InfoDesDate = document.getElementById("InfoDesDate");

    var divInfoAlastName1 = document.getElementById("divInfoAlastName1");
    var inputDesCAt = document.getElementById("inputDesCAt");

    //comprobar errores
    var validacion = true;
    if (name === "" ){
        inputNamCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","invalid-feedback text-left");
        divInfoName.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputNamCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoName.setAttribute("class","d-none");
    }

    if (lastName1 === "" ){
        inputDesCAt.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","invalid-feedback text-left");
        divInfoAlastName1.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesCAt.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoAlastName1.setAttribute("class","d-none");
    }

    if (aDate === "" ){
        inputDesDate.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        InfoDesDate.setAttribute("class","invalid-feedback text-left");
        InfoDesDate.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        inputDesDate.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        InfoDesDate.setAttribute("class","d-none");
    }

    if (validacion) {
        try {

            var Ndate = new Date(aDate);
            var auxAct = new Person(name,lastName1,lastName2,Ndate,img);
            vSistem.addDirector(auxAct);
            introducirElemento(auxAct.getObject(),3)

            //vSistem.assignActor(actor1,serie1,"El Personaje",false)

            //recorremos el iterador y mostramos los valores
            var producciones = vSistem.productions;
            var produccion = producciones.next();
            while (produccion.done !== true){
                for (let i = 0; i < porElementos.length; i++) {
                    //console.log (produccion.value.title );
                    if((porElementos[i].checked) && (porElementos[i].value === produccion.value.title) ){
                        vSistem.assignDirector(auxAct,produccion.value);
                        //console.log (produccion.value.toString() );
                    }
                }
                
                produccion = producciones.next();
            }

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            categoriesMenuPopulate();
            showAddDir();

            return false;

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }
}
//recargamos la tabla de produciones a asignadas a un actor concreto
function rechargeTableConDir(nameAct){

    var arryP = [];

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //recorremos el iterador y recogemos la categoría seleccionada
    var actores = vSistem.directors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    
    //console.log("aquí");
    //rellenamos el cuerpo de la tabla
    var actores = vSistem.getProductionsDirector(auxAct);
    var actor = actores.next();
    var contFila = 0;
    //console.log(actor);
    while (actor.done !== true){
        console.log(actor);
       
        if (actor.production === null){
            actor.done = true;
        }else{
            var title = actor.production.title; 
            /*
            var tr = document.createElement("tr");
        
            tr.setAttribute("id",contFila);
            var tdNAme = document.createElement("td");
            var textName = document.createTextNode(actor.production.title);
            
            
            tdNAme.appendChild(textName);

            var select = document.createElement("td");
            var button_del = document.createElement("a");
            button_del.setAttribute("href","#");
            var texta = document.createTextNode("desasignar");
            button_del.appendChild(texta);
            select.appendChild(button_del);
            button_del.setAttribute("title",actor.production.title);
            button_del.setAttribute("id",auxAct.name);
            
            button_del.addEventListener("click",function(){deassignDirector(this.title,this.id)});

            tr.appendChild(tdNAme);
            tr.appendChild(select);

            
            tbody.appendChild(tr);
            */
            actor = actores.next();
            arryP.push(title); 
            contFila++;
        }
    }

    //console.log(arryP);

    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    
    while (produccion.done !== true){
        //console.log(produccion.value.title);
        var title = produccion.value.title;
        var coniciden = false

        for (let i = 0; i < arryP.length && !coniciden ; i++) {
            //console.log(title + " " + arryP[i] + " " + (title.localeCompare(arryP[i]) !== 0));
            if (title.localeCompare(arryP[i]) === 0) coniciden = true;
        }    
            if (coniciden) { 
                
                var tr = document.createElement("tr");
    
                tr.setAttribute("id",contFila);
                var tdNAme = document.createElement("td");
                var textName = document.createTextNode(title);
                tdNAme.appendChild(textName);

                var select = document.createElement("td");
                var button_del = document.createElement("a");
                button_del.setAttribute("href","#");
                var texta = document.createTextNode("desasignar");
                button_del.appendChild(texta);
                select.appendChild(button_del);
                button_del.setAttribute("id",title);
                button_del.setAttribute("title",auxAct.name);
                
                button_del.addEventListener("click",function(){deassignDirector(this.id,this.title)});

                tr.appendChild(tdNAme);
                tr.appendChild(select);

                actor = actores.next();
                tbody.appendChild(tr);

            }else{

                var tr = document.createElement("tr");
    
                tr.setAttribute("id",contFila);
                var tdNAme = document.createElement("td");
                var textName = document.createTextNode(title);
                tdNAme.appendChild(textName);

                var select = document.createElement("td");
                select.setAttribute("class","asignar");
                var button_del = document.createElement("a");
                button_del.setAttribute("href","#");
                var texta = document.createTextNode("Asignar");
                button_del.appendChild(texta);
                select.appendChild(button_del);
                button_del.setAttribute("id",title);
                button_del.setAttribute("title",auxAct.name);
                button_del.setAttribute("class","asignar");
                
                button_del.addEventListener("click",function(){assignDirector(this.id,this.title)});

                tr.appendChild(tdNAme);
                tr.appendChild(select);

                actor = actores.next();
                tbody.appendChild(tr);
            }

            contFila++;
            var produccion = producciones.next();
        }
    return tbody;
}
//funcion para desasignar directores a producciones
function deassignDirector(proTitle,director){
    //console.log("desasignando: " + proTitle + " " + director)
    //recojemos el actor
    var actores = vSistem.directors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(director) === 0) { 
            encontrado = true;
            
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        
        if (produccion.value.title.localeCompare(proTitle) === 0) { 
            encontrado = true;
            //console.log(produccion.value);
            //console.log(vSistem.desassignDirector(auxAct,produccion.value));
        }else{
            produccion = producciones.next();
        }
    }


    showModDir(director);
}
//funcion para asasignar directores a producciones
function assignDirector(proTitle,director){
    //console.log("asignando: " + proTitle + " " + director)
    //recojemos el actor
    var actores = vSistem.directors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(director) === 0) { 
            encontrado = true;
            
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    //recojemos la produccion
    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        
        if (produccion.value.title.localeCompare(proTitle) === 0) { 
            encontrado = true;
            //console.log(vSistem.assignDirector(auxAct,produccion.value));
        }else{
            produccion = producciones.next();
        }
    }


    showModDir(director);
}
//formulario añadir producciones: peliculas
function showAddFilm(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar pelicula");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    //grupo1
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","pTilte");
    inputNamCAt.setAttribute("name","pTilte");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","título de la película");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divPTilte");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputNation");
    inputDesCAt.setAttribute("name","inputNation");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Nacionalidad");
    
    formGroup2.appendChild(inputDesCAt); 

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","synopsis");
    inputDesAct.setAttribute("name","synopsis");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","synopsis");

    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group text-left");

    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("fecha de publicación");
    labelPub.appendChild(lblText);
    formGroup4.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","publi");
    inputDesAct.setAttribute("name","publi");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","date");

    //div con la información del error
    var divDate = document.createElement("div");
    divDate.setAttribute("id","divInfoPubli");
    divDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesAct);
    formGroup4.appendChild(divDate);

    // grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group text-left");

    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("Imágen del recurso");
    labelPub.appendChild(lblText);
    formGroup6.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","img");
    inputDesAct.setAttribute("name","img");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","file");

    formGroup6.appendChild(inputDesAct);

    // grupo 7
    var formGroup7 = document.createElement("div");
    formGroup7.setAttribute("class","form-group text-left");
    //link
    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("recurso");
    labelPub.appendChild(lblText);
    formGroup7.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","url");
    inputDesAct.setAttribute("name","url");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","file");

    //div con la información del error
    var divInfoUrl = document.createElement("div");
    divInfoUrl.setAttribute("id","divInfoUrl");
    divInfoUrl.setAttribute("class","d-none invalid-feedback");

    formGroup7.appendChild(inputDesAct);
    formGroup7.appendChild(divInfoUrl);

    //audios
    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("audio del recurso");
    labelPub.appendChild(lblText);
    formGroup7.appendChild(labelPub);

    var inputDesAct = document.createElement("select");
    inputDesAct.setAttribute("id","audio");
    inputDesAct.setAttribute("name","audio");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("multiple","");

    //recorremos el iterador y mostramos los valores
    
    var audios = ["español","Ingles","Italiano","Francés"];
    for (let i = 0; i < audios.length; i++) {
        var opc = document.createElement("option");
        var value = document.createTextNode(audios[i]);
        opc.appendChild(value);
        opc.setAttribute("value",audios[i]);
        inputDesAct.appendChild(opc);
    }

    //subtitulos
    formGroup7.appendChild(inputDesAct);

    var labelPub2 = document.createElement("label");
    var lblText2 = document.createTextNode("subtitulos del recurso");
    labelPub2.appendChild(lblText2);
    formGroup7.appendChild(labelPub2);

    var inputDesAct2 = document.createElement("select");
    inputDesAct2.setAttribute("id","sub");
    inputDesAct2.setAttribute("name","sub");
    inputDesAct2.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct2.setAttribute("multiple","");

    //recorremos el iterador y mostramos los valores
    
    var subti = ["español","Ingles","Italiano","Francés"];
    for (let i = 0; i < subti.length; i++) {
        var opc = document.createElement("option");
        var value = document.createTextNode(subti[i]);
        opc.appendChild(value);
        opc.setAttribute("value",subti[i]);
        inputDesAct2.appendChild(opc);
    }

    formGroup7.appendChild(inputDesAct2);

    //duración
    var labelPub2 = document.createElement("label");
    var lblText2 = document.createTextNode("duración del recurso(segundos)");
    labelPub2.appendChild(lblText2);
    formGroup7.appendChild(labelPub2);

    var inputDesAct2 = document.createElement("input");
    inputDesAct2.setAttribute("id","durac");
    inputDesAct2.setAttribute("name","durac");
    inputDesAct2.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct2.setAttribute("type","number");
    inputDesAct2.setAttribute("min","0");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divInfoDur");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup7.appendChild(inputDesAct2);
    formGroup7.appendChild(divInfoName);

    //grupo 8
    var formGroup8 = document.createElement("div");
    formGroup8.setAttribute("class","form-group text-left");

    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("coordenadas");
    labelPub.appendChild(lblText);
    formGroup8.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","coor");
    inputDesAct.setAttribute("name","coor");
    inputDesAct.setAttribute("placeholder","0,-5");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");

    formGroup8.appendChild(inputDesAct);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value","add");
    btnAdd.addEventListener("click",function(){addFilm()});
    var textNodeBtn = document.createTextNode("Añadir");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup6);
    form.appendChild(formGroup7);
    form.appendChild(formGroup8);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);
}
//formulario añadir producciones: Series
function showAddSerie(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("Insertar pelicula");
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");
    
    var formGroup1 = document.createElement("div");
    formGroup1.setAttribute("class","form-group");
    
    //grupo1
    var inputNamCAt = document.createElement("input");
    inputNamCAt.setAttribute("id","pTilte");
    inputNamCAt.setAttribute("name","pTilte");
    inputNamCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputNamCAt.setAttribute("type","text");
    inputNamCAt.setAttribute("placeholder","título de la película");

    //div con la información del error
    var divInfoName = document.createElement("div");
    divInfoName.setAttribute("id","divPTilte");
    divInfoName.setAttribute("class","d-none invalid-feedback");

    formGroup1.appendChild(inputNamCAt);
    formGroup1.appendChild(divInfoName);
    
    // grupo 2
    var formGroup2 = document.createElement("div");
    formGroup2.setAttribute("class","form-group");

    var inputDesCAt = document.createElement("input");
    inputDesCAt.setAttribute("id","inputNation");
    inputDesCAt.setAttribute("name","inputNation");
    inputDesCAt.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesCAt.setAttribute("type","text");
    inputDesCAt.setAttribute("placeholder","Nacionalidad");
    
    formGroup2.appendChild(inputDesCAt); 

    // grupo 3
    var formGroup3 = document.createElement("div");
    formGroup3.setAttribute("class","form-group");

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","synopsis");
    inputDesAct.setAttribute("name","synopsis");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","text");
    inputDesAct.setAttribute("placeholder","synopsis");

    formGroup3.appendChild(inputDesAct);

    // grupo 4
    var formGroup4 = document.createElement("div");
    formGroup4.setAttribute("class","form-group text-left");

    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("fecha de publicación");
    labelPub.appendChild(lblText);
    formGroup4.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","publi");
    inputDesAct.setAttribute("name","publi");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","date");

    //div con la información del error
    var divDate = document.createElement("div");
    divDate.setAttribute("id","divInfoPubli");
    divDate.setAttribute("class","d-none invalid-feedback");

    formGroup4.appendChild(inputDesAct);
    formGroup4.appendChild(divDate);

    // grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group text-left");

    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("Imágen del recurso");
    labelPub.appendChild(lblText);
    formGroup6.appendChild(labelPub);

    var inputDesAct = document.createElement("input");
    inputDesAct.setAttribute("id","img");
    inputDesAct.setAttribute("name","img");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("type","file");

    formGroup6.appendChild(inputDesAct);

    // grupo 7
    var formGroup7 = document.createElement("div");
    formGroup7.setAttribute("class","form-group text-left");
    //link
    var labelPub = document.createElement("label");
    var lblText = document.createTextNode("capitulos");
    labelPub.appendChild(lblText);
    formGroup7.appendChild(labelPub);

    var inputDesAct = document.createElement("select");
    inputDesAct.setAttribute("id","capitulos");
    inputDesAct.setAttribute("name","capitulos");
    inputDesAct.setAttribute("class","form-control mb-2 mr-sm-2");
    inputDesAct.setAttribute("multiple","");

    //recorremos el iterador y mostramos los valores
    
    var audios = ["captitulo 1","captitulo 2","captitulo 3","captitulo 4"];
    for (let i = 0; i < audios.length; i++) {
        var opc = document.createElement("option");
        var value = document.createTextNode(audios[i]);
        opc.appendChild(value);
        opc.setAttribute("value",audios[i]);
        inputDesAct.appendChild(opc);
    }

    //div con la información del error
    var divInfoUrl = document.createElement("div");
    divInfoUrl.setAttribute("id","divInfoUrl");
    divInfoUrl.setAttribute("class","d-none invalid-feedback");

    formGroup7.appendChild(inputDesAct);
    formGroup7.appendChild(divInfoUrl);

    var btnAdd = document.createElement("button");
    btnAdd.setAttribute("type","button");
    btnAdd.setAttribute("class","btn btn-primary mb-2");
    btnAdd.setAttribute("value","add");
    btnAdd.addEventListener("click",function(){addSerie()});
    var textNodeBtn = document.createTextNode("Añadir");
    btnAdd.appendChild(textNodeBtn);

    var advert = document.createElement("div");
    advert.setAttribute("class","d-none");
    advert.setAttribute("id","advert");

    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(formGroup6);
    form.appendChild(formGroup7);
    //form.appendChild(formGroup8);
    form.appendChild(btnAdd);
    div.appendChild(form);
    div.appendChild(advert);
}
//añadir peliculas
function addFilm(){

    var title = document.addForm.pTilte.value;
    var nationality = document.addForm.inputNation.value;
    var synopsis = document.addForm.synopsis.value;
    var publication = document.addForm.publi.value;
    var url = document.addForm.url.value;
    var durac = document.addForm.durac.value;
    var locations = document.addForm.coor.value;
    var image = document.addForm.img.value;

    //console.log(title + " " + nationality + " " + publication + " "+ url + " " + synopsis + " " + image + " " + durac + " " + locations);
    
    var select = document.getElementById( 'audio' );
    //console.log(select.length);
    
    //recojemos en un array idiomas
    var audios = [];

    for ( j = 0; j < select.length; j++) {
        if(select[j].selected) audios.push(select[j].textContent);
    }
    
    //console.log(audios.length);

    var select = document.getElementById( 'sub' );
    //console.log(select[0].textContent);
    
    //recojemos en un array subtítulos
    var subtitles = [];

    for ( j = 0; j < select.length; j++) {
        if(select[j].selected) subtitles.push(select[j].textContent);
    }

    //console.log(subtitles.length);

    var pTilte = document.getElementById("pTilte");
    var divPTilte = document.getElementById("divPTilte");

    var publi = document.getElementById("publi");
    var divDateIfo = document.getElementById("divInfoPubli");

    var durInp = document.getElementById("durac");
    var divDurIfo = document.getElementById("divInfoDur");

    var urlInput = document.getElementById("url");
    var divInfoUrl = document.getElementById("divInfoUrl");
    
    
    //comprobar errores
    var validacion = true;
    
    if (title === "" ){
        pTilte.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divPTilte.setAttribute("class","invalid-feedback text-left");
        divPTilte.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        pTilte.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divPTilte.setAttribute("class","d-none");
    }

    if (publication === "" ){
        publi.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divDateIfo.setAttribute("class","invalid-feedback text-left");
        divDateIfo.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        publi.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divDateIfo.setAttribute("class","d-none");
    }

    if (durac === "" ){
        durInp.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divDurIfo.setAttribute("class","invalid-feedback text-left");
        divDurIfo.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        durInp.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divDurIfo.setAttribute("class","d-none");
    }

    if (url === "" ){
        urlInput.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divInfoUrl.setAttribute("class","invalid-feedback text-left");
        divInfoUrl.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        urlInput.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoUrl.setAttribute("class","d-none");
    }

    if (locations !== "" ){
        locations = locations.split(",");
        console.log(locations);
        try {
            var coordenadas1 = new Coordinate(locations[0],locations[1]);
        } catch (error) {
            console.log(error)
        }
        console.log(coordenadas1);
    }else{
        urlInput.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divInfoUrl.setAttribute("class","d-none");
    }
    
    if (validacion) {
        try {

            var Ndate = new Date(publication);
            var recurso = new Resource(durac,url,audios,subtitles); 
            var film = new Movie(title,nationality,Ndate,synopsis,"images/movie.jpg",recurso,coordenadas1);

            vSistem.addProduction(film);
            introducirElemento(film.getObject(),4);

            showAssingDirAct(title);

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;
            
            return false;


        } catch (error) {
            console.log(error)
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }
}

function addSerie(){

    var title = document.addForm.pTilte.value;
    var nationality = document.addForm.inputNation.value;
    var synopsis = document.addForm.synopsis.value;
    var publication = document.addForm.publi.value;
    var image = document.addForm.img.value;

    //console.log(title + " " + nationality + " " + publication + " " + synopsis + " " + image);
    
    //recojemos en un array subtítulos
    var select = document.getElementById( 'capitulos' );

    var pTilte = document.getElementById("pTilte");
    var divPTilte = document.getElementById("divPTilte");

    var publi = document.getElementById("publi");
    var divDateIfo = document.getElementById("divInfoPubli");

    var durInp = document.getElementById("durac");
    var divDurIfo = document.getElementById("divInfoDur");

    var urlInput = document.getElementById("url");
    var divInfoUrl = document.getElementById("divInfoUrl");
    
    
    //comprobar errores
    var validacion = true;
    
    if (title === "" ){
        pTilte.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divPTilte.setAttribute("class","invalid-feedback text-left");
        divPTilte.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        pTilte.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divPTilte.setAttribute("class","d-none");
    }

    if (publication === "" ){
        publi.setAttribute("class","form-control is-invalid mb-2 mr-sm-2");
        divDateIfo.setAttribute("class","invalid-feedback text-left");
        divDateIfo.innerHTML = "El campo no puede estar vacío";
        validacion = false;
    }else{
        publi.setAttribute("class","form-control is-valid mb-2 mr-sm-2");
        divDateIfo.setAttribute("class","d-none");
    }
    
    if (validacion) {

        
        try {
            
            var subtitulos = ["español","Ingles"];
            var audios = ["español","Ingles"];
            var recurso = new Resource(60,"../images/hp_movie.jpg",audios,subtitulos); 
            var coordenadas = new Coordinate(444,446);
            var episodios = [
                {title: "episodio1 temporada 1", episode:recurso, scenarios:coordenadas, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
                {title: "episodio2 temporada 1", episode:recurso, scenarios:coordenadas, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
                {title: "episodio3 temporada 1", episode:recurso, scenarios:coordenadas, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
                {title: "episodio4 temporada 1", episode:recurso, scenarios:coordenadas, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
                {title: "episodio5 temporada 1", episode:recurso, scenarios:coordenadas, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} }
            ]; 
            
            var totalEpi = [];
            for ( j = 0; j < select.length; j++) {
                if(select[j].selected) totalEpi.push(episodios[j]);
            }

            var season1 = new Season("temp 1",totalEpi);

            var Ndate = new Date(publication);
            
            var film = new Serie(title,nationality,Ndate,synopsis,"../images/hp_movie.jpg",season1);

            vSistem.addProduction(film);

            showAssingDirAct(title);

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("Info:");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            msgAdvert.setAttribute("class","green");
            var msgh5 = document.createTextNode("operación realizada correctamente");
            msgAdvert.innerHTML = msgh5.textContent;

            return false;

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            //console.log(h5Advert);
            h5Advert.innerHTML = texth5.textContent;

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.innerHTML = msgh5.textContent;

            return false;
        }
    }
}
//formulario asignar directores y actores y categorías a una produccion
function showAssingDirAct(production){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    //formulario para inserción de categorías
    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("asignar directores y actores a: " + production);
    h2.setAttribute("id",production);
    h2.appendChild(h2Desc);
    div.appendChild(h2);

    var form = document.createElement("form");
    form.setAttribute("name","addForm");
    //form.addEventListener("return onsubmit",function(){addAct(document.addForm.AName.value, document.addForm.AlastName1.value, document.addForm.AlastName2.value, document.addForm.ADate.value, )});
    //form.setAttribute("onsubmit","return false");

    //grupo 6
    var formGroup6 = document.createElement("div");
    formGroup6.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("asignar actores");
    h2.appendChild(h2Desc);
    formGroup6.appendChild(h2);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("actores");
    th_name.appendChild(name);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup6.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableActorsPro(production);
    table.appendChild(tbody);
    
    form.appendChild(formGroup6);

    //grupo7
    var formGroup7 = document.createElement("div");
    formGroup7.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("asignar directores");
    h2.appendChild(h2Desc);
    formGroup7.appendChild(h2);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("directores");
    th_name.appendChild(name);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup7.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableDirecorsPro(production);
    table.appendChild(tbody);
    
    form.appendChild(formGroup7);

    //grupo7
    var formGroup8 = document.createElement("div");
    formGroup8.setAttribute("class","form-group");

    var h2 = document.createElement("h2");
    var h2Desc = document.createTextNode("asignar categorías");
    h2.appendChild(h2Desc);
    formGroup8.appendChild(h2);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Categorías");
    th_name.appendChild(name);

    var th_select = document.createElement("th");
    var dele = document.createTextNode("Selecionar");
    th_select.appendChild(dele);
    
    tr.appendChild(th_name);
    tr.appendChild(th_select);
    thead.appendChild(tr);

    table.appendChild(thead);
    formGroup8.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las producciones
    var tbody = rechargeTableCatsPro(production);
    table.appendChild(tbody);
    
    form.appendChild(formGroup8);

    div.appendChild(form);
}
//recargamos la tabla de actores, para el formulario de asignar a producciones
function rechargeTableDirecorsPro(production){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable2");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;

    //rellenamos el cuerpo de la tabla
    var actores = vSistem.directors;
    var actor = actores.next();
    while (actor.done !== true){
            var tr = document.createElement("tr");
            tr.setAttribute("id",contFila);

            var tdNAme = document.createElement("td");
            var textName = document.createTextNode(actor.value.name + " " +  actor.value.lastName1 );
            tdNAme.appendChild(textName);

            var select = document.createElement("td");
            select.setAttribute("class","asignar");
            var button_del = document.createElement("a");
            button_del.setAttribute("href","#myTable2");
            var texta = document.createTextNode("asignar");
            button_del.appendChild(texta);
            select.appendChild(button_del);
            button_del.setAttribute("id",actor.value.name);
            button_del.setAttribute("title",production);
            
            button_del.addEventListener("click",function(){assignDirecProd(this.title,this.id)});

            tr.appendChild(tdNAme);
            tr.appendChild(select);

            actor = actores.next();
            tbody.appendChild(tr);

            contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//recargamos la tabla de actores, para el formulario de asignar a producciones
function rechargeTableActorsPro(production){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;

    //rellenamos el cuerpo de la tabla
    var actores = vSistem.actors;
    var actor = actores.next();
    while (actor.done !== true){
            var tr = document.createElement("tr");
            tr.setAttribute("id",contFila);

            var tdNAme = document.createElement("td");
            var textName = document.createTextNode(actor.value.name + " " +  actor.value.lastName1 );
            tdNAme.appendChild(textName);

            var select = document.createElement("td");
            select.setAttribute("class","asignar");
            var button_del = document.createElement("a");
            button_del.setAttribute("href","#myTable");
            var texta = document.createTextNode("asignar");
            button_del.appendChild(texta);
            select.appendChild(button_del);
            button_del.setAttribute("id",actor.value.name);
            button_del.setAttribute("title",production);
            
            button_del.addEventListener("click",function(){assignActorProd(this.title,this.id)});

            tr.appendChild(tdNAme);
            tr.appendChild(select);

            actor = actores.next();
            tbody.appendChild(tr);

            contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//funcion para asignar categorías a producciones
function rechargeTableCatsPro(production){
    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable3");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;

    //rellenamos el cuerpo de la tabla
    var actores = vSistem.categories;
    var actor = actores.next();
    while (actor.done !== true){
            var tr = document.createElement("tr");
            tr.setAttribute("id",contFila);

            var tdNAme = document.createElement("td");
            var textName = document.createTextNode(actor.value.name);
            tdNAme.appendChild(textName);

            var select = document.createElement("td");
            select.setAttribute("class","asignar");
            var button_del = document.createElement("a");
            button_del.setAttribute("href","#myTable3");
            var texta = document.createTextNode("asignar");
            button_del.appendChild(texta);
            select.appendChild(button_del);
            button_del.setAttribute("id",actor.value.name);
            button_del.setAttribute("title",production);
            
            button_del.addEventListener("click",function(){assignCatProd(this.title,this.id)});

            tr.appendChild(tdNAme);
            tr.appendChild(select);

            
            tbody.appendChild(tr);

            actor = actores.next();
            contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
//funcion para asasignar directores a producciones
function assignActorProd(proTitle,actorPro){
    console.log("asignando: " + proTitle + " " + actorPro)
    //recojemos el actor
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(actorPro) === 0) { 
            encontrado = true;
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }
    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        
        if (produccion.value.title.localeCompare(proTitle) === 0) { 
            encontrado = true;
            try {
                console.log(vSistem.assignActor(auxAct,produccion.value,"El Personaje",false));
            } catch (error) {
                
                $('#myModalAdv').modal('show');
                $('#myModalAdv').modal('handleUpdate');
                
                var h5Advert = document.getElementById("myModalAdvh5");
                var texth5 = document.createTextNode("¡Error!");
                //h5Advert.appendChild(texth5);
                //console.log(h5Advert);
                h5Advert.innerHTML = texth5.textContent;

                var msgAdvert = document.getElementById("myModalAdvMsg");
                var msgh5 = document.createTextNode(error);
                msgAdvert.innerHTML = msgh5.textContent;

                return false;
            }
        }else{
            produccion = producciones.next();
        }
    }
}
//funcion para asasignar directores a producciones
function assignDirecProd(proTitle,actorPro){
    //console.log("asignando: " + proTitle + " " + actorPro)
    //recojemos el actor
    var actores = vSistem.directors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(actorPro) === 0) { 
            encontrado = true;
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }
    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        
        if (produccion.value.title.localeCompare(proTitle) === 0) { 
            encontrado = true;
            try {
                console.log(vSistem.assignDirector(auxAct,produccion.value));
                
                $('#myModalAdv').modal('show');
                $('#myModalAdv').modal('handleUpdate');

                var h5Advert = document.getElementById("myModalAdvh5");
                var texth5 = document.createTextNode("Info:");
                //h5Advert.appendChild(texth5);
                //console.log(h5Advert);
                h5Advert.innerHTML = texth5.textContent;

                var msgAdvert = document.getElementById("myModalAdvMsg");
                msgAdvert.setAttribute("class","green");
                var msgh5 = document.createTextNode("operación realizada correctamente");
                msgAdvert.innerHTML = msgh5.textContent;
                
            } catch (error) {
                
                $('#myModalAdv').modal('show');
                $('#myModalAdv').modal('handleUpdate');
                
                var h5Advert = document.getElementById("myModalAdvh5");
                var texth5 = document.createTextNode("¡Error!");
                //h5Advert.appendChild(texth5);
                //console.log(h5Advert);
                h5Advert.innerHTML = texth5.textContent;

                var msgAdvert = document.getElementById("myModalAdvMsg");
                var msgh5 = document.createTextNode(error);
                msgAdvert.innerHTML = msgh5.textContent;

                return false;
            }
        }else{
            produccion = producciones.next();
        }
    }
}
//asignar categorias a producciones
function assignCatProd(proTitle,actorPro){
    //console.log("asignando: " + proTitle + " " + actorPro)
    //recojemos el actor
    var actores = vSistem.categories;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        
        if (actor.value.name.localeCompare(actorPro) === 0) { 
            encontrado = true;
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    //recojemos la produccion
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        
        if (produccion.value.title.localeCompare(proTitle) === 0) { 
            encontrado = true;
            try {
                console.log(vSistem.assignCategory(auxAct,produccion.value));
                
                $('#myModalAdv').modal('show');
                $('#myModalAdv').modal('handleUpdate');
                
                var h5Advert = document.getElementById("myModalAdvh5");
                var texth5 = document.createTextNode("Info:");
                //h5Advert.appendChild(texth5);
                //console.log(h5Advert);
                h5Advert.innerHTML = texth5.textContent;

                var msgAdvert = document.getElementById("myModalAdvMsg");
                msgAdvert.setAttribute("class","green");
                var msgh5 = document.createTextNode("operación realizada correctamente");
                msgAdvert.innerHTML = msgh5.textContent;

            } catch (error) {
                
                $('#myModalAdv').modal('show');
                $('#myModalAdv').modal('handleUpdate');
                
                var h5Advert = document.getElementById("myModalAdvh5");
                var texth5 = document.createTextNode("¡Error!");
                //h5Advert.appendChild(texth5);
                //console.log(h5Advert);
                h5Advert.innerHTML = texth5.textContent;

                var msgAdvert = document.getElementById("myModalAdvMsg");
                var msgh5 = document.createTextNode(error);
                msgAdvert.innerHTML = msgh5.textContent;

                return false;
            }
        }else{
            produccion = producciones.next();
        }
    }
}
//formulario eliminar producciones
function showDelPro(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

    mainAdmin.appendChild(div);

    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Buscar producción");
    h2.appendChild(h2_text);
    
    var input = document.createElement("input");
    input.setAttribute("class","form-control");
    input.setAttribute("id","myInput");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Buscar director...");
    
    div.appendChild(h2);
    div.appendChild(input);

    var table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-dark table-striped");

    //cabecera
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    
    var th_name = document.createElement("th");
    var name = document.createTextNode("Título");
    th_name.appendChild(name);

    var th_trash = document.createElement("th");
    var trash = document.createTextNode("borrar");
    th_trash.appendChild(trash);
    
    tr.appendChild(th_name);
    tr.appendChild(th_trash);
    thead.appendChild(tr);

    table.appendChild(thead);
    div.appendChild(table);

    //cuerpo tabla
    //Recargamos la tabla de las categorías
    var tbody = rechargeTableProductions();
    table.appendChild(tbody);
}
//recargamos la tabla de actores
function rechargeTableProductions(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;
    //rellenamos el cuerpo de la tabla
    var directores = vSistem.productions;
    var director = directores.next();
    while (director.done !== true){
        
        var tr = document.createElement("tr");

        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(director.value.title);
        tdNAme.appendChild(textName);

        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",director.value.title);
        button_del.addEventListener("click",function(){eliminarProduct(this.value)});

        var del = document.createElement("ion-icon");
        del.setAttribute("name","trash");

        button_del.appendChild(del);

        tr.appendChild(tdNAme);
        tr.appendChild(tdDel);

        director = directores.next();
        tbody.appendChild(tr);

        contFila++;
    }
    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    return tbody;
}
//eliminamos una produccion
function eliminarProduct(tituloProduc){
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    var encontrado = false;
    while (produccion.done !== true && !encontrado){
        //console.log("eliminando a "+ tituloProduc + "(" + produccion.value.title + ")");
        if (produccion.value.title.localeCompare(tituloProduc) === 0) {
            console.log(vSistem.removeProduction(produccion.value));
            var produccionAdes = produccion.value;
            encontrado = true;
        }

        if (encontrado) {
            //recorremos el iterador y mostramos los valores
            var categorias = vSistem.categories;
            var categoria = categorias.next();
            while (categoria.done !== true){

                //recogemos la produccion de esta categoría y la desasignamos
                var produccionesDes = vSistem.getProductionsCategory(categoria.value);
                var produccionDes = produccionesDes.next();
                var enco = false;
                while (produccionDes.done !== true && !enco){
                    //console.log(tituloProduc + " " + produccionDes.value.title + " "  + tituloProduc.localeCompare(produccion.value.title))
                    if(tituloProduc.localeCompare(produccionDes.value.title) === 0){
                        //console.log("desasignando: " + categoria.value.name + " a "+ produccionDes.value.title);
                        console.log(vSistem.deassignCategory(categoria.value,produccionDes.value));
                        enco = true;
                    }
                    produccionDes = produccionesDes.next();
                }
                categoria = categorias.next();
            }

            //desasignamos directores
            var actores = vSistem.directors;
            var actor = actores.next();
            while (actor.done !== true){
                var actoresPro = vSistem.getProductionsDirector(actor.value);
                var actorPro = actoresPro.next();
                if (actorPro.value === undefined) actorPro.done = true;
                console.log(actorPro.value);
                while (actorPro.done !== true){
                    
                    if(tituloProduc.localeCompare(actorPro.production.title) === 0){
                        //console.log("desasignando: " +  actor.value + " a "+  actorPro.production.title);
                        console.log(vSistem.desassignDirector(actor.value,produccionAdes));
                    }
                    actorPro = actoresPro.next();
                }
                actor = actores.next();
            }

        }

        produccion = producciones.next();
    }

    borrarElementos("producciones",tituloProduc);
    //createHomePage();
    showDelPro();
}
//recargamos la tabla de actores
function rechargeTableDirectors(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    //console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        //console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }
    var contFila = 0;
    //rellenamos el cuerpo de la tabla
    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){
        
        var tr = document.createElement("tr");
        tr.setAttribute("id",contFila);

        var tdNAme = document.createElement("td");
        var textName = document.createTextNode(director.value.name);
        tdNAme.appendChild(textName);

        var tdLastName = document.createElement("td");
        var textLastName1 = document.createTextNode(director.value.lastName1);
        tdLastName.appendChild(textLastName1);

        var tdDate = document.createElement("td");
        var textDate = document.createTextNode(director.value.born);
        tdDate.appendChild(textDate);

        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",director.value.name);
        button_del.addEventListener("click",function(){eliminarDirec(this.value)});

        var del = document.createElement("ion-icon");
        del.setAttribute("name","trash");

        button_del.appendChild(del);

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",director.value.name);
        button_edit.addEventListener("click",function(){showModDir(this.value)});

        var edit = document.createElement("ion-icon");
        edit.setAttribute("name","brush");

        button_edit.appendChild(edit);

        tr.appendChild(tdNAme);
        tr.appendChild(tdLastName);
        tr.appendChild(tdDate);
        
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);

        director = directores.next();
        tbody.appendChild(tr);

        contFila++;
    }

    //3wschool script de filtro para tablas. 
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    return tbody;
}
function generarDoc(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        //console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var a = document.createElement("a");
    a.setAttribute("href","#")
    a.setAttribute("onclick","showAdmin()")
    var volver = document.createTextNode("volver a administración");
    a.appendChild(volver);

    mainAdmin.appendChild(a);

    var div = document.createElement("div");
    div.setAttribute("id","form_act"); 
    div.setAttribute("class","m-auto text-center");

    crearDoc();


}
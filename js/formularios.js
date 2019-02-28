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
            console.log(UName);
            setCookie(UName.value.trim(), pass);
            console.log(getCookie("username"));
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
    console.log("existe prueba?: " + getCookie("prueba"))

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
        console.log(mainAdmin.firstChild);
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

}

//muestra las operaciones para las categorías
function showOpCat(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

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
    table.setAttribute("class","table table-bordered table-striped");

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
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

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
    btnAdd.setAttribute("value","add");
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
    console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        console.log(tbody.firstChild);
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

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",categoria.value.name);
        button_edit.addEventListener("click",function(){showModCat(this.value)});

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
        console.log(categoria.value.name.localeCompare(nameCAt));
        if (categoria.value.name.localeCompare(nameCAt) === 0) { 
            encontrado = true;

            console.log ("aqui " + categoria.value);
            var auxCat = new Category(categoria.value.name,categoria.value.description);
            console.log(typeof auxCat);
            console.log(auxCat);

            //recorremos el iterador y mostramos los valores
            var producciones = vSistem.getProductionsCategory(auxCat);
            console.log(producciones.next());
            var produccion = producciones.next();
            while (produccion.done !== true){
                console.log(produccion);
                vSistem.deassignCategory(auxCat,produccion.value);
                produccion = producciones.next();
            }

            vSistem.removeCategory(auxCat);
           
            console.log((categoria.value.name.localeCompare(nameCAt) === 0));
        }else{
            categoria = categorias.next();
        }
    }

    categoriesMenuPopulate();
    rechargeTableCat();
    showOpCat();
}

//Editar categorías
function showModCat(nameCat){
    hideAll();

    console.log(nameCat);
    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    var div = document.createElement("div");
    div.setAttribute("id","form_cat"); 
    div.setAttribute("class","m-auto text-center");

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
    form.setAttribute("metoh","post");
    form.setAttribute("onsubmit","modCat("+cont+")");

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
    btnAdd.setAttribute("type","submit");
    btnAdd.setAttribute("value","Modificar");

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

    console.log("aqui: "  + name + " " + desc);
    
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

            categoriesMenuPopulate();
            rechargeTableCat();
            showAddCat();
            console.log("aqui: "  + name + " " + desc);
            return false;

        } catch (error) {

            console.log("aqui: "  + name + " " + desc);

            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            console.log(h5Advert);
            h5Advert.replaceWith(texth5.textContent);

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.appendChild(msgh5);

            return false;
        }
    }
}

//modificar categoría
function modCat(cont){

    var name = document.forms["addForm"]["AName"].value;
    var desc = document.forms["addForm"]["ADesc"].value;
    
    console.log("aqui: "  + name + " " + desc + "  " + cont);

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

    if (validacion) {

        try {

            //recorremos el iterador y recojemos la categoría seleccionada
            var categorias = vSistem.categories;
            var categoria = categorias.next();
            var encontrado = false;
            var contador = 0; //selecionamos el indice concreto de la categoría
            while (categoria.done !== true && !encontrado){
                if (contador === cont) { 
                    encontrado = true;
                    categoria.value.name = name;
                    categoria.value.description = desc;
                }else{
                    categoria = categorias.next();
                    cont++;
                }
            }

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            console.log(h5Advert);
            h5Advert.replaceWith(texth5.textContent);

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.appendChild(msgh5);

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
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

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
    table.setAttribute("class","table table-bordered table-striped");

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
    console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        console.log(tbody.firstChild);
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

            //vSistem.assignActor(actor1,serie1,"El Personaje",false)

            //recorremos el iterador y mostramos los valores
            var producciones = vSistem.productions;
            var produccion = producciones.next();
            while (produccion.done !== true){
                for (let i = 0; i < porElementos.length; i++) {
                    console.log (produccion.value.title );
                    if((porElementos[i].checked) && (porElementos[i].value === produccion.value.title) ){
                        
                        //comprobamos si es protagonista
                        var pjInput = document.getElementById("pj " + produccion.value.title).value;
                        console.log(pjInput);

                        //comprobamos si es protagonista
                        var protaInput = document.getElementById("prota " + produccion.value.title);
                        var siProta = protaInput.options[protaInput.selectedIndex].value;
                        console.log(siProta);
                        
                        vSistem.assignActor(auxAct,produccion.value,pjInput,siProta);
                        console.log (produccion.value.toString() );
                    }
                }
                
                produccion = producciones.next();
            }

            categoriesMenuPopulate();
            showAddAct();

            return false;

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            console.log(h5Advert);
            h5Advert.replaceWith(texth5.textContent);

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.appendChild(msgh5);

            return false;
        }
    }
}

//muestra las operaciones para las categorías
function showOpAct(){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

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
    table.setAttribute("class","table table-bordered table-striped");

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
    var tbody = rechargeTableActors();
    table.appendChild(tbody);

}

//recargamos la tabla de actores
function rechargeTableActors(){

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id","myTable");
    console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        console.log(tbody.firstChild);
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

        var tdDate = document.createElement("td");
        var textDate = document.createTextNode(actor.value.born);
        tdDate.appendChild(textDate);

        var tdDel = document.createElement("td");
        var button_del = document.createElement("button");
        tdDel.appendChild(button_del);
        button_del.setAttribute("value",actor.value.name);
        button_del.addEventListener("click",function(){eliminarAct(this.value)});

        var tdEdit = document.createElement("td");
        var button_edit = document.createElement("button");
        tdEdit.appendChild(button_edit);
        button_edit.setAttribute("value",actor.value.name);
        button_edit.addEventListener("click",function(){showModAct(this.value)});

        tr.appendChild(tdNAme);
        tr.appendChild(tdLastName);
        tr.appendChild(tdDate);
        
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
        console.log(actor.value.name.localeCompare(nameAct));
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;

            console.log ("aqui " + actor.value);
            var auxAct = actor.value;
            console.log(typeof auxAct);
            console.log(auxAct);

            vSistem.removeActor(actor.value);
        }else{
            actor = actores.next();
        }
    }

    rechargeTableActors();
    showOpAct();
}

//Editar categorías
function showModAct(nameAct){
    hideAll();

    var mainAdmin = document.getElementById("main-mod-admin");
    mainAdmin.setAttribute("class","d-block "); 

    //borramos todos los elemetos 
    while(mainAdmin.firstChild){
        console.log(mainAdmin.firstChild);
        mainAdmin.removeChild(mainAdmin.firstChild);
    }

    //recorremos el iterador y recojemos la categoría seleccionada
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        console.log(actor.value.name.localeCompare(nameAct));
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            console.log ("aqui " + actor.value);
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

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
    btnAdd.setAttribute("value","add");
    btnAdd.addEventListener("click",function(){modAct()});
    var textNodeBtn = document.createTextNode("Modificar");
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
    table.setAttribute("class","table table-bordered table-striped");

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
    console.log(tbody);

    //borramos todos los elemetos 
    while(tbody.firstChild){
        console.log(tbody.firstChild);
        tbody.removeChild(tbody.firstChild);
    }

    //recorremos el iterador y recogemos la categoría seleccionada
    var actores = vSistem.actors;
    var actor = actores.next();
    var encontrado = false;
    while (actor.done !== true && !encontrado){
        console.log(actor.value.name.localeCompare(nameAct));
        if (actor.value.name.localeCompare(nameAct) === 0) { 
            encontrado = true;
            console.log ("aqui " + actor.value);
            var auxAct = actor.value;
        }else{
            actor = actores.next();
        }
    }

    console.log("aquí");
    //rellenamos el cuerpo de la tabla
    var actores = vSistem.getProductionsActor(auxAct);
    var actor = actores.next();
    var contFila = 0;
    console.log(actor);
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
        inputSelec.setAttribute("name",actor.production);
        inputSelec.setAttribute("value",actor.production);
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

//modificar categoría
function modAct(cont){

    var name = document.forms["addForm"]["AName"].value;
    var desc = document.forms["addForm"]["ADesc"].value;
    
    console.log("aqui: "  + name + " " + desc + "  " + cont);

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

    if (validacion) {

        try {

            //recorremos el iterador y recojemos la categoría seleccionada
            var categorias = vSistem.categories;
            var categoria = categorias.next();
            var encontrado = false;
            var contador = 0; //selecionamos el indice concreto de la categoría
            while (categoria.done !== true && !encontrado){
                if (contador === cont) { 
                    encontrado = true;
                    categoria.value.name = name;
                    categoria.value.description = desc;
                }else{
                    categoria = categorias.next();
                    cont++;
                }
            }

        } catch (error) {
            $('#myModalAdv').modal('show');
            $('#myModalAdv').modal('handleUpdate');
            
            var h5Advert = document.getElementById("myModalAdvh5");
            var texth5 = document.createTextNode("¡Error!");
            //h5Advert.appendChild(texth5);
            console.log(h5Advert);
            h5Advert.replaceWith(texth5.textContent);

            var msgAdvert = document.getElementById("myModalAdvMsg");
            var msgh5 = document.createTextNode(error);
            msgAdvert.appendChild(msgh5);

            return false;
        }
        
        categoriesMenuPopulate();
        rechargeTableCat();
        showOpCat();
    }

    return false;

}
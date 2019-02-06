
var ventanas = [];


function crearVentana(element) {
    var encontrada = false;
    //console.log(ventanas.length);
    for (let i = 0; i < ventanas.length; i++) {
        //console.log(ventanas[i].name  + " = " + element + " && " +  "(ventana && !ventana.closed) ");
        //console.log(ventanas[i]);
        //console.log("ventana: " + ventanas[i].name);
        //console.log("existe una ventana con ese nombre: " + ventanas[i].name.localeCompare(element));
        var existeNombre = ventanas[i].name.localeCompare(element);
        //console.log("esta cerrada: " + ventanas[i].closed);
        var cerrada = ventanas[i].closed;
        //console.log("esta existe la referencia: " + ventanas[i].opener);
        var refered = ventanas[i].opener;

        if (existeNombre == 0 && !cerrada && refered != null) {
            //console.log("Existe y está abierta")
            ventanas[i].focus();
            encontrada=true;
        }

        if (cerrada){
            //console.log("cerrada");
            ventanas.splice(i,1);
            encontrada=false;    
        }
    }

    if (!encontrada) {
        //Abre una ventana nueva con una con nombre y características.
        var ventana = window.open("UT04_production.html",element,"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        //ventana.document.write("<p>" + ventana.name + "</p>")
        ventanas.push(ventana);
        //console.log(ventana.name);
    }

    
}


function showResource(){
    //console.log(window.opener);

    var vSistem = window.opener.VideoSystem.getInstance();

    var main = document.getElementById("main_pro");
    var divVid = document.createElement("div");
    var divDesc = document.createElement("div");


    var h2_title = document.createElement("h2");
    var title = document.createTextNode(window.name);
    h2_title.appendChild(title);

    //recogemos la producción concreta
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    while (produccion.done !== true){
        //console.log(produccion.value.title);
        var title = produccion.value.title;
        
        if(title == window.name){
            var pelicula = produccion.value;
            var actores = vSistem.getCast(produccion.value);
            break; //revisar
        }else{
            produccion = producciones.next();
        }
    }

    var divDesc = document.createElement("div");
    //Descripción
    var h2_pro = document.createElement("h2");
    var h2_titleS_pro = document.createTextNode("Descripción");
    h2_pro.appendChild(h2_titleS_pro);
    divDesc.appendChild(h2_pro);

    var p1_pro = document.createElement("p");
    var h2_sinop_pro = document.createTextNode(pelicula.synopsis);
    p1_pro.appendChild(h2_sinop_pro);
    divDesc.appendChild(p1_pro);
    //fin synopsis

    //nacionalidad
    var p2_pro = document.createElement("p");
    var p2_nt = document.createTextNode("Nacionalidad: " + pelicula.nationality);
    p2_pro.appendChild(p2_nt);
    divDesc.appendChild(p2_pro);
    //fin nacionalidad

    //Fecha de publicación
    var p2_date = document.createElement("p");
    var p2_textD = document.createTextNode("Fecha de publicación: " + pelicula.publication);
    p2_date.appendChild(p2_textD);
    divDesc.appendChild(p2_date);
    //fin Fecha de publicación

    if(pelicula instanceof Movie){

        var p2_dur = document.createElement("p");
        var p2_resDur= document.createTextNode("Duración: " + pelicula.resource.duration.toString() + " min");
        p2_dur.appendChild(p2_resDur);
        divDesc.appendChild(p2_dur);

        var p2_res = document.createElement("p");
        var p2_aud = document.createTextNode("Audios: " + pelicula.resource.audios.toString());
        p2_res.appendChild(p2_aud);
        divDesc.appendChild(p2_res);

        var p2_resSub = document.createElement("p");
        var p2_resSub = document.createTextNode("Subtítulos: " + pelicula.resource.subtitles.toString());
        p2_res.appendChild(p2_resSub);
        divDesc.appendChild(p2_resSub);
    
    }else{
        
    }

    main.appendChild(divVid);
    main.appendChild(divDesc);

}



//ventana.onload = addResource; 

    
    /*
    <div id="video"></div>
    <div id="des_resource">
        <h2>Descripción</h2>
        <p></p>
        <h2>Nacionalidad</h2>
        <p></p>
        <h2>Fecha</h2>
        <p></p>
    </div>
    <div id="caps"></div>

    
    console.log(ventana.document.childNodes)
    
    var divVid = document.createElement("div");
    var h2_desc = document.createElement("h2");
    var h2_nac = document.createElement("h2");
    var h2_fech = document.createElement("h2");

    var h2_caps = document.createElement("h2");

    
    function escribirVentanaNueva(){
        if (ventana && !ventana.closed){

            var main = ventana.document.getElementById("main");
            console.log(main);
            main.appendChild(divVid);             
            main.appendChild(h2_desc);
            ventana.focus();
        } else {
            document.getElementById("resultado").innerHTML = "La ventana está cerrada.";
        }                                    
    }
    

    if (pelicula instanceof Movie) {
        
    }else{

    }

    escribirVentanaNueva();

    console.log(main); */

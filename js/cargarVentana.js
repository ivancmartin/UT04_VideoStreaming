
var ventanas = [];

function crearVentana(element) {
    
    compVentanas();
    
    var encontrada = false;
    var i = 0;
    //console.log(ventanas.length);
    while( i < ventanas.length && !encontrada ){
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

        if (cerrada && refered == null){
            //console.log("cerrada");
            ventanas.splice(i,1);
            
            encontrada=false;    
        }
        i++;
    }

    if (!encontrada) {
        //Abre una ventana nueva con una con nombre y características.
        var ventana = window.open("UT04_production.html",element,"toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=600,width=700,height=700");
        
        ventanas.push(ventana);
        //console.log(ventana.name);
    }

}

//comprueba que ninguna ventana del array esté ocupada por una ventana sin nombre
function compVentanas(){
    for (let i = 0; i < ventanas.length; i++) {
        
        if (ventanas[i].name == "") {
            ventanas.splice(i,1);
            //console.log("comp ventanas: " + ventanas.length);
        }
    }
}

//muestra todos los recursos
function showResource(){
    //console.log(window.opener);

    var vSistem = window.opener.VideoSystem.getInstance();

    var main = document.getElementById("main_pro");
    var divVid = document.createElement("div");
    var divDesc = document.createElement("div");
    divDesc.setAttribute("class","pb-1");
    

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
            break; //revisar
        }else{
            produccion = producciones.next();
        }
    }

    console.log(pelicula.seasons)

    //encuadre del video
    var vid = document.createElement("video");
    var srcVid = document.createElement("source");
    vid.setAttribute("class","container");
    vid.setAttribute("controls","");
    
    //si es un apelícula, puesto que no tiene temporadas(seasons)
    if(pelicula.seasons == undefined){
        
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

        srcVid.setAttribute("src",pelicula.resource.link);
        srcVid.setAttribute("type","video/mp4");
        
        vid.appendChild(srcVid);
        divVid.appendChild(vid);

        var p2_dur = document.createElement("p");
        var p2_resDur= document.createTextNode("Duración: " + pelicula.resource.duration.toString() + " min");
        p2_dur.appendChild(p2_resDur);
        divDesc.appendChild(p2_dur);

        var p2_res = document.createElement("p");
        var p2_aud = document.createTextNode("Audios: " + pelicula.resource.audios.toString());
        p2_res.appendChild(p2_aud);
        divDesc.appendChild(p2_res);

        var p2_resSub = document.createElement("p");
        var p2_Sub = document.createTextNode("Subtítulos: " + pelicula.resource.subtitles.toString());
        p2_res.appendChild(p2_Sub);
        divDesc.appendChild(p2_resSub);
    
    }

    if (pelicula.seasons != undefined) {

        srcVid.setAttribute("src",pelicula.seasons[0].episodes[0].episode.link);
        srcVid.setAttribute("type","video/mp4");
        
        vid.appendChild(srcVid);
        divVid.appendChild(vid);

        var cap = 0;
        var tempo = 0;

        //Descripción
        var h2_pro = document.createElement("h2");
        var h2_titleS_pro = document.createTextNode(pelicula.seasons[tempo].title + " : " + pelicula.seasons[tempo].episodes[cap].title );
        h2_pro.appendChild(h2_titleS_pro);
        divDesc.appendChild(h2_pro);

        var p1_pro = document.createElement("p");
        var h2_sinop_pro = document.createTextNode(pelicula.synopsis);
        p1_pro.appendChild(h2_sinop_pro);
        divDesc.appendChild(p1_pro);
        //fin synopsis

        console.log(pelicula)

        for (let i = 0; i < pelicula.seasons.length; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("type","button");
            var btn_text = document.createTextNode("temporada " + i);
            btn.appendChild(btn_text);
            btn.addEventListener("click",function(){tempo=0});
            divDesc.appendChild(btn);
        }
        
        for (let x = 0; x < pelicula.seasons[tempo].episodes.length; x++) {
            var btnCap = document.createElement("button");
            btnCap.setAttribute("type","button");
            var btnCap_text = document.createTextNode("capitulo " + x);
            btnCap.appendChild(btnCap_text);
            btnCap.addEventListener("click",function(){cap=x});
            divDesc.appendChild(btnCap);
        }


        /*
        for (let i = 0; i < pelicula.seasons.length; i++) {
            var divTem = document.createElement("div");
            console.log("season " + pelicula.seasons[i].title);
           for (let x = 0; x < pelicula.seasons[i].episodes.length; x++) {
                
                console.log(pelicula.seasons[i].episodes[x].title);
                console.log(pelicula.seasons[i].episodes[x].episode.link);
           }
        }
        */
    }
    
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

    main.appendChild(divVid);
    main.appendChild(divDesc);

}

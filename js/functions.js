"use strict";
//cargamos los elementos del sistema
var vSistem = VideoSystem.getInstance();

function initPopulate(){
    
    loadDoc();
    //cargamos el usuario
    var usuario1 = new User("prueba","prueba@gmail.com","prueba");
    vSistem.addUser(usuario1);

    //cargamos las categorías
    var categoria1  = new Category("Acción","Peliculas y series de acción"); 
    var categoria2  = new Category("Aventura","Peliculas y series de aventuras");
    var categoria3  = new Category("Comedias","Peliculas y series de humor");
    var categoria4  = new Category("Animadas","Peliculas y series de dibujos animados");
    var categoria5  = new Category("CI-FI","Peliculas y series de ciencia ficción");
    var categoria6  = new Category("Terror","Peliculas y series de miedo");

    var arrayCat = [categoria1,categoria2,categoria3,categoria4,categoria5,categoria6];

    for (let i = 0; i < arrayCat.length; i++) {
        console.log("aqui");
        //introducirElemento(arrayCat[i].getObject(),1);
    }

    //cargamos las producciones
    var subtitulos = ["español","Ingles"];
    var audios = ["español","Ingles"];
    var recurso = new Resource(10,"video/Style-retro.mp4",audios,subtitulos);  
    var coordenadas1 = new Coordinate(444,446);
    var localizaciones = [coordenadas1,coordenadas1];

    var episodios = [
        {title: "episodio1 temporada 1", episode:recurso, scenarios:coordenadas1 },
        {title: "episodio2 temporada 1", episode:recurso, scenarios:coordenadas1 }
    ]; 

    var episodios2 = [
        {title: "episodio1 temporada 2", episode:recurso, scenarios:coordenadas1 },
        {title: "episodio2 temporada 2", episode:recurso, scenarios:coordenadas1 }
    ]; 

    var season1 = new Season("temp 1",episodios);
    var season2 = new Season("temp 2",episodios2);

    var temporadas = [season1,season2]

    var fecha = new Date("January 1, 2000");

    var serie1 = new Serie("Stranger Things","UK",fecha,"La historia arranca durante la década de los 80, en el ficticio pueblo de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano.","images/movie.jpg",season1);
    var serie2 = new Serie("The Simpsons","EEUU",fecha,"La serie de 'The Simpsons'","images/movie.jpg",season1);
    var serie3 = new Serie("Titans","EEUU",fecha,"Cuando Dick Grayson(Robin) y Rachel Roth(Raven) necesitan ayuda para lidiar con un complot que amenaza a todo el planeta, se unen con Koriand'r(Starfire) y Gar Logan(Chico Bestia) para formar los Titanes.","images/movie.jpg",temporadas);
    
    var peli1 = new Movie("Harry Potter y la piedra filosofal","UK",fecha,"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.","images/movie.jpg",recurso,localizaciones);
    var peli2 = new Movie("Coco","EEUU",fecha,"En el pequeño pueblo de Santa Cecilia en México vive Miguel Rivera, un niño de 12 años que sueña con ser un músico como su famoso ídolo Ernesto de la Cruz, un popular compositor/cantante y estrella de cine que murió cuando fue aplastado por una campana en una presentación en vivo.","images/movie.jpg",recurso,localizaciones);
    var peli3 = new Movie("It(2017)","EEUU",fecha,"Con Pennywise derrotado, Bill, Beverly, Richie, Eddie, Stanley, Ben y Mike hacen un juramento de sangre en el bosque prometiendo regresar a Derry en 27 años en caso de que «Eso» también regrese. Los siete amigos se quedan descansando un rato hasta que cada uno se despide (se da a entender que en el orden que ellos se van es el orden de sus muertes como adultos o ancianos) dejando a Bill y Beverly solos.","images/movie.jpg",recurso,localizaciones);

    var arrayProductions = [serie1,serie2,serie3,peli1,peli2,peli3];

    for (let i = 0; i < arrayProductions.length; i++){
        //introducirElemento(arrayProductions[i].getObject(),4);
    }

    //asignamos categorías
    
    var actor1 = new Person("Brenton","Thwaites","Middleton",fecha,"images/movie.jpg");
    var actor2 = new Person("Anna","Diop","",fecha,"images/movie.jpg");
    var actor3 = new Person("Teagan","Croft","McNamee",fecha,"images/movie.jpg");
    
    var actor4 = new Person("Daniel","Jacob","Radcliffe",fecha,"images/movie.jpg");
    var actor5 = new Person("Rupert Alexander","Lloyd","Grint",fecha,"images/movie.jpg");

    var actor6 = new Person("Anthony","Gonzalez","",fecha,"images/movie.jpg");
    var actor7 = new Person("Gael","García","Bernal",fecha,"images/movie.jpg");

    var actor8 = new Person("Winona","Ryder","",fecha,"images/movie.jpg");
    var actor9 = new Person("David","Harbour","",fecha,"images/movie.jpg");
    

    var actor10 = new Person("Dan","Castellaneta","",fecha,"images/movie.jpg");
    var actor11 = new Person("Julie","Kavner ","",fecha,"images/movie.jpg");

     
    var actor12 = new Person("Bill","Skarsgård","",fecha,"images/movie.jpg");
    var actor13 = new Person("Jaeden","Lieberher","",fecha,"images/movie.jpg");

    var arraActors = [actor1,actor2,actor3,actor4,actor5,actor6,actor7,actor8,actor9,actor10,actor11,actor12,actor13];
    for (let i = 0; i < arraActors.length; i++) {
        //introducirElemento(arraActors[i].getObject(),2);
    }

    /*
    vSistem.assignActor(actor8,serie1,"La prota",false);
    vSistem.assignActor(actor9,serie1,"El poli",true);

    vSistem.assignActor(actor1,serie3,"Robin",true);
    vSistem.assignActor(actor2,serie3,"Raven",false);
    vSistem.assignActor(actor3,serie3,"Star fire",false);

    vSistem.assignActor(actor10,serie2,"Homer Simpson",true);    
    vSistem.assignActor(actor11,serie2,"Homer Simpson",true);

    vSistem.assignActor(actor4,peli1,"Harry potter",true);
    vSistem.assignActor(actor5,peli1,"Ron Weasly",true);

    vSistem.assignActor(actor6,peli2,"EL niño",true);
    vSistem.assignActor(actor7,peli2,"El cantante",true);

    vSistem.assignActor(actor12,peli3,"El payaso malo",true);
    vSistem.assignActor(actor13,peli3,"La prota",true);
    */

    var fecha1 = new Date("Jun 27, 1966");
    var fecha2 = new Date("May 14, 1944");

    var director1 = new Person("Jeffrey","Jacob","Abrams",fecha1,"images/movie.jpg");
    var  director2 = new Person("George ","Walton","Lucas",fecha2,"images/movie.jpg");
    
    var arrayDirectors = [director1,director2];
    /*
    for (let i = 0; i < arrayDirectors.length; i++) {
        vSistem.addDirector(arrayDirectors[i]);
        vSistem.assignDirector(arrayDirectors[i],serie1);
        vSistem.assignDirector(arrayDirectors[i],serie2);
        vSistem.assignDirector(arrayDirectors[i],peli1);
        vSistem.assignDirector(arrayDirectors[i],peli2);
    }
    */
    for (let i = 0; i < arrayDirectors.length; i++) {
        //introducirElemento(arrayDirectors[i].getObject(),3);
    }

    var request = indexedDB.open("VSystemDB");
    request.onsuccess = function() {
        var db = event.target.result;
        var store = db.transaction(["categorias","directores","actores","producciones",'categoriasAsig']);
        
        // Desgraciadamente, todo sigue siendo asíncrono y lo que podría ser
        // un sencillo y lineal bucle se convierte en callbacks 
        var DdBb = store.objectStore('actores');
        DdBb.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            // cursor será truthy mientras haya elementos que procesar
            if (cursor) {
                // En cursor.value tenemos el elemento actual
                var current = cursor.value;
                var born = new Date (current.born);
                var actor = new Person(current.name,current.lastName1,current.lastName2,born,current.picture);
                //console.log(actor);
                vSistem.addActor(actor)
                //console.log(vSistem.addActor(actor));
                
                // Pasamos a procesar el siguiente resultado
                cursor.continue();
            }
        };

        var DdBb = store.objectStore('categorias');
        DdBb.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            // cursor será truthy mientras haya elementos que procesar
            if (cursor) {
                // En cursor.value tenemos el elemento actual
                var current = cursor.value;
                var categoria = new Category(current.nombre,current.descripcion);
                //console.log(categoria);
                vSistem.addCategory(categoria);
                // Pasamos a procesar el siguiente resultado
                cursor.continue();
            }
        };

        var DdBb = store.objectStore('directores');
        DdBb.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            // cursor será truthy mientras haya elementos que procesar
            if (cursor) {
                // En cursor.value tenemos el elemento actual
                
                var current = cursor.value;
                var born = new Date (current.born);
                var director = new Person(current.name,current.lastName1,current.lastName2,born,current.picture);
                //console.log(director);
                console.log(vSistem.addDirector(director));
                // Pasamos a procesar el siguiente resultado
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
                        //console.log(current.seasons === undefined)
                        //console.log(current)
                        var publication = new Date (current.born);
                        var resource = new Resource(Number(current.resource.duration),current.resource.link,current.resource.audios,current.resource.subtitles);
                        var produccion = new Movie(current.title, current.nationality, publication, current.synopsis,current.image,resource,current.locations);
                        console.log(vSistem.addProduction(produccion));
                        //introducirElemento(produccion.getObject(),4);
                }else{
                        
                }
                cursor.continue();
            };
        };

        //asignamos categorías a producciones
        asignarCatDb(categoria1.name,[serie3.title]);
        asignarCatDb(categoria2.name,[peli1.title,serie1]);
        asignarCatDb(categoria3.name,[serie2.title]);
        asignarCatDb(categoria4.name,[peli2.title]);
        asignarCatDb(categoria5.name,[serie1.title]);
        asignarCatDb(categoria6.name,[peli3.title]);

        /*
        vSistem.assignCategory(categoria1,serie3);
        vSistem.assignCategory(categoria2,peli1);
        vSistem.assignCategory(categoria3,serie2);
        vSistem.assignCategory(categoria4,peli2);
        vSistem.assignCategory(categoria5,serie1);
        vSistem.assignCategory(categoria2,serie1);
        vSistem.assignCategory(categoria6,peli3);*/

    }
/*
    var store = db.transaction(["categorias","directores","actores","producciones",'categoriasAsig']);
    var DdBb = store.objectStore('categoriasAsig');
        DdBb.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            var categoria ;
            var produccion ;

            // cursor será truthy mientras haya elementos que procesar
            if (cursor) {
                var current = cursor.value;
                for (let x = 0; x < current.produccion.length; x++) {
                    console.log(current.categoria + " " + current.produccion[x]);

                    db.transaction("producciones").objectStore("producciones").get(current.produccion[x]).onsuccess = function(event) {
                        alert(event.target.result.value);
                        produccion = event.target.result;
                    }
                    console.log(produccion.value)

                    db.transaction("categorias").objectStore("categorias").get(current.categoria).onsuccess = function(event) {
                        alert(event.target.result.value);
                        categoria = event.target.result;
                    };
                    console.log(categoria.value)

                    vSistem.assignCategory(categoria,produccion)
                }
                
                cursor.continue();
            };
    };
*/
}

function initSistem(){
    cargarDB();
    initPopulate();
    createHomePage();

    if(checkCookie()){
        var opcion = document.getElementById("administrar");
        var btnIni = document.getElementById("iniciar");
        btnIni.removeAttribute("data-target");
        var msg2 = document.createTextNode("Cerrar sesión");
        btnIni.replaceChild(msg2,btnIni.lastChild);
        btnIni.setAttribute("onclick","cerrarSes()");
        opcion.setAttribute("class","nav-item d-line");
        var username = document.getElementById("userName");
        username.innerHTML = "Bienvenido: " + getCookie("username");
        $('#myModal').modal('hide');
    };

    
}

//muestra la página principal
function showHomePage() {
    hideAll();
    createHomePage();
    
    var main = document.getElementById("main");
    main.setAttribute("class","d-line");

    var header = document.getElementById("head");
    header.setAttribute("class","d-block");
}

//crea el menu con las opciones
function categoriesMenuPopulate() {
    var main = document.getElementById("main");
    main.setAttribute("class","d-line");
    //console.log((main.getAttribute("display")));

    //cargamos el menú con las opciones
    var navBarCat = document.getElementById("categories");
    
    //borramos todos los elemetos 
    while(navBarCat.firstChild){
        navBarCat.removeChild(navBarCat.firstChild);
    }

    var categorias = vSistem.categories;
    var categoria = categorias.next();
    while (categoria.done !== true){
        
        var textA = document.createTextNode(categoria.value.name);
        
        //opciones del menú
        var li = document.createElement("li");
        li.setAttribute("class","nav-item");

        var a = document.createElement("a");
        a.setAttribute("class","nav-link ");
        a.setAttribute("href","#" + textA.textContent);
        a.setAttribute("onclick","showHomePage()");

        a.appendChild(textA);
        li.appendChild(a);
        navBarCat.appendChild(li);

        //encuadres de las categorías
        var textN = document.createTextNode(categoria.value.name);
        var div = document.createElement("div");
        div.setAttribute("class","position-relative mt-5");
        div.setAttribute("id",textN.textContent);
        var h2 = document.createElement("h2");

        h2.appendChild(textN);
        div.appendChild(h2);
        main.appendChild(div);
        
        categoria = categorias.next();
    }

    //boton menu actores
    var li_act = document.createElement("li");
    li_act.setAttribute("class","nav-item");

    var nodeTex_act = document.createTextNode("Actores");

    var a_actors = document.createElement("a");
    a_actors.setAttribute("class","nav-link ");
    a_actors.setAttribute("href","#");
    a_actors.setAttribute("onclick","showActors()");

    a_actors.appendChild(nodeTex_act);
    li_act.appendChild(a_actors);
    navBarCat.appendChild(li_act);
    //fin boton menu actores

    //boton menu Directores
    var li_direct = document.createElement("li");
    li_direct.setAttribute("class","nav-item");

    var nodeTex_direct = document.createTextNode("Directores");

    var a_direct = document.createElement("a");
    a_direct.setAttribute("class","nav-link ");
    a_direct.setAttribute("href","#");
    a_direct.setAttribute("onclick","showDirectors()");

    a_direct.appendChild(nodeTex_direct);
    li_direct.appendChild(a_direct);
    navBarCat.appendChild(li_direct);
    //fin boton menu Directores

    //boton menu Administrar
    var li_admin = document.createElement("li");
    //console.log(checkCookie());
    if (!checkCookie()) {
        li_admin.setAttribute("class","nav-item d-none");
    }else{
        li_admin.setAttribute("class","nav-item d-block");
    }
    li_admin.setAttribute("id","administrar");

    var nodeTex_admin = document.createTextNode("Administración");

    var a_admin = document.createElement("a");
    a_admin.setAttribute("class","nav-link ");
    a_admin.setAttribute("href","#");
    a_admin.setAttribute("onclick","showAdmin()");

    a_admin.appendChild(nodeTex_admin);
    li_admin.appendChild(a_admin);
    navBarCat.appendChild(li_admin);
    //fin boton menu Administrar

}
//crea los elementos del inicio
function createHomePage() {
    var main = document.getElementById("main");
    main.setAttribute("class","d-line");
    //console.log((main.getAttribute("display")));
    
    //borramos todos los elemetos 
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
    categoriesMenuPopulate();

    //slider con peliculas de cada categoría
    var categorias = vSistem.categories;
    var categoria = categorias.next();
    while (categoria.done !== true){
        //console.log(categoria.value.name);

        //con esto hacemos que sea un identificador diferente para dada seccion
        var nodeTxt =  document.createTextNode(categoria.value.name);
        
        //Creamos el slider
        var divSlider = document.createElement("div");
        var idElemSlider = "demo_" + nodeTxt.textContent;
        divSlider.setAttribute("id",idElemSlider);
        divSlider.setAttribute("class","carousel slide");
        divSlider.setAttribute("data-ride","carousel");

        //indicadores del slider
        var ul = document.createElement("ul");
        ul.setAttribute("class","carousel-indicators");
        

        //seccion de imágenes 
        var divInner = document.createElement("div");
        divInner.setAttribute("class","carousel-inner");
        
        divSlider.appendChild(ul);
        divSlider.appendChild(divInner);

       
        //con esto activamos elelemento del slider
        var activeItem = true;
        //contador de sliders
        var cont = 0;
        var producciones = vSistem.getProductionsCategory(categoria.value);
        var produccion = producciones.next();
        while (produccion.done !== true){
            //titulo y enlace del recurso
            var titleFilm = produccion.value.title;
            var imgResource = produccion.value.image;

            var divImageS = document.createElement("div");

            //indicadores del carrusel
            var li = document.createElement("li");
            li.setAttribute("data-target","#"+idElemSlider);
            li.setAttribute("data-slide-to",cont);

            if (activeItem){
                divImageS.setAttribute("class","carousel-item active");
                
                //indicadores activos del carrusel
                li.setAttribute("class","active");
                activeItem = false;
            }else{
                divImageS.setAttribute("class","carousel-item");
                li.removeAttribute("class","active");
            }
            
            var divInfo = document.createElement("div");    
            divInfo.setAttribute("class","carousel-caption d-block");
            var h5 = document.createElement("h5");
            var nodeTxtInfo = document.createTextNode(titleFilm);
            h5.appendChild(nodeTxtInfo);

            var a = document.createElement("a");
            a.setAttribute("id",titleFilm);
            a.setAttribute("href","#");
            a.setAttribute("onclick","showProduction(this.id)");
            var nodeTxtlink = document.createTextNode("más info");
            a.appendChild(nodeTxtlink);

            divInfo.appendChild(h5);
            divInfo.appendChild(a);
            
            cont++;

            var img = document.createElement("img");
            img.setAttribute("alt",titleFilm);
            img.setAttribute("src",imgResource);

            divImageS.appendChild(img);
            divImageS.appendChild(divInfo);
            divInner.appendChild(divImageS);

            ul.appendChild(li);

            //botones laterales
            var aPrev = document.createElement("a");
            aPrev.setAttribute("class","carousel-control-prev");
            aPrev.setAttribute("href","#"+idElemSlider);
            aPrev.setAttribute("data-slide","prev");

            var spanP = document.createElement("span");
            spanP.setAttribute("class","carousel-control-prev-icon");
            
            aPrev.appendChild(spanP);

            var aNext = document.createElement("a");
            aNext.setAttribute("class","carousel-control-next");
            aNext.setAttribute("href","#"+idElemSlider);
            aNext.setAttribute("data-slide","next");

            var spanN = document.createElement("span");
            spanN.setAttribute("class","carousel-control-next-icon");

            aNext.appendChild(spanN);
            //fin botones laterales

            var section = document.getElementById(nodeTxt.textContent);
            
            section.appendChild(divSlider);
            section.appendChild(aPrev);
            section.appendChild(aNext);
            //console.log (produccion.value.title);
            //console.log (produccion.value.image);
            
            produccion = producciones.next();
        }

        //cargar el siguiente
        categoria = categorias.next();
    }
    
}
//crea la seccion de actores
function createActors(element,actores){
    
    var div_actors = document.createElement("div");
    //div_actors.setAttribute("id","actors");
    div_actors.setAttribute("class","d-flex flex-wrap justify-content-center");
    element.appendChild(div_actors);
    //console.log(element);
    //actores participantes
    var actor = actores.next();
    while (actor.done !== true){
        var a = document.createElement("a");
        a.setAttribute("id",actor.name + "-" + element.id);
        a.setAttribute("href","#" + actor.name);
        a.setAttribute("onclick","showActor(this.textContent)");
        var figuActor_pro = document.createElement("figure");
        figuActor_pro.setAttribute("class","m-2 myFigure")
        var imgActor_pro = document.createElement("img");
        imgActor_pro.setAttribute("alt",actor.name);
        imgActor_pro.setAttribute("src","images/movie.jpg");
        imgActor_pro.setAttribute("class","img-fluid");
        imgActor_pro.setAttribute("width","250");
        var figCapActor_pro = document.createElement("figcaption");
        figCapActor_pro.setAttribute("class","myFigcap");
        var nodeTexActor_pro = document.createTextNode(actor.name );
        //console.log ("Actor:" + actor.name + ", Personaje: " + actor.character + "\n");
        
        figuActor_pro.appendChild(imgActor_pro);
        figuActor_pro.appendChild(figCapActor_pro);
        figCapActor_pro.appendChild(nodeTexActor_pro);
        a.appendChild(figuActor_pro);

        var div = document.createElement("div");
        div.appendChild(a);
        div_actors.appendChild(div);

        var actor = actores.next();
    }

}
//crea la seccion de directores
function createDirectors(element,title_production){
    
    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){
        //console.log(director.value.productions);
        var arrayProDir = director.value.productions;
        
        for (let i = 0; i < arrayProDir.length; i++) {
            
            if (title_production == null) {
                //el valor null indica que queremos ver todos los directores
                var proDir = true;
            }else{
                //si existe la produccion de ese director, la recogemos y la mostramos
                var proDir = (director.value.productions[i].title === title_production);
            }

            if (proDir) {
                var div = document.createElement("div");
                element.appendChild(div);
                
                var a = document.createElement("a");
                a.setAttribute("href","#");
                a.setAttribute("onclick","showDirector(this.textContent)");               
                var figuDirect_pro = document.createElement("figure");
                figuDirect_pro.setAttribute("class","m-2 myFigure")
                var imgDirect_pro = document.createElement("img");
                imgDirect_pro.setAttribute("alt",director.value.name);
                imgDirect_pro.setAttribute("src","images/movie.jpg");
                imgDirect_pro.setAttribute("class","img-fluid");
                imgDirect_pro.setAttribute("width","250");
                var figCapDirect_pro = document.createElement("figcaption");
                figCapDirect_pro.setAttribute("class","myFigcap");
                var nodeTexDirect_pro = document.createTextNode(director.value.name);
                //console.log ("Direct:" + Direct.name + ", Personaje: " + Direct.character + "\n");

                figuDirect_pro.appendChild(imgDirect_pro);
                figuDirect_pro.appendChild(figCapDirect_pro);
                figCapDirect_pro.appendChild(nodeTexDirect_pro);
                a.appendChild(figuDirect_pro);
                div.appendChild(a);
            }
        }

        director = directores.next();
    }

}
//muestra la info de una produccion
function showProduction(title_production){

    hideAll();

    var main = document.getElementById("main");
    var mainPro = document.getElementById("main-production");
    //var divCast = document.getElementById("cast");
    
    //borramos todos los elemetos 
    while(mainPro.firstChild){
        mainPro.removeChild(mainPro.firstChild);
    }

    main.setAttribute("class","d-none");
    mainPro.setAttribute("class","d-line");

    //recogemos la producción concreta
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    while (produccion.done !== true){
        //console.log(produccion.value.title);
        var title = produccion.value.title;
        
        if(title == title_production){
            var pelicula = produccion.value;
            var actores = vSistem.getCast(produccion.value);
            break; //revisar - condición de ruptura
        }else{
            produccion = producciones.next();
        }
    }

    //imagen de la película
    var divImg = document.createElement("div");
    divImg.setAttribute("class","imgDesc");
    
    var img = document.createElement("img"); 
    img.setAttribute("class","pro_img");
    img.setAttribute("alt",pelicula.title);
    img.setAttribute("src",pelicula.image);
    img.setAttribute("class","img-fluid");
    img.setAttribute("width","100%");

    var fig_pro = document.createElement("figure");
    fig_pro.setAttribute("class","myFigure");

    var figcap_pro = document.createElement("figcaption");
    figcap_pro.setAttribute("class","myFigcap");
    var nodeText_pro = document.createTextNode(pelicula.title);
    figcap_pro.appendChild(nodeText_pro);

    fig_pro.appendChild(img);
    fig_pro.appendChild(figcap_pro);
    //fig_pro.appendChild(figcap_pro);

    divImg.appendChild(fig_pro);
    mainPro.appendChild(divImg);
    //fin imagen de la película

    var btn = document.createElement("button");
    btn.setAttribute("type","button");
    var btn_text = document.createTextNode("ver");
    btn.appendChild(btn_text);
    btn.addEventListener("click",function(){crearVentana(this.value)});
    btn.setAttribute("value",pelicula.title);
    btn.setAttribute("class","btn");
    divImg.appendChild(btn);

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

    //audios

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
    
    }

    //fin audios

    var divImgDesv = document.createElement("div");
    /*divImgDesv.setAttribute("class","d-flex justify-content-around");*/
    divImgDesv.appendChild(divImg);
    divImgDesv.appendChild(divDesc);
    
    mainPro.appendChild(divImgDesv);
    //h2 actores
    var h2_pro_actors = document.createElement("h2");
    var h2_actors_pro = document.createTextNode("Actores");
    h2_pro_actors.appendChild(h2_actors_pro);
    mainPro.appendChild(h2_pro_actors);
    //fin h2 actores

    createActors(mainPro,actores);

    //h2 directores
    var h2_pro_directors = document.createElement("h2");
    var h2_directors_pro = document.createTextNode("Directores");
    h2_pro_directors.appendChild(h2_directors_pro);
    mainPro.appendChild(h2_pro_directors);
    //fin h2 directores
    
    var div_Directs = document.createElement("div");
    //div_Directs.setAttribute("id","directors_s");
    div_Directs.setAttribute("class","d-flex flex-wrap justify-content-center");
    mainPro.appendChild(div_Directs);
    
    createDirectors(div_Directs,title_production);

    //figcap.textContent = figcap.textContent.replace(figcap.textContent,pelicula.title);
    //var p_pro = mainPro.getElementsByTagName("p")[0];
    //p_pro.textContent = p_pro.textContent.replace(p_pro.textContent,pelicula.synopsis);

}
// muestra una lista de producciones
function showProductions(elemt,actor,type) {
    
    var div_product = document.createElement("div");
    //div_product.setAttribute("id","div_product");
    div_product.setAttribute("class","d-flex flex-wrap justify-content-center align-content-between");
    elemt.appendChild(div_product);
    //cambiamos la busqueda depandiendo del objeto
    //console.log(type);
    if (type == "actor") {
        var productions = vSistem.getProductionsActor(actor);
    }

    if (type == "director") {
        var productions = vSistem.getProductionsDirector(actor);
    }

    
    var production = productions.next();
    while (production.done !== true){
        //console.log(production.production);
        
        var div = document.createElement("div");
        //production.production
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.setAttribute("onclick","showProduction(this.textContent)");
        var figuActor_pro = document.createElement("figure");
        figuActor_pro.setAttribute("class","myFigure")
        var imgActor_pro = document.createElement("img");
        imgActor_pro.setAttribute("alt",production.production.title);
        imgActor_pro.setAttribute("src","images/movie.jpg");
        imgActor_pro.setAttribute("class","img-fluid");
        imgActor_pro.setAttribute("width","250");
        var figCapActor_pro = document.createElement("figcaption");
        figCapActor_pro.setAttribute("class","myFigcap");
        var nodeTexActor_pro = document.createTextNode(production.production.title);
        //console.log ("Actor:" + actor.value.name + ", Personaje: " + actor.value.character + "\n");
        
        figuActor_pro.appendChild(imgActor_pro);
        figuActor_pro.appendChild(figCapActor_pro);
        figCapActor_pro.appendChild(nodeTexActor_pro);
        a.appendChild(figuActor_pro);
        div.appendChild(a)
        div_product.appendChild(div);
        
        production = productions.next();
    }
}
//muestra todos los actores
function showActors(){

    hideAll()

    var mainAct = document.getElementById("main-actors");
    mainAct.setAttribute("class","d-line");

    //borramos todos los elementos 
    while(mainAct.firstChild){
        mainAct.removeChild(mainAct.firstChild);
    }

    //titulo actores
    var h2_act = document.createElement("h2");
    var h2_ntp = document.createTextNode("Actores");
    h2_act.appendChild(h2_ntp);
    mainAct.appendChild(h2_act);
    //fin titulo actores

    var div_actors = document.createElement("div");
    div_actors.setAttribute("id","actors_list");
    div_actors.setAttribute("class","d-flex flex-wrap justify-content-center align-content-between container");
    mainAct.appendChild(div_actors);
    
    //actores participantes
    var actores = vSistem.actors;
    var actor = actores.next();
    while (actor.done !== true){

        var div = document.createElement("div");
        mainAct.appendChild(div);

        var a = document.createElement("a");
        a.setAttribute("id",actor.value.name);
        a.setAttribute("href","#");
        a.setAttribute("onclick","showActor(this.id)");
        var figuActor_pro = document.createElement("figure");
        figuActor_pro.setAttribute("class","m-2 myFigure")
        var imgActor_pro = document.createElement("img");
        imgActor_pro.setAttribute("alt",actor.value.name);
        imgActor_pro.setAttribute("src","images/movie.jpg");
        imgActor_pro.setAttribute("class","img-fluid");
        imgActor_pro.setAttribute("width","250");
        var figCapActor_pro = document.createElement("figcaption");
        figCapActor_pro.setAttribute("class","myFigcap");
        var nodeTexActor_pro = document.createTextNode(actor.value.name + " " + actor.value.lastName1);
        //console.log ("Actor:" + actor.value.name + ", Personaje: " + actor.value.character + "\n");
        figCapActor_pro.appendChild(nodeTexActor_pro);

        figuActor_pro.appendChild(imgActor_pro);
        figuActor_pro.appendChild(figCapActor_pro);
        
        a.appendChild(figuActor_pro);
        div.appendChild(a);
        div_actors.appendChild(div);

        var actor = actores.next();
    }
}
//muestra la información de un actor
function showActor(name_actor) {

    hideAll();

    var mainActor = document.getElementById("main-actor-info");
    //var divCast = document.getElementById("cast");
    
    //borramos todos los elemetos 
    while(mainActor.firstChild){
        mainActor.removeChild(mainActor.firstChild);
    }

    mainActor.setAttribute("class","d-line");

    //recogemos la producción concreta
    var actores = vSistem.actors;
    var actor = actores.next();
    while (actor.done !== true){
        //console.log(actor.value.title);
        var name = actor.value.name;

        if(name == name_actor){
            var actor_objetiv = actor.value;
            //console.log(actor_objetiv);
            break; //revisar
        }else{
            actor = actores.next();
        }
    }

    //imagen de la película
    var divImg = document.createElement("div");
    divImg.setAttribute("class","imgDesc");

    var fig_act = document.createElement("figure");
    fig_act.setAttribute("class","myFigure");

    var img = document.createElement("img"); 
    img.setAttribute("class","pro_img");
    img.setAttribute("alt",actor_objetiv.name);
    img.setAttribute("src",actor_objetiv.picture);
    img.setAttribute("class","img-fluid");
    img.setAttribute("width","100%");

    var figcap_act = document.createElement("figcaption");
    figcap_act.setAttribute("class","myFigcap");
    var nodeText_act = document.createTextNode(actor_objetiv.name + " " + actor_objetiv.lastName1 ); 
    figcap_act.appendChild(nodeText_act);


    fig_act.appendChild(img);
    fig_act.appendChild(figcap_act);
    divImg.appendChild(fig_act);
    
    var divDesc = document.createElement("div"); 
    //Nombre completo
    var p_pro = document.createElement("p");
    var p_nt = document.createTextNode("Nombre : " + actor_objetiv.name + " " + actor_objetiv.lastName1 + " " + actor_objetiv.lastName2);
    p_pro.appendChild(p_nt);
    //Nombre completo

    //Nombre completo
    var p_date = document.createElement("p");
    var p_ntd = document.createTextNode("Fecha de nacimiento : " + actor_objetiv.born);
    p_date.appendChild(p_ntd);
    //Nombre completo
    
    //titulo producciones
    var h2_pro = document.createElement("h2");
    var h2_ntp = document.createTextNode("Producciones");
    h2_pro.appendChild(h2_ntp);
    
    //fin titulo producciones

    var div = document.createElement("div");
    /*div.setAttribute("class","d-flex justify-content-around");*/
    
    div.appendChild(divImg);
    div.appendChild(divDesc);
    mainActor.appendChild(div);
    divDesc.appendChild(p_date);
    
    mainActor.appendChild(h2_pro);
    showProductions(mainActor,actor_objetiv,"actor");

}
//muestra todos los directores
function showDirectors(){
    
    hideAll();

    var mainDir = document.getElementById("main-directors");
    mainDir.setAttribute("class","d-line");

    //borramos todos los elementos 
    while(mainDir.firstChild){
        mainDir.removeChild(mainDir.firstChild);
    }

    var div_directors = document.createElement("div");
    div_directors.setAttribute("id","actors_list");
    div_directors.setAttribute("class","d-flex flex-wrap justify-content-center align-content-between");
    
    mainDir.appendChild(div_directors);

    //titulo directores
    var h2_act = document.createElement("h2");
    var h2_ntp = document.createTextNode("Directores");
    h2_act.appendChild(h2_ntp);
    mainDir.appendChild(h2_act);
    //fin titulo directores

    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){

        var div = document.createElement("div");
        div_directors.appendChild(div);

        //console.log(director.value.productions);
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.setAttribute("onclick","showDirector(this.textContent)");               
        var figuDirect_pro = document.createElement("figure");
        figuDirect_pro.setAttribute("class","m-2 myFigure")
        var imgDirect_pro = document.createElement("img");
        imgDirect_pro.setAttribute("alt",director.value.name);
        imgDirect_pro.setAttribute("src","images/movie.jpg");
        imgDirect_pro.setAttribute("class","img-fluid");
        imgDirect_pro.setAttribute("width","250");
        var figCapDirect_pro = document.createElement("figcaption");
        figCapDirect_pro.setAttribute("class","myFigcap");
        var nodeTexDirect_pro = document.createTextNode(director.value.name);
        //console.log ("Direct:" + Direct.name + ", Personaje: " + Direct.character + "\n");

        figuDirect_pro.appendChild(imgDirect_pro);
        figuDirect_pro.appendChild(figCapDirect_pro);
        figCapDirect_pro.appendChild(nodeTexDirect_pro);
        a.appendChild(figuDirect_pro)
        div_directors.appendChild(a); 
        div.appendChild(a);
        director = directores.next();
    }

    mainDir.appendChild(div_directors);
}
function showDirector(name_director){
    hideAll();
    
    console.log(name_director);
    var mainActor = document.getElementById("main-actor-info");
    //var divCast = document.getElementById("cast");
    
    //borramos todos los elemetos 
    while(mainActor.firstChild){
        mainActor.removeChild(mainActor.firstChild);
    }

    mainActor.setAttribute("class","d-line");

    //recogemos la producción concreta
    var directors = vSistem.directors;
    var director = directors.next();
    while (director.done !== true){
        //console.log(director.value.title);
        var name = director.value.name;

        if(name == name_director){
            var director_objetiv = director.value;
            //console.log(director_objetiv);
            break; //revisar
        }else{
            director = directors.next();
        }
    }
    
    var divImg = document.createElement("div");
    divImg.setAttribute("class","imgDesc");

    //imagen de la película
    var img = document.createElement("img"); 
    img.setAttribute("class","pro_img");
    img.setAttribute("alt",director_objetiv.name);
    img.setAttribute("src",director_objetiv.picture);
    img.setAttribute("class","img-fluid");
    img.setAttribute("width","100%");

    var fig_act = document.createElement("figure");
    fig_act.setAttribute("class","myFigure");
    fig_act.appendChild(img);

    var figcap_act = document.createElement("figcaption");
    figcap_act.setAttribute("class","myFigcap")
    var nodeText_act = document.createTextNode(director_objetiv.name + " " + director_objetiv.lastName1 ); 
    figcap_act.appendChild(nodeText_act);

    fig_act.appendChild(figcap_act);
    divImg.appendChild(fig_act);

    //Nombre completo
    var p_pro = document.createElement("p");
    var p_nt = document.createTextNode("Nombre : " + director_objetiv.name + " " + director_objetiv.lastName1 + " " + director_objetiv.lastName2);
    p_pro.appendChild(p_nt);
    //Nombre completo

    //fecha
    var p_date = document.createElement("p");
    var p_ntd = document.createTextNode("Fecha de nacimiento : " + director_objetiv.born);
    p_date.appendChild(p_ntd);
    //fecha
    
    //titulo producciones
    var h2_pro = document.createElement("h2");
    var h2_ntp = document.createTextNode("Producciones");
    h2_pro.appendChild(h2_ntp);
    //fin titulo producciones

    var divDesc = document.createElement("div");
    divDesc.appendChild(p_pro);
    divDesc.appendChild(p_date);

    var div = document.createElement("div");
    /*div.setAttribute("class","d-flex justify-content-around");*/
    div.appendChild(divImg);
    div.appendChild(divDesc);

    mainActor.appendChild(div);
    mainActor.appendChild(h2_pro);

    showProductions(mainActor,director_objetiv,"director");
}
//oculta todos los elementos
function hideAll(){
    var main = document.getElementById("main");
    var mainPro = document.getElementById("main-production");
    var mainAct = document.getElementById("main-actors");
    var mainDir = document.getElementById("main-directors");
    var mainActInfo = document.getElementById("main-actor-info");
    var mainAdmin = document.getElementById("main-mod-admin");
    
    mainDir.setAttribute("class","d-none");
    main.setAttribute("class","d-none");
    mainPro.setAttribute("class","d-none");
    mainAct.setAttribute("class","d-none");
    mainActInfo.setAttribute("class","d-none");
    mainAdmin.setAttribute("class","d-none");
}

window.onload = initSistem;


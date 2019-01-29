"use strict";
//cargamos los elementos del sistema
var vSistem = VideoSystem.getInstance();

function initPopulate(){
    
    //cargamos las categorías
    var categoria1  = new Category("Acción","Peliculas y series de acción"); 
    var categoria2  = new Category("Aventura","Peliculas y series de aventuras");
    var categoria3  = new Category("Comedias","Peliculas y series de humor");
    var categoria4  = new Category("Animadas","Peliculas y series de dibujos animados");
    var categoria5  = new Category("CI-FI","Peliculas y series de ciencia ficción");
    var categoria6  = new Category("Terror","Peliculas y series de miedo");

    var arrayCat = [categoria1,categoria2,categoria3,categoria4,categoria5,categoria6];

    for (let i = 0; i < arrayCat.length; i++) {
        vSistem.addCategory(arrayCat[i]);
    }

    //cargamos las producciones
    var subtitulos = ["español","Ingles"];
    var audios = ["español","Ingles"];
    var recurso = new Resource(10,"video.vwm",audios,subtitulos);  
    var coordenadas1 = new Coordinate(444,446);
    var localizaciones = [coordenadas1,coordenadas1];

    var episodios = [
        {title: "episodio1 temporada 1", episode:recurso, scenarios:coordenadas1, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
        {title: "episodio2 temporada 1", episode:recurso, scenarios:coordenadas1, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} }
    ]; 

    var season1 = new Season("temp 1",episodios);

    var fecha = new Date("January 1, 2000");

    var serie1 = new Serie("Stranger Things","UK",fecha,"La historia arranca durante la década de los 80, en el ficticio pueblo de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano.","images/movie.jpg",season1);
    var serie2 = new Serie("The Simpsons","EEUU",fecha,"La serie de 'The Simpsons'","images/movie.jpg",season1);
    var serie3 = new Serie("Titans","EEUU",fecha,"Cuando Dick Grayson(Robin) y Rachel Roth(Raven) necesitan ayuda para lidiar con un complot que amenaza a todo el planeta, se unen con Koriand'r(Starfire) y Gar Logan(Chico Bestia) para formar los Titanes.","images/movie.jpg",season1);
    
    var peli1 = new Movie("Harry Potter y la piedra filosofal","UK",fecha,"Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre.","images/movie.jpg",recurso,localizaciones);
    var peli2 = new Movie("Coco","EEUU",fecha,"En el pequeño pueblo de Santa Cecilia en México vive Miguel Rivera, un niño de 12 años que sueña con ser un músico como su famoso ídolo Ernesto de la Cruz, un popular compositor/cantante y estrella de cine que murió cuando fue aplastado por una campana en una presentación en vivo.","images/movie.jpg",recurso,localizaciones);
    var peli3 = new Movie("It(2017)","EEUU",fecha,"Con Pennywise derrotado, Bill, Beverly, Richie, Eddie, Stanley, Ben y Mike hacen un juramento de sangre en el bosque prometiendo regresar a Derry en 27 años en caso de que «Eso» también regrese. Los siete amigos se quedan descansando un rato hasta que cada uno se despide (se da a entender que en el orden que ellos se van es el orden de sus muertes como adultos o ancianos) dejando a Bill y Beverly solos.","images/movie.jpg",recurso,localizaciones);

    var arrayProductions = [serie1,serie2,serie3,peli1,peli2,peli3];

    for (let i = 0; i < arrayProductions.length; i++){
        vSistem.addProduction(arrayProductions[i]);
    }

    //asignamos categorías
    vSistem.assignCategory(categoria1,serie3);
    vSistem.assignCategory(categoria2,peli1);
    vSistem.assignCategory(categoria3,serie2);
    vSistem.assignCategory(categoria4,peli2);
    vSistem.assignCategory(categoria5,serie1);
    vSistem.assignCategory(categoria2,serie1);
    vSistem.assignCategory(categoria6,peli3);

    var fecha1 = new Date("Aogust 10, 1989");
    var actor1 = new Person("Brenton","Thwaites","Middleton",fecha1,"images/movie.jpg");
    var actor2 = new Person("Anna","Diop","",fecha1,"images/movie.jpg");
    var actor3 = new Person("Teagan","Croft","McNamee",fecha1,"images/movie.jpg");
    
    var actor4 = new Person("Daniel","Jacob","Radcliffe",fecha1,"images/movie.jpg");
    var actor5 = new Person("Rupert Alexander","Lloyd","Grint",fecha1,"images/movie.jpg");

    var actor6 = new Person("Anthony","Gonzalez","",fecha1,"images/movie.jpg");
    var actor7 = new Person("Gael","García","Bernal",fecha1,"images/movie.jpg");

    var actor8 = new Person("Winona","Ryder","",fecha1,"images/movie.jpg");
    var actor9 = new Person("David","Harbour","",fecha1,"images/movie.jpg");
    

    var actor10 = new Person("Dan","Castellaneta","",fecha1,"images/movie.jpg");
    var actor11 = new Person("Julie","Kavner ","",fecha1,"images/movie.jpg");

     
    var actor12 = new Person("Bill","Skarsgård","",fecha1,"images/movie.jpg");
    var actor13 = new Person("Jaeden","Lieberher","",fecha1,"images/movie.jpg");

    var arraActors = [actor1,actor2,actor3,actor4,actor5,actor6,actor7,actor8,actor9,actor10,actor11,actor12,actor13];
    for (let i = 0; i < arraActors.length; i++) {
        vSistem.addActor(arraActors[i]);
    }

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

    var fecha1 = new Date("Jun 27, 1966");
    var fecha2 = new Date("May 14, 1944");

    var director1 = new Person("Jeffrey","Jacob","Abrams",fecha1,"ruta");
    var  director2 = new Person("George ","Walton","Lucas",fecha2,"ruta");

    var arrayDirectors = [director1,director2];
    for (let i = 0; i < arrayDirectors.length; i++) {
        vSistem.addDirector(arrayDirectors[i]);
        vSistem.assignDirector(arrayDirectors[i],serie1);
        vSistem.assignDirector(arrayDirectors[i],serie2);
        vSistem.assignDirector(arrayDirectors[i],peli1);
        vSistem.assignDirector(arrayDirectors[i],peli2);
    }

    createHomePage();

}

function showHomePage() {
    var main = document.getElementById("main");
    var mainPro = document.getElementById("main-production");
    main.setAttribute("class","d-line");
    mainPro.setAttribute("class","d-none");
}

function createHomePage() {
    var main = document.getElementById("main");
    main.setAttribute("class","d-line");
    //console.log((main.getAttribute("display")));
    
    //cargamos el menú con las opciones
    var navBarCat = document.getElementById("categories");
    
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
        div.setAttribute("class","position-relative");
        div.setAttribute("id",textN.textContent);
        var h2 = document.createElement("h2");

        h2.appendChild(textN);
        div.appendChild(h2);
        main.appendChild(div);
        
        categoria = categorias.next();
    }
    //fin opciones del menu

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

function showProduction(element){

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
        
        if(title == element){
            var pelicula = produccion.value;
            var actores = vSistem.getCast(produccion.value);
            break; //revisar
        }else{
            produccion = producciones.next();
        }
    }

    //imagen de la película
    var img = document.createElement("img"); 
    img.setAttribute("class","pro_img");
    img.setAttribute("alt",pelicula.title);
    img.setAttribute("src",pelicula.image);
    img.setAttribute("class","img-fluid");
    img.setAttribute("width","100%");

    var figcap_pro = document.createElement("figcaption");
    figcap_pro.appendChild(img);

    var fig_pro = document.createElement("figure");
    var nodeText_pro = document.createTextNode(pelicula.title); 
    fig_pro.appendChild(nodeText_pro);
    figcap_pro.appendChild(fig_pro);

    mainPro.appendChild(figcap_pro);
    //fin imagen de la película

    //Sinopsys
    var h2_pro = document.createElement("h2");
    var h2_titleS_pro = document.createTextNode("Sinopsys");
    h2_pro.appendChild(h2_titleS_pro);
    mainPro.appendChild(h2_pro);

    var p1_pro = document.createElement("p");
    var h2_sinop_pro = document.createTextNode(pelicula.synopsis);
    p1_pro.appendChild(h2_sinop_pro);
    mainPro.appendChild(p1_pro);
    //fin synopsis

    //nacionalidad
    var p2_pro = document.createElement("p");
    var p2_nt = document.createTextNode("Nacionalidad: " + pelicula.nationality);
    p2_pro.appendChild(p2_nt);
    mainPro.appendChild(p2_pro);
    //fin nacionalidad

    //Fecha de publicación
    var p2_date = document.createElement("p");
    var p2_textD = document.createTextNode("Fecha de publicación: " + pelicula.publication);
    p2_date.appendChild(p2_textD);
    mainPro.appendChild(p2_date);
    //fin Fecha de publicación

    //h2 actores
    var h2_pro_actors = document.createElement("h2");
    var h2_actors_pro = document.createTextNode("Actores");
    h2_pro_actors.appendChild(h2_actors_pro);
    mainPro.appendChild(h2_pro_actors);
    //fin h2 actores

    var div_actors = document.createElement("div");
    div_actors.setAttribute("id","actors");
    div_actors.setAttribute("class","d-flex flex-wrap justify-content-left");
    mainPro.appendChild(div_actors);

    //actores participantes
    var actor = actores.next();
    while (actor.done !== true){

        var figuActor_pro = document.createElement("figure");
        figuActor_pro.setAttribute("class","pr-1")
        var imgActor_pro = document.createElement("img");
        imgActor_pro.setAttribute("alt",actor.name);
        imgActor_pro.setAttribute("src","images/movie.jpg");
        imgActor_pro.setAttribute("class","img-fluid");
        imgActor_pro.setAttribute("width","300");
        var figCapActor_pro = document.createElement("figcaption");
        var nodeTexActor_pro = document.createTextNode(actor.name + " " + actor.surname);
        //console.log ("Actor:" + actor.name + ", Personaje: " + actor.character + "\n");

        figuActor_pro.appendChild(imgActor_pro);
        figuActor_pro.appendChild(figCapActor_pro);
        figCapActor_pro.appendChild(nodeTexActor_pro);
        div_actors.appendChild(figuActor_pro);

        actor = actores.next();
    }

    //h2 directores
    var h2_pro_directors = document.createElement("h2");
    var h2_directors_pro = document.createTextNode("Directores");
    h2_pro_directors.appendChild(h2_directors_pro);
    mainPro.appendChild(h2_pro_directors);
    //fin h2 directores
    
    
    var div_Directs = document.createElement("div");
    div_Directs.setAttribute("id","directors");
    div_Directs.setAttribute("class","d-flex flex-wrap justify-content-left");
    mainPro.appendChild(div_Directs);

    var directores = vSistem.directors;
    var director = directores.next();
    while (director.done !== true){
        console.log(director.value.productions);
        var arrayProDir = director.value.productions;
        
        for (let i = 0; i < arrayProDir.length; i++) {
            
            //si existe la produccion de ese director, la recogemos y la mostramos
            var proDir = (director.value.productions[i].title === element);
            if (proDir) {
                var figuDirect_pro = document.createElement("figure");
                figuDirect_pro.setAttribute("class","pr-1")
                var imgDirect_pro = document.createElement("img");
                imgDirect_pro.setAttribute("alt",director.value.name);
                imgDirect_pro.setAttribute("src","images/movie.jpg");
                imgDirect_pro.setAttribute("class","img-fluid");
                imgDirect_pro.setAttribute("width","300");
                var figCapDirect_pro = document.createElement("figcaption");
                var nodeTexDirect_pro = document.createTextNode(director.value.name);
                //console.log ("Direct:" + Direct.name + ", Personaje: " + Direct.character + "\n");

                figuDirect_pro.appendChild(imgDirect_pro);
                figuDirect_pro.appendChild(figCapDirect_pro);
                figCapDirect_pro.appendChild(nodeTexDirect_pro);
                div_Directs.appendChild(figuDirect_pro);
            }
            
        }


        director = directores.next();
    }

    

    //figcap.textContent = figcap.textContent.replace(figcap.textContent,pelicula.title);
    
    //var p_pro = mainPro.getElementsByTagName("p")[0];
    //p_pro.textContent = p_pro.textContent.replace(p_pro.textContent,pelicula.synopsis);

    

}

window.onload = initPopulate;
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
        div.setAttribute("class","d-flex flex-wrap justify-content-left mt-2");
        div.setAttribute("id",textN.textContent);
        var h2 = document.createElement("h2");

        h2.appendChild(textN);
        div.appendChild(h2);
        main.appendChild(div);
        
        categoria = categorias.next();
    }

    //recorremos el iterador y mostramos los valores
    
    var categorias = vSistem.categories;
    var categoria = categorias.next();
    while (categoria.done !== true){
        //console.log(categoria.value.name);
        var nodeTxt =  document.createTextNode(categoria.value.name);

        var producciones = vSistem.getProductionsCategory(categoria.value);
        var produccion = producciones.next();
        while (produccion.done !== true){
            var div = document.createElement("div");
            div.setAttribute("class","p-2 bg-info m-2 position-relative");
            
            var a = document.createElement("a");
            var titulo = produccion.value.title;
            a.setAttribute("id",titulo);
            
            a.setAttribute("href","#");
            a.setAttribute("onclick","showProduction(this.id)");
            
            var figure = document.createElement("figure");
            figure.setAttribute("class","m-0");

            var figcap = document.createElement("figcaption");
            figcap.setAttribute("class","position-absolute"); 

            var img = document.createElement("img");
            img.setAttribute("class","img-fluid ");
            img.setAttribute("width","300");
            img.setAttribute("alt",produccion.value.title);
            img.setAttribute("src",produccion.value.image);

            var nodeTxtAlt = document.createTextNode(produccion.value.title); 
            figcap.appendChild(nodeTxtAlt);


            figure.appendChild(img);
            figure.appendChild(figcap);
            a.appendChild(figure);
            div.appendChild(a);

            //recogo el identificador de la sección
            //console.log(arrayCat[i]);
            var section = document.getElementById(nodeTxt.textContent);
            
            section.appendChild(div);

            //console.log (produccion.value.title);
            //console.log (produccion.value.image);
            
            produccion = producciones.next();
        }

        //cargar el siguiente
        categoria = categorias.next();
    }

}

function showProduction(element) {
    var main = document.getElementById("main");
    var mainPro = document.getElementById("main-production");
    mainPro.removeChild(mainPro.firstChild);
    main.setAttribute("class","d-none");
    mainPro.setAttribute("class","d-line");
    
    var producciones = vSistem.productions;
    var produccion = producciones.next();
    while (produccion.done !== true){
        //console.log(produccion.value.title);
        var title = produccion.value.title;
        if(title == element){
            var pelicula = produccion.value;
            break; //revisar
        }else{
            produccion = producciones.next();
        }
    }

    console.log(pelicula);
    var div1 = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("alt",pelicula.title);
    img.setAttribute("src",pelicula.image);
    img.setAttribute("class","img-fluid ");
    img.setAttribute("width","300");
    
    mainPro.appendChild(div1);

    var div2 = document.createElement("div");
    var h3 = document.createElement("h3");
    var title = document.createTextNode(pelicula.title);
    var decript = document.createTextNode(pelicula.synopsis);
    var p = document.createElement("p");
    
    h3.appendChild(title);
    p.appendChild(decript);

    div2.appendChild(h3);
    div2.appendChild(p);

    div1.appendChild(img);
    mainPro.appendChild(div1);
    mainPro.appendChild(div2);
}

window.onload = initPopulate;
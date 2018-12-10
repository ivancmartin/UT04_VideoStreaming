"use strict";

function testPerson(){
     //test sobre Person
     console.log("*** test sobre Person ***");

     var fecha = new Date("July 21, 1983");
 
     // ERROR: objeto creado sin parametros
     try {
         var Persona1 ;
         console.log(Persona1 = new Person());    
     } catch (error) {
         console.log(error.toString());
     }
 
     console.log("Declaración de Persona 1:");
     var Persona1 ;
     
     Persona1 = new Person("   iván     ","cañizares","",fecha,"ruta");
     console.log(Persona1.toString());
 
     console.log("ejemplo de uso con set: set name = ruben");
     console.log(Persona1.name = 'ruben');
     console.log(Persona1.toString());
 
     console.log("ejemplo de uso con get: get name ");
     console.log(Persona1.name);
};

function testCategory(){
    // test sobre Category
    console.log("test sobre Category");
    
    // ERROR: objeto creado sin parametros
    try {
        var categoria1 ;
        categoria1 = new Category();    
    } catch (error) {
        console.log(error.toString());
    }

    categoria1  = new Category("categoria1","description"); 
    console.log(categoria1.toString());

    console.log("ejemplo de uso con set: set name = cat1");
    console.log(categoria1.name = 'cat1');
    console.log(categoria1.toString());

    console.log("ejemplo de uso con get: get name ");
    console.log(categoria1.name);
};

function testResource(){
    //test sobre Resource
    console.log("*** test sobre Resource ***");

    var resurce1 ;
    var audios ;
    var subtitulos = ["español"];

    try {
        console.log("comprobación de error: constructor vacio");
        resurce1 = new Resource();    
    } catch (error) {
        console.log(error.toString());
    }
    
    resurce1 = new Resource(10,"../video.vwm","",subtitulos); 
    console.log(resurce1.toString());

    var audios = ["español"];
    resurce1 = new Resource(10,"../video.vwm",audios,subtitulos);  
    console.log(resurce1.toString());

    try {
        console.log("Introducimos un array de audios (uno a uno) hasta que uno esté repetido");
        var audios2 = ["ingles","Frances","español"];
        for (let index = 0; index < audios2.length; index++){
            console.log("introducimos:" + index + " : " + (resurce1.audios = audios2[index])); 
            console.log("resultado: " + resurce1.toString());   
        }    
    } catch (error) {
        console.log(error.toString());
    }
    
    console.log("introducimos un nuevo subtitulo:" + ( resurce1.subtitles = "ingles"));
    console.log(resurce1.toString());

    try {
        console.log("comprobación de error: el valor introducido ya existe(ingles)");
        console.log("introducimos un nuevo subtitulo:" + ( resurce1.subtitles = "ingles"));    
    } catch (error) {
        console.log(error.toString());
    }

    console.log("recogemos los subtitulos: " + (resurce1.audios)); 

    console.log("* recogemos un subtitulo: " + (resurce1.audios[0])); 
};

function testCoordinate(){
    console.log("test sobre Coordinate");
    //test sobre Coordinate
    var coordenadas = new Coordinate(444,446);
    var coordenadas2 = new Coordinate(202,665);
    console.log(coordenadas.toString());
}

function testMovie(){
    //test sobre  Movie
    console.log("*** test sobre Movie ***");

    // recursos ha utilizar: 
    var coordenadas = new Coordinate(444,446);
    var coordenadas2 = new Coordinate(202,665);
    var localizaciones = [coordenadas,coordenadas2];

    var audios = ["ingles","Frances","español"];
    var subtitulos = ["español","ingles"];
    
    var fecha2 = new Date("January 1, 2000");
    var resurce2 = new Resource(10,"../video.vwm",audios,subtitulos);

    var persona1 = new Person("iván","cañizares","",fecha2,"ruta");

    var peli1 = new Movie("HP","UK",fecha2,"La peli de HP","../images/hp_movie.jpg",resurce2,localizaciones);
    console.log(peli1.toString());

    console.log("* Introduciendo nuevos valores");
    var localizaciones1 = [persona1]; 
    var fecha3 = new Date("February 5, 2000");
    var resurce3 = new Resource(60,"../video2.vwm","audios",subtitulos);

    peli1.publication = fecha3;
    peli1.resource = resurce3 ; 

    try {
        //error al meter un objeto que no es una instancia de Coordinate
        for (let i = 0; i < localizaciones1.length; i++) {
            peli1.locations = localizaciones1[i] ;
        }
    } catch (error) {
        console.log(error.toString());
    }

    console.log(peli1.toString());

    //corregir, los parametros resource y locations deben ser opcionales: var peli1 = new Movie("HP","UK",fecha2,"La peli de HP","../images/hp_movie.jpg","",localizaciones);

}

function testSeason(){
    //test sobre  season
    console.log("*** test sobre season ***");

    var subtitulos = ["español"];
    var audios = ["español"];
    var resurce1 = new Resource(10,"../video.vwm",audios,subtitulos);  
    
    var coordenadas1 = new Coordinate(444,446);

    var episodios = [
        {title: "temporada 1", episode:resurce1, scenarios:coordenadas1},
        {title: "temporada 2", episode:resurce1, scenarios:coordenadas1 }
    ]; 

    var season1 = new Season("temp 1",{title: "temporada 1", episode:resurce1, scenarios:coordenadas1});
    
    console.log(season1.toString());

    season1.episodes = "titulo",resurce1,coordenadas1;

    console.log(season1.toString()); //comprobar más tarde
}

function testSerie(){
    //test sobre  serie
    console.log("*** test sobre serie ***");

    var subtitulos = ["español"];
    var audios = ["español"];
    var resurce1 = new Resource(10,"../video.vwm",audios,subtitulos);  
    
    var coordenadas1 = new Coordinate(444,446);

    var temps = [
        {title: "temporada 1", episode:resurce1, scenarios:coordenadas1 },
        {title: "temporada 2", episode:resurce1, scenarios:coordenadas1 }
    ]; 

    var fecha = new Date("January 1, 2000");

    //la clase series reconoce si tieene una temporada ya repetida
    var serie1 = new Serie("GOT","UK",fecha,"La serie GOT","../images/hp_movie.jpg",temps);
    console.log(serie1.toString());

    
    //var episode1 = {title:"",episode:"",escenario:""};

    //console.log(episode1);
}

function testUsers(){
    //test sobre  user
    console.log("*** test sobre User ***");
    var usuario = new User("ivan","ivan@gmail.com","asdf");
    console.log(usuario.toString());
}

window.onload = testUsers;
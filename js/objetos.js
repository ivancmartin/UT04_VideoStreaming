"use strict";
//!importante: 1º letra en mayuscula?
// borrar un idioma o cualquier elemento de un array

function PersonaException(param){};
PersonaException.prototype = new MyBaseExceptions();
PersonaException.prototype.constructor = PersonaException; 

//archivo donde se guardaran los objetos simples
// objeto persona: inicio
function Person(name,lastName1,lastName2,born,picture){
    
    //si no es un objeto definido como new, no lo crea
    if(!(this instanceof Person)) throw new InvalidAccesConstructorException();

    //comprobar patrones
    var pattern = /[A-z,á,é,í,ó,ú,ñ,Ñ]{1,20}/gm;

    //comprobamos que el valor de los atributos nombre,lastName1 y born no estén vacíos
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new EmptyValuesException("name");

    lastName1 = typeof lastName1 !== 'undefined' ? lastName1 : "";
    if (lastName1 === "") throw new EmptyValuesException("lastName1");
    
    lastName2 = typeof lastName2 !== 'undefined' ? lastName2 : "";

    if(!(born instanceof Date)) throw new InvalidAccesConstructorException();
    born = typeof born !== 'undefined' ? born : "";
    if (born === "") throw new EmptyValuesException("born");

    picture = typeof picture !== 'undefined' ? picture : "";

    //atributos de la clase
    var pName = name.trim();
    var pLastName1 = lastName1;
    var pLastName2 =  lastName2;
    var pBorn = born;
    var pPicture = picture; 

    //recoger y dar los valores al objeto (getters y setters)
    // !importante: revisar/introducir patrones para comprobar las cadenas de las variables name, lastName1, lastName2 y picture
    Object.defineProperty(this,'name',{
        get: function(){
            return pName;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("name");
            pName = value;
        }
    });

    Object.defineProperty(this,'lastName1',{
        get: function(){
            return pLastName1;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("lastName1");
            pLastName1 = value;
        }
    });

    Object.defineProperty(this,'lastName2',{
        get: function(){
            return pLastName2;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            pLastName2 = value;
        }
    });

    Object.defineProperty(this,'born',{
        get: function(){
            return pBorn;
        },
        set: function(value){
            if(!(value instanceof Date)) throw new InvalidAccesConstructorException();
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("born");
            pBorn = value;
        }
    });

    Object.defineProperty(this,'picture',{
        get: function(){
            return pPicture;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            pPicture = value;
        }
    });
};

//metodos a parte de los métodos
Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function(){
    //repasar: mostrar o no valores nulos
    return "Nombre: " + this.name + ", 1º apellido: " + this.lastName1 + ", 2º apellido: " + this.lastName2 + ", fecha de nacimiento: " + this.born + ",ruta foto: " + this.picture; 
};
// objeto persona: fin

// objeto Category: inicio
function Category(name,description){
    
    if(!(this instanceof Category)) throw new InvalidAccesConstructorException();

    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new EmptyValuesException("name");

    description = typeof description !== 'undefined' ? description : "";

    var cName = name;
    var cDescription = description;

    Object.defineProperty(this,'name',{
        get: function(){
            return cName;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("name");
            cName = value;
        }
    });

    Object.defineProperty(this,'description',{
        get: function(){
            return cDescription;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            cDescription = value;
        }
    });
}
//metodos a parte de los métodos
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function(){
    return "Nombre: " + this.name + " Descripcion: " + this.description; 
};
// objeto Category: fin

// objeto Resource: inicio
function Resource(duration,link,audios,subtitles){
    
    //La función se invoca con el operador new
	if (!(this instanceof Resource)) 
        throw new InvalidAccesConstructorException();

    duration = typeof duration !== 'undefined' ? duration : "";
    if (duration === "") throw new EmptyValuesException("duration");

    link = typeof link !== 'undefined' ? link : "";
    if (link === "") throw new EmptyValuesException("link");

    audios = typeof audios !== 'undefined' ? audios : [];

    subtitles = typeof subtitles !== 'undefined' ? subtitles : [];

    var rDuration = duration;
    var rLink = link;
    var rAudios = audios;
    var rSubtitles = subtitles;

    Object.defineProperty(this,'duration',{
        get: function(){
            return rDuration;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("duration");
            rDuration = value;
        }
    });

    Object.defineProperty(this,'link',{
        get: function(){
            return rLink;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("link");
            rLink = value;
        }
    });

    Object.defineProperty(this,'audios',{
        get: function(){
            return rAudios;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('audios');
            if(rAudios.indexOf(value) !== -1) throw new ExistValueException(value);
            rAudios.push(value);
        }
    });

    Object.defineProperty(this,'subtitles',{
        get: function(){
            return rSubtitles;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('subtitles');
            if(rSubtitles.indexOf(value) !== -1) throw new ExistValueException(value);
            rSubtitles.push(value);
        }
    });

}
//metodos a parte de los métodos
Resource.prototype = {};
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function(){
    return "duracion: " + this.duration + " link: " + this.link + " audios: " + this.audios + " subtitulos: " + this.subtitles; 
};
// objeto Resource: fin

//clase abstracta Production: inicio
function Production(title,nationality,publication,synopsis,image) {
    
    if(!(this instanceof Production)) throw new InvalidAccesConstructorException();

    //comprobamos que no se pueda instanciar
    if(this.constructor === Production) throw new AbstractClassException();

    title = typeof title !== 'undefined' ? title : "";
    if (title === "") throw new EmptyValuesException("title");

    nationality = typeof nationality !== 'undefined' ? nationality : "";

    if(!(publication instanceof Date)) throw new InvalidAccesConstructorException();
    publication = typeof publication !== 'undefined' ? publication : "";
    if (publication === "") throw new EmptyValuesException("publication");

    synopsis = typeof synopsis !== 'undefined' ? synopsis : "";

    image = typeof image !== 'undefined' ? image : "";

    var pTitle = title.trim();
    var pNationality = nationality.trim();
    var pPublication = publication;
    var pSynopsis = synopsis.trim();
    var pImage = image.trim();

    Object.defineProperty(this,'title',{
        get: function(){
            return pTitle;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("title");
            pTitle = value;
        }
    });
    
    Object.defineProperty(this,'nationality',{
        get: function(){
            return pNationality;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("nationality");
            pNationality = value;
        }
    });

    Object.defineProperty(this,'publication',{
        get: function(){
            return pPublication;
        },
        set: function(value){
            if(!(value instanceof Date)) throw new InvalidAccesConstructorException();
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("publication");
            pPublication = value;
        }
    });

    Object.defineProperty(this,'synopsis',{
        get: function(){
            return pSynopsis;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("synopsis");
            pSynopsis = value;
        }
    });

    Object.defineProperty(this,'image',{
        get: function(){
            return pImage;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("image");
            pImage = value;
        }
    });
}
//metodos a parte de los métodos
Production.prototype = {};
Production.prototype.constructor = Production;
Production.prototype.toString = function(){
    return "título: " + this.title + " Nacionalidad: " + this.nationality + " publication: " + this.publication + "sinopsis: " + this.synopsis + " ruta de la imagen: " + this.image;
};
//clase abstracta Production: fin

//clase Movie: inicio
function Movie(title,nationality,publication,synopsis,image,resource,locations) {
    
    //if(!(this instanceof Movie)) throw new InvalidAccesConstructorException();

    Production.call(this,title,nationality,publication,synopsis,image);

    //console.log("recurso: " + resource.toString());

    if(!(resource instanceof Resource)) throw new InvalidValueException();
    resource = typeof resource  !== 'undefined' ? resource : 'undefined';
    
    locations = typeof locations !== 'undefined' ? locations : [];

    var mResource = resource;
    var mLocations = locations;

    

    Object.defineProperty(this,resource,{
        get:function(){
            console.log("recurso: " + mResource.toString());
            return mResource;
        },
        set:function(value){
            value = typeof value  !== 'undefined' ? value : 0;
            if(!(value instanceof Resource)) throw new InvalidValueException();
            mResource = value;
        }
    });

    Object.defineProperty(this,locations,{
        get:function(){
            return mLocations;
        },
        set:function(value){
            if(!value) throw new EmptyValuesException('location');
            if(mLocations.indexOf(value) !== -1) throw new ExistValueException(value);
            mLocations.push(value);
        }
    });

}
//metodos a parte de los métodos
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;
Movie.prototype.toString = function(){
    return Production.prototype.toString.call(this) + " recurso: " + this.resource + " localizaciones: " + this.locations;
};
//clase Movie: fin

//clase coordinate: inicio
function Coordinate(latitude,longitude){

    if(!(this instanceof Coordinate)) throw new InvalidAccesConstructorException();

    latitude = typeof latitude !== 'undefined' ? latitude : 0;
    if(isNaN(latitude)) throw new InvalidValueException();

    longitude = typeof longitude !== 'undefined' ? longitude : 0;
    if(isNaN(longitude)) throw new InvalidValueException();

    var cLatitude = latitude;
    var cLongitude = longitude;

    Object.defineProperty(this,latitude,{
        get:function(){
            return cLatitude;
        },
        set:function(value){
            latitude = typeof value !== 'undefined' ? value : "";
            if(isNaN(latidude)) throw new InvalidValueException();
            cLatitude = latitude;
        }
    });

    Object.defineProperty(this,longitude,{
        get:function(){
            return cLongitude;
        },
        set:function(value){
            value = typeof value !== 'undefined' ? value : "";
            if(isNaN(value)) throw new InvalidValueException();
            cLongitude = longitude;
        }
    });

}
//clase coordinate: fin

function testPerson(){
    
    //test sobre Person
    console.log("test sobre Person");

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

    // test sobre Category
    console.log("test sobre Category");
    
    // ERROR: objeto creado sin parametros
    try {
        var categoria1 ;
        categoria1 = new Category();    
    } catch (error) {
        console.log(error.toString());
    }

    categoria1  = new Category("categoria1"); 
    console.log(categoria1.toString());

    console.log("ejemplo de uso con set: set name = cat1");
    console.log(categoria1.name = 'cat1');
    console.log(categoria1.toString());

    console.log("ejemplo de uso con get: get name ");
    console.log(categoria1.name);

    //test sobre Resource
    console.log("test sobre Resource");

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

    //test sobre  Production
    console.log("test sobre Production");
    try {
        var produccion = new Production();
    } catch (error) {
        console.log(error.toString());
    }
    
    console.log("test sobre Coordinate y Movies");
    //test sobre Coordinate y Movies
    var coordenadas = new Coordinate(444,446);
    var coordenadas2 = new Coordinate(202,665);

    var localizaciones = [coordenadas,coordenadas2];
    var fecha2 = new Date("January 1, 2000");

    // recurso ha utilizar: 
    var resurce2 = new Resource(10,"../video.vwm",audios,subtitulos);
    var peli1 = new Movie("HP","UK",fecha2,"La peli de HP","../images/hp_movie.jpg",resurce2,localizaciones)
    console.log(peli1.toString());
    peli1.resource = resurce2 ; 
    console.log(peli1.toString());
}
window.onload = testPerson;
"use strict";

function PersonaException(param){};
PersonaException.prototype = new MyBaseExceptions();
PersonaException.prototype.constructor = PersonaException; 

//archivo donde se guardaran los objetos simples
// objeto persona: inicio
function Person(name,lastName1,lastName2,born,picture){
    
    //comprobar patrones
    var pattern = /[A-z,á,é,í,ó,ú,ñ,Ñ]{1,20}/gm;

    //si no es un objeto definido como new, no lo crea
    if(!(this instanceof Person)) throw new InvalidAccesConstructorException();

    //comprobamos que el valor de los atributos nombre,lastName1 y lastName2 no estén vacíos
    if(!name) 
        throw new EmptyValuesException('name');

    if(!lastName1) 
        throw new EmptyValuesException('lastName1');
    
    if(!lastName2) 
        throw new EmptyValuesException('lastName2');
    
    // !importante: comprobar la fecha "Duda"    
    if(!born)  
        throw new EmptyValuesException("born");
        
    // !importante: revisar
    if(!(born instanceof Date)) throw new InvalidAccesConstructorException();


    if(!picture) //Suposición: comprobar que la ruta existe y es correcta 
        throw new EmptyValuesException("picture");

    //atributos de la clase
    var pName = name;
    var pLastName1 = lastName1;
    var pLastName2 = lastName2;
    var pBorn = born;
    var pPicture = picture; 

    //recoger y dar los valores al objeto (getters y setters)
    // !importante: revisar/introducir patrones para comprobar las cadenas de las variables name, lastName1, lastName2 y picture
    Object.defineProperty(this,'name',{
        get: function(){
            return pName;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('name');
            pName = value;
        }
    });

    Object.defineProperty(this,'lastName1',{
        get: function(){
            return pLastName1;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('lastName1');
            pLastName1 = value;
        }
    });

    Object.defineProperty(this,'lastName2',{
        get: function(){
            return pLastName2;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('lastName2');
            pLastName2 = value;
        }
    });

    Object.defineProperty(this,'born',{
        get: function(){
            return pBorn;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('born'); //comprobar objeto DATE?
            pBorn = value;
        }
    });

    Object.defineProperty(this,'picture',{
        get: function(){
            return pPicture;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('picture');
            pPicture = value;
        }
    });
};

//metodos a parte de los métodos
Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function(){
    return "Nombre: " + this.name + ", 1º apellido: " + this.lastName1 + ", 2º apellido: " + this.lastName2 + ", fecha de nacimiento: " + this.born + ",ruta foto: " + this.picture; 
};

// objeto persona: fin

// objeto Category: inicio

function Category(name,description){
    
    if(!(this instanceof Category)) throw new InvalidAccesConstructorException();

    if(!name) 
    throw new EmptyValuesException('name');

    if(!description) 
    throw new EmptyValuesException('description');

    var cName = name;
    var cDescription = description;

    Object.defineProperty(this,'name',{
        get: function(){
            return cName;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('name');
            cName = value;
        }
    });

    Object.defineProperty(this,'description',{
        get: function(){
            return cDescription;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('cDescription');
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
    
    if(!(this instanceof Resource)) throw new InvalidAccesConstructorException();

    if(!duration ) 
    throw new EmptyValuesException('duration');

    if(!link) 
    throw new EmptyValuesException('link');

    //introduce minimo un idioma en el array
    if (!(Array.isArray(audios)) || audios.legth == 0)
        throw new EmptyValuesException('audios');

    if (!Array.isArray(subtitles) || subtitles.legth == 0 ) 
        throw new EmptyValuesException('subtitles');

    var rDuration = duration;
    var rLink = link;
    var rAudios = audios;
    var rSubtitles = subtitles;

    Object.defineProperty(this,'duration',{
        get: function(){
            return rDuration;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('duration');
            rDuration = value;
        }
    });

    Object.defineProperty(this,'link',{
        get: function(){
            return rLink;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('link');
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
            rduration.push(value);
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

// objeto Resource: resurce1
function testPerson(){
    
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
    
    Persona1 = new Person("iván","cañizares","martín",fecha,"ruta");
    console.log(Persona1.toString());

    console.log("ejemplo de uso con set: set name = ruben");
    console.log(Persona1.name = 'ruben');
    console.log(Persona1.toString());

    console.log("ejemplo de uso con get: get name ");
    console.log(Persona1.name);

    console.log("test sobre Category");
    
    // ERROR: objeto creado sin parametros
    try {
        var categoria1 ;
        categoria1 = new Category();    
    } catch (error) {
        console.log(error.toString());
    }

    categoria1  = new Category("categoria1","descripcion1"); 
    console.log(categoria1.toString());

    console.log("ejemplo de uso con set: set name = cat1");
    console.log(categoria1.name = 'cat1');
    console.log(categoria1.toString());

    console.log("ejemplo de uso con get: get name ");
    console.log(categoria1.name);

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
    
    try {
        console.log("comprobación de error: el valor audios no es un array");
        resurce1 = new Resource(10,"../video.vwm",audios,subtitulos);    
    } catch (error) {
        console.log(error.toString());
    }

    var audios = ["español"];
    resurce1 = new Resource(10,"../video.vwm",audios,subtitulos);  
    console.log(resurce1.toString());

    console.log("introducimos un nuevo subtitulo:" + ( resurce1.subtitles = "ingles"));
    console.log(resurce1.toString());

    try {
        console.log("comprobación de error: el valor introducido ya existe(ingles)");
        console.log("introducimos un nuevo subtitulo:" + ( resurce1.subtitles = "ingles"));    
    } catch (error) {
        console.log(error.toString());
    }

}
window.onload = testPerson;
"use strict";
//archivo donde se guardaran los objetos simples

// objeto persona: inicio
function Person(name = "",lastName1 = "",lastName2 = "",born = Date,picture = ""){
    
    //si no es un objeto definido como new, no lo crea
    if(!(this instanceof Person)) throw new InvalidAccesConstructorException();

    //comprobar patrones
    var pattern = /^[A-z,Á,á,É,é,Í,í,Ó,ó,Ú,ú,ñ,Ñ]{1,20}/;

    //comprobamos que el valor de los atributos nombre,lastName1 y born no estén vacíos
    name = typeof name !== 'undefined' ? name.trim() : "";
    if (name === "" ) throw new EmptyValuesException("name");

    //comprobamos que sea una cadena compuesta únicamente por letras
    if(!pattern.test(name)) throw new InvalidTypeOfException(name);

    lastName1 = typeof lastName1 !== 'undefined' ? lastName1.trim() : "";
    if (lastName1 === "") throw new EmptyValuesException("lastName1");
    
    lastName2 = typeof lastName2 !== 'undefined' ? lastName2.trim() : "";

    born = typeof born !== undefined ? born : "";
    if(born === "") throw new EmptyValuesException("born");
    if(!(born instanceof Date)) throw new InvalidTypeOfException();

    picture = typeof picture !== 'undefined' ? picture.trim() : "";

    //atributos de la clase
    var pName = name;
    var pLastName1 = lastName1;
    var pLastName2 =  lastName2;
    var pBorn = born;
    var pPicture = picture; 

    //recoger y dar los valores al objeto (getters y setters)
    Object.defineProperty(this,'name',{
        get: function(){
            return pName;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "" ) throw new EmptyValuesException("name");

            //comprobamos que sea una cadena compuesta únicamente por letras
            if(!pattern.test(value)) throw new InvalidStringException(value);

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
            //comprobamos que sea una cadena compuesta únicamente por letras

            if(!pattern.test(value)) throw new InvalidStringException(value);

            pLastName1 = value;
        }
    });

    Object.defineProperty(this,'lastName2',{
        get: function(){
            return pLastName2;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            //comprobamos que sea una cadena compuesta únicamente por letras

            if(!pattern.test(value)) throw new InvalidStringException(value);

            pLastName2 = value;
        }
    });

    Object.defineProperty(this,'born',{
        get: function(){
            return pBorn;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("born");
            if(!(value instanceof Date)) throw new InvalidAccesConstructorException();
            
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
Person.prototype.getObject = function(){
    return {
        name: this.name, 
        lastName1: this.lastName1,
        lastName2: this.lastName2,
        born: this.born,
        picture: this.picture
    } 
};
// objeto persona: fin

// objeto Category: inicio
function Category(name = "",description = ""){
    
    if(!(this instanceof Category)) throw new InvalidAccesConstructorException();

    var pattern = /^[A-z,Á,á,É,é,Í,í,Ó,ó,Ú,ú,ñ,Ñ]{1,20}/;

    //comprobamos que el valor de los atributos nombre este vacío
    name = typeof name !== 'undefined' ? name.trim() : "";
    if (name === "" ) throw new EmptyValuesException("name");

    //comprobamos que sea una cadena compuesta únicamente por letras
    if(!pattern.test(name)) throw new InvalidTypeOfException(name);

    description = typeof description !== 'undefined' ? description.trim() : "";

    var cName = name;
    var cDescription = description;

    Object.defineProperty(this,'name',{
        get: function(){
            return cName;
        },
        set: function(value){
            //comprobamos que el valor de los atributos nombre este vacío
            value = typeof value !== 'undefined' ? value.trim() : "";
            if (value === "" ) throw new EmptyValuesException('name');

            //comprobamos que sea una cadena compuesta únicamente por letras
            if(!pattern.test(value)) throw new InvalidTypeOfException(value);

            description = typeof description !== 'undefined' ? description.trim() : "";
            cName = value;
        }
    });

    Object.defineProperty(this,'description',{
        get: function(){
            return cDescription;
        },
        set: function(value){
            //comprobamos que el valor de los atributos nombre este vacío
            value = typeof value !== 'undefined' ? value.trim() : "";
            if (value === "" ) throw new EmptyValuesException('name');

            //comprobamos que sea una cadena compuesta únicamente por letras
            if(!pattern.test(value)) throw new InvalidTypeOfException(value);

            cDescription = value;
        }
    });
}
//metodos a parte de los métodos
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function(){
    return "Nombre: " + this.name + ", Descripcion: " + this.description; 
};
Category.prototype.getObject = function(){
    return {
        nombre: this.name, 
        descripcion: this.description
    } 
};
// objeto Category: fin

// objeto Resource: inicio
function Resource(duration ,link = "",audios,subtitles){
    
    //La función se invoca con el operador new
	if (!(this instanceof Resource)) throw new InvalidAccesConstructorException();

    duration = typeof duration !== 'undefined' ? duration : "";
    if (duration === "") throw new EmptyValuesException("duration");
    if (isNaN(duration)) throw new InvalidTypeOfException("duration");
    
    link = typeof link !== 'undefined' ? link : "";
    if (link === "") throw new EmptyValuesException("link");

    var rDuration = duration;
    var rLink = link;

    var rAudios = [];
    var rSubtitles = [];

    audios = typeof audios !== 'undefined' ? audios : "";
    subtitles = typeof subtitles !== 'undefined' ? subtitles : "";
 
    //si es un aray, comprueba los valores uno a uno, si no introduce el valor directamente
    if(Array.isArray(audios)){
        for (let i = 0; i < audios.length; i++) {
            if(audios[i] !== "") rAudios.push(audios[i]);
        }
    }else{
        rAudios.push(audios);
    };

    //si es un aray, comprueba los valores uno a uno, si no introduce el valor directamente
    if(Array.isArray(subtitles)){
        for (let i = 0; i < subtitles.length; i++) {
            if(rSubtitles.findIndex( subtitle => subtitle === subtitles[i])) rSubtitles.push(subtitles[i]);
        }
    }else{
        rSubtitles.push(subtitles);
    };

    Object.defineProperty(this,'duration',{
        get: function(){
            return rDuration;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") throw new EmptyValuesException("duration");
            if (isNaN(value)) throw new InvalidTypeOfException("duration");
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
            //ejemplo recogido de: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
            if((rAudios.findIndex( audios => audios === value) !== -1)) throw new ExistValueException(value);
            rAudios.push(value);
        }
    });

    Object.defineProperty(this,'subtitles',{
        get: function(){
            return rSubtitles;
        },
        set: function(value){
            if(!value) throw new EmptyValuesException('subtitles');
            if((rSubtitles.findIndex( subtitles => subtitles === value) !== -1)) throw new ExistValueException(value);
            rSubtitles.push(value);
        }
    });

}
//metodos a parte de los métodos
Resource.prototype = {};
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function(){
    return "duracion: " + this.duration + ", link: " + this.link + ", audios: " + this.audios + ", subtitulos: " + this.subtitles; 
};
Resource.prototype.getObject = function(){
    return {
        duration: this.duration,
        link: this.link,
        audios: this.audios,
        subtitles: this.subtitles
    }
};
// objeto Resource: fin

//clase abstracta Production: inicio
function Production(title = "",nationality,publication,synopsis,image){
    
    if(!(this instanceof Production)) throw new InvalidAccesConstructorException();

    //comprobamos que no se pueda instanciar
    if(this.constructor === Production) throw new AbstractClassException();

    title = typeof title !== 'undefined' ? title.trim(): "";
    if (title === "") throw new EmptyValuesException("title");

    nationality = typeof nationality !== 'undefined' ? nationality.trim() : "";

    publication = typeof publication !== 'undefined' ? publication : "";
    if (publication === "") throw new EmptyValuesException("publication");
    if(!(publication instanceof Date)) throw new InvalidTypeOfException();

    synopsis = typeof synopsis !== 'undefined' ? synopsis.trim() : "";

    image = typeof image !== 'undefined' ? image.trim() : "";

    var pTitle = title;
    var pNationality = nationality;
    var pPublication = publication;
    var pSynopsis = synopsis;
    var pImage = image;

    Object.defineProperty(this,'title',{
        get: function(){
            return pTitle;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value.trim() : "";
            if (value === "") throw new EmptyValuesException("title");
            pTitle = value;
        }
    });
    
    Object.defineProperty(this,'nationality',{
        get: function(){
            return pNationality;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value.trim() : "";
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
            value = typeof value !== 'undefined' ? value.trim() : "";
            if (value === "") throw new EmptyValuesException("synopsis");
            pSynopsis = value;
        }
    });

    Object.defineProperty(this,'image',{
        get: function(){
            return pImage;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value.trim() : "";
            if (value === "") throw new EmptyValuesException("image");
            pImage = value;
        }
    });
}
//metodos a parte de los métodos
Production.prototype = {};
Production.prototype.constructor = Production;
Production.prototype.toString = function(){
    return "título: " + this.title + "\nNacionalidad: " + this.nationality + "\npublication: " + this.publication + "\nsinopsis: " + this.synopsis + "\nruta de la imagen: " + this.image;
};
Production.prototype.getObject = function(){
    return {
        title: this.title,
        nationality: this.nationality,
        publication: this.publication,
        synopsis: this.synopsis,
        image: this.image
    } 
};
//clase abstracta Production: fin

//clase Movie: inicio
function Movie(title,nationality,publication,synopsis,image,resource,locations) {

    Production.call(this,title,nationality,publication,synopsis,image);

    resource = typeof resource  !== 'undefined' ? resource : "";
    if (resource !== "") 
        if(!(resource instanceof Resource)) throw new InvalidTypeOfException();    
    
    var mResource = resource;
    
    var mLocations = [];

    if(Array.isArray(locations)){
        for (let i = 0; i < locations.length; i++){
            if(locations[i] instanceof Coordinate) mLocations.push(locations[i]);
        }
    }else{
        mLocations.push(locations);
    };

    Object.defineProperty(this,'resource',{
        get:function(){
            return mResource;
        },
        set:function(value){
            value = typeof value  !== 'undefined' ? value : "";
            if (value !== "") 
                if(!(value instanceof Resource)) throw new InvalidTypeOfException(); 
            mResource = value;
        }
    });

    Object.defineProperty(this,'locations',{
        get:function(){
            return mLocations;
        },
        set:function(value){
            if(!(value instanceof Coordinate)) throw new InvalidTypeOfException();
            if((mLocations.findIndex(location => location === value) !== -1)) throw new ExistValueException(value);
            mLocations.push(value);
        }
    });
}
//metodos a parte de los métodos
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;
Movie.prototype.toString = function(){
    return Production.prototype.toString.call(this) + "\nrecurso: " + this.resource + "\nlocalizaciones: " + this.locations;
};
Movie.prototype.getObject = function(){
    
    return {
        title: this.title,
        nationality: this.nationality,
        publication: this.publication,
        synopsis: this.synopsis,
        image: this.image,
        resource: this.resource.getObject(), 
        locations: devolverLoca(this.locations)
    }
    
    function devolverLoca(value){
        for (let i = 0; i < value.length; i++) {
            console.log(value[i].longitude);
            if (value[i].latitude === "" || value[i].latitude == undefined) 
                value[i].latitude = 0;
            if (value[i].longitude === "" || value[i].longitude == undefined) 
                value[i].longitude = 0;
            return new Coordinate(value[i].longitude, value[i].latidude);;
        }
    }
    
};
//clase Movie: fin

//clase Movie: serie
function Serie(title,nationality,publication,synopsis,image,season) {

    Production.call(this,title,nationality,publication,synopsis,image);

    season = typeof season !== "" ? season : 'undefined';
    if(season === undefined ) throw new InvalidTypeOfException();

    //array para almacenar las coordenadas
    var Sseasons = [];

    if (Array.isArray(season)) {
        for (let i = 0; i < season.length; i++){
            if((season[i] instanceof Season)){
                Sseasons.push(season[i]);
            }   
        }   
    }else{
        Sseasons.push(season);
    }

    Object.defineProperty(this,'seasons',{
        get:function(){
            return Sseasons;
        },
        set:function(value){
            if(!value) throw new EmptyValuesException('season');
            if(Sseasons.findIndex( seasons => seasons === value)) Sseasons.push(value);
        }
    });
}
//metodos a parte de los métodos
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;
Serie.prototype.toString = function(){
    return Production.prototype.toString.call(this) + "\ntemporadas: " + this.seasons;
};
//clase season: serie
Serie.prototype.getObject = function(){
    return {
        title: this.title,
        nationality: this.nationality,
        publication: this.publication,
        synopsis: this.synopsis,
        image: this.image,
        seasons: devolverSeasons(this.seasons)
    } 

    function devolverSeasons(value){
        //console.log(value);
        var seasons = [];
        for (let i = 0; i < value.length; i++) {
            seasons.push(value[i].getObject());
        }
        return seasons ;
        
    }

};

//clase season: inicio
function Season(title,episodes) {
    
    if(!(this instanceof Season)) throw new InvalidAccesConstructorException();
    
    title = title !== 'undefined'? title : undefined;
    if (title === undefined || title === "") 
        throw new EmptyValuesException("title");

    var sTitle = title;
    var sEpisodes = [];
    
    if (Array.isArray(episodes)) {

            //recorremos el array de objetos literales (episodes)
            for (let i = 0; i < episodes.length; i++) {

                if(!(episodes[i].episode instanceof Resource))
                    throw new InvalidTypeOfException();
                
                for (let j = 0; j < episodes[i].scenarios.length; j++) {
                    if(!(episodes[i].scenarios[j] instanceof Coordinate))
                        throw new InvalidTypeOfException();
                }
                
                sEpisodes.push(episodes[i]);
                
            };
        
    }else{

        if(!(episodes.episode instanceof Resource)) throw new InvalidTypeOfException();
        
        if(!(episodes.scenarios instanceof Coordinate)) throw new InvalidTypeOfException();

        sEpisodes.push(episodes);
    }

    Object.defineProperty(this,'title',{
        get:function(){
            return sTitle;
        },
        set:function(value){
            value =  value !== 'undefined'? value : "";
            if (value === "") throw new EmptyValuesException("title");
            sTitle = value;
        }
    });

    Object.defineProperty(this,'episodes',{
        get:function(){
            return sEpisodes;
        },
        set:function(stitle,sepisode,scenario){
            var value = value !== 'undefined'? value : "";
                if (value === "") throw new EmptyValuesException("title");
            
            if(!(episodes.episode instanceof Resource)) throw new InvalidTypeOfException();
        
            if(!(episodes.scenarios instanceof Coordinate)) throw new InvalidTypeOfException();

            value = {
                title: stitle,
                episode: sepisode, 
                scenarios: scenario
            }

            sEpisodes.push(value);
        }
    });

}
//metodos a parte de los métodos //comprobar más tarde
Season.prototype = {};
Season.prototype.constructor = Season;
Season.prototype.toString = function(){
    return "titulo: " + this.title + "\nEpisodios: " + this.episodes;
};
Season.prototype.getObject = function(){
    return {
        title: this.title,
        episodes: getEpisodes(this.episodes),

    }

    function getEpisodes(value){
        var arrayCaps = [];
        for (let i = 0; i < value.length; i++) {
            arrayCaps.push(value[i].episode.getObject());
        }
        return arrayCaps;
    }

    

};
//clase season: fin

//clase user: inicio
function User(name,email,password){
    
    //si no es un objeto definido como new, no lo crea
    if(!(this instanceof User)) throw new InvalidAccesConstructorException();

	//Validación de parámetros obligatorios
	if (name === 'undefined' || name === "") throw new EmptyValuesException("name");
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (name) !== true)
		throw new InvalidTypeOfException();		

    //console.log(email + " " + ( email.length !== 0) + " " + email.length);
	if (email === 'undefined' || (email.length === 0)){
        email = "";
    }else{
        if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test (email) !== true)
        throw new InvalidTypeOfException();	
    }

	password = typeof password !== 'undefined' ? password : "";
	if (password === "") throw new EmptyValuesException("password");

    //atributos de la clase
    var uName = name.trim();
    var uEmail = email.trim();
    var uPassword = password.trim();

    //recoger y dar los valores al objeto (getters y setters)
    Object.defineProperty(this,'name',{
        get: function(){
            return uName;
        },
        set: function(value){
            if (value === 'undefined' || value === "") throw new EmptyValuesException("name");
            if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (value) !== true)
                throw new InvalidTypeOfException();		
            uName = value;
        }
    });

    Object.defineProperty(this,'email',{
        get: function(){
            return uEmail;
        },
        set: function(value){
            if (value === 'undefined' || value === "") throw new EmptyValuesException("uEmail");
            if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test (value) !== true)
                throw new InvalidTypeOfException();		
            uEmail = value;
        }
    });

    Object.defineProperty(this,'password',{
        get: function(){
            return uPassword;
        },
        set: function(value){
            value = typeof value !== 'undefined' ? value : "";
	        if (value === "") throw new EmptyValuesException("password");		
            uPassword = value;
        }
    });
};
//metodos a parte de los métodos
User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function(){
    return  "Nombre: " + this.name + "\nEmail: " + this.email + "\nPassword: " + this.password ;
};

//clase user: fin

//clase coordinate: inicio
function Coordinate(latitude,longitude){

    if(!(this instanceof Coordinate)) throw new InvalidAccesConstructorException();

    latitude = typeof latitude !== 'undefined' ? latitude : 0;
    if(isNaN(latitude)) throw new InvalidTypeOfException();

    longitude = typeof longitude !== 'undefined' ? longitude : 0;
    if(isNaN(longitude)) throw new InvalidTypeOfException();

    var cLatitude = latitude;
    var cLongitude = longitude;
    
    Object.defineProperty(this,'latitude',{
        get:function(){
            return cLatitude;
        },
        set:function(value){
            latitude = typeof value !== 'undefined' ? value : 0;
            if(isNaN(latidude)) throw new InvalidTypeOfException();
            cLatitude = value;
        }
    });

    Object.defineProperty(this,'longitude',{
        get:function(){
            return cLongitude;
        },
        set:function(value){
            value = typeof value !== 'undefined' ? value : 0;
            if(isNaN(value)) throw new InvalidTypeOfException();
            cLongitude = value;
        }
    });
}

//metodos a parte de los métodos
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
Coordinate.prototype.toString = function(){
    return  "\nlatitud: " + this.latitude + " longitud: " + this.longitude ;
};
Coordinate.prototype.getObject = function(){
    return  {
        latitude: this.latitude,
        longitude: this.longitude
    }
};
//clase coordinate: fin

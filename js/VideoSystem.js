"use strict";

var VideoSystem = (function(){
    var instantiated;

    //inicialización de sigleton
    function init(){ 

        function VideoSystem(){
            //comprobamos que se instancie como new
            if(!(this instanceof VideoSystem)) throw new InvalidAccesConstructorException();

            var sName = "defaul name"; //nombre del sistema
            var sCategory = []; //array con las categorias
            var sUser = []; //array con los usuarios del sistema
            var sProductions = []; // array con las producciones
            var sActors = []; // arrays con las actrices y actores
            var sDirectors = []; // arrays con las director@s de las producciones

            //operaciones con sName(nombre del sistema)
            Object.defineProperty(this,'name',{
                get: function(){
                    return sName;
                },
                set: function(value){        
                    var value = typeof value !== 'undefined' ? value : "";
                    if (value === "") throw new EmptyValuesException("name");
                    sName = value;
                }
            });

            //iterador que devuelve las categorias una a una
            Object.defineProperty(this,'categories',{
                get: function(){
                    var nextIndex = 0; 
                    return {
                        next: function(){
                            return nextIndex < sCategory.length ? 
                                {value:sCategory[nextIndex++], done:false} : {done:true};
                        }
                    }
                }
            });

            //añadir categoría
            this.addCategory = function(value){
                if(!(value instanceof Category) || value === null) throw new InvalidTypeOfException();
                
                //devuelve la primera coincidencia del valor name de un objeto Categoria
                var index = sCategory.findIndex( categories => categories.name === value.name);

                //si el indice es diferente de -1 es que eiste y por lo tanto no se puede añadir porque estaría repetido
                if( index !== -1) throw new ExistValueException(value);
                sCategory.push(value);
                
                return sCategory.length;
            }

            //borrar categoría
            this.removeCategory = function(value){
                if(!(value instanceof Category) || value === null) throw new InvalidTypeOfException();
                
                //devuelve la primera coincidencia del valor name de un objeto Categoria
                var index = sCategory.findIndex( categories => categories.name === value.name);

                //si no exsiste salta una excepción                
                if (index === -1) throw new NoExistCategoryException(value);

                //si existe, la borramos
                sCategory.splice(index,1)
                
                return sCategory.length;
            }

            //iterador que devuelve los usuarios uno a uno
            Object.defineProperty(this,'users',{
                get: function(){
                    var nextIndex = 0; 
                    return {
                        next: function(){
                            return nextIndex < sUser.length ? 
                                {value:sUser[nextIndex++], done:false} : {done:true};
                        }
                    }
                }
            });

            //añadir un usuario
            this.addUser = function(value){
                if(!(value instanceof User) || value === null) throw new InvalidTypeOfException();

                //devuelve la primera coincidencia del valor name de un objeto User
                var indexName = sUser.findIndex( usuario => usuario.name === value.name);
                
                //devuelve la primera coincidencia del valor email de un objeto User
                var indexEmail = sUser.findIndex( usuario => usuario.email === value.email);

                if(indexName !== -1 ) throw new ExistUserNameException(value.name);
                if(indexEmail !== -1 ) throw new ExistUserEmailException(value.email);

                sUser.push(value);
                
                return sUser.length;
            }

            //borrar un usuario
            this.removeUser = function(value){
                if(!(value instanceof User) || value === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor name de un objeto User
                var index = sUser.findIndex( usuario => usuario.name === value.name);
                
                //si no exsiste saltará una excepción                
                if (index === -1) throw new NoExistValueException(value);

                sUser.splice(index,1)
                
                return sUser.length;
            }

            //iterador que devuelve las producciones una a una
            Object.defineProperty(this,'productions',{
                get: function(){
                    var nextIndex = 0; 
                    return {
                        next: function(){
                            return nextIndex < sProductions.length ? 
                                {value:sProductions[nextIndex++], done:false} : {done:true};
                        }
                    }
                }
            });

            //añadir produccion
            this.addProduction = function(value){

                if(!(value instanceof Production) || value === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor title de un objeto Production
                var index = sProductions.findIndex( produccion => produccion.title === value.title);
                
                if(index !== -1) throw new ExistValueException(value.title);
                    sProductions.push(value);
                return sProductions.length;
            }

            //borrar produccion
            this.removeProduction = function(value){
                if(!(value instanceof Production) || value === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor title de un objeto Production
                var index = sProductions.findIndex( production => production.title === value.title);
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(value);

                sProductions.splice(index,1)
                
                return sProductions.length;
            }

            //iterador que devuelve los actores/actrices una a una
            Object.defineProperty(this,'actors',{
                get: function(){
                    var nextIndex = 0; 
                    return {
                        next: function(){
                            return nextIndex < sActors.length ? 
                                {value:sActors[nextIndex++], done:false} : {done:true};
                        }
                    }
                }
            });

            //añadir actor
            this.addActor = function(value){
                if(!(value instanceof Person) || value === null) throw new InvalidAccesConstructorException();

                //devuelve la primera coincidencia del valor name de un objeto Person
                var index = sActors.findIndex( actor => actor.name === value.name);
                
                if(index !== -1) throw new ExistValueException(value.name);
                sActors.push(value);
                
                return sActors.length;
            }

            //borrar actor
            this.removeActor = function(value){
                if(!(value instanceof Person) || value === null) throw new InvalidAccesConstructorException();
                
                //devuelve la primera coincidencia del valor name de un objeto Person
                var index = sActors.findIndex( actor => actor.name === value.name);
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistPersonnException(value.name);

                sActors.splice(index,1)
                
                return sActors.length;
            }

            //iterador que devuelve los Director@s uno a uno
            Object.defineProperty(this,'directors',{
                get: function(){
                    var nextIndex = 0; 
                    return {
                        next: function(){
                            return nextIndex < sDirectors.length ? 
                                {value:sDirectors[nextIndex++], done:false} : {done:true};
                        }
                    }
                }
            });

            //añadir Director
            this.addDirector = function(value){
                if(!(value instanceof Person) || value === null) throw new InvalidAccesConstructorException();
                
                //devuelve la primera coincidencia del valor name de un objeto Person
                var index = sDirectors.findIndex( director => director.name === value.name);
                if(index !== -1) throw new ExistValueException(value.name);
                
                sDirectors.push(value);
                
                return sDirectors.length;
            }

            //borrar Director
            this.removeDirector = function(value){
                if(!(value instanceof Person) || value === null) throw new InvalidAccesConstructorException();
                
                //devuelve la primera coincidencia del valor name de un objeto Person
                var index = sDirectors.findIndex( director => director.name === value.name);
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistPersonnException(value.name);

                sDirectors.splice(index,1)
                
                return sDirectors.length;
            }
            
            //asignaciones y desasignaciones

            //asignamos una categoria a una produccion
            this.assignCategory = function(category,production){
                
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + sCategory.findIndex( cat => cat.name === category.name) );
                //console.log("Existe Produccion?: " + sProductions.findIndex( pro => pro.title === production.title));

                //si la categoria no existe, se crea
                var auxIndexCat = sCategory.findIndex( cat => cat.name === category.name);
                if(auxIndexCat === -1) (vSistem.addCategory(category));

                // si la produccion no existe, se crea
                var auxIndexPro = sProductions.findIndex( pro => pro.title === production.title);
                if(auxIndexPro === -1) vSistem.addProduction(production);

                //recogemos de nuevo las direcciones de los valores en los arrays
                var indexCat = sCategory.findIndex( cat => cat.name === category.name);
                var indexPro = sProductions.findIndex( pro => pro.title === production.title);

                //console.log("cate index: " + indexCat);
                //console.log("pro index: " + indexPro);

                //si no está definido el valor del atributo productions como array dentro del indice concreto, le damos el valor de array 
                //console.log(typeof sCategory[indexCat].productions === 'undefined');
                if(typeof sCategory[indexCat].productions === 'undefined' ) {
                    sCategory[indexCat].productions = [];
                }
                
                //console.log(sCategory[indexCat].productions.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                //si el array tiene longitud 0, lo introducimos directamente
                if(sCategory[indexCat].productions.length === 0){
                    //console.log("push directo");

                    //al declarar el array para almacenar las producciones hay que utilizar el splice para sustituir el primer valor
                    sCategory[indexCat].productions.splice(production,1);
                }else{
                    //si el array tiene valores, comparamos cada valor para evitar que se repitan

                    //var indexCatPro = sCategory[indexCat].productions.findIndex( pro => pro.title === production.title);
                    //console.log(indexCatPro);

                    while(i < sCategory[indexCat].productions.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexCat].productions[i].title === (production.title)));
                        //console.log(sCategory[indexCat].productions[i].title + " vs " + production.title);
                        if (sCategory[indexCat].productions[i].title === (production.title)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexCat].productions.length);
                //console.log("encontrado: " + encontrado);

                //si el valor No existe, lo introducimos
                if(!encontrado) {
                    sCategory[indexCat].productions.push(production)
                }else{
                    throw new ExistCategoryException(production.title);
                }

                //console.log("Longitud del array: " + sCategory[indexCat].productions.length);
                return sCategory[indexCat].productions.length;
                
            }

            //desasignamos una categoria a una produccion
            this.deassignCategory = function(category,production){
                
                if(!(category instanceof Category) || category === null) throw new InvalidTypeOfException();
                if(!(production instanceof Production) || production === null) throw new InvalidTypeOfException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                //if(sCategory.indexOf(category) === -1) vSistem.addCategory(category);
                // si la produccion no existe, se crea
                //if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);
                var indexCat = sCategory.findIndex( cat => cat.name === category.name);
                //var indexCat = (sCategory.indexOf(category));
                //var indexPro = (sProductions.indexOf(production));

                //console.log("cate index: " + indexCat);
                //console.log("pro index: " + indexPro);

                //console.log(sCategory[indexCat].productions.length);
                
                //comprobamos que la produccion tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(sCategory[indexCat].productions.length === 0){
                    throw new EmptyArrayException();
                }else{
                    while(i < sCategory[indexCat].productions.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexCat].productions[i].title === (production.title)));
                        //console.log(sCategory[indexCat].productions[i].title + " vs " + production.title);
                        if (sCategory[indexCat].productions[i].title === (production.title)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexCat].productions.length);
                //console.log("encontrado: " + encontrado);
                if(encontrado) {
                    sCategory[indexCat].productions.splice(production,1);
                }else{
                    throw new NoExistCategoryException(production.title);
                }

                //console.log("Longitud del array: " + sCategory[indexCat].productions.length);
                return sCategory[indexCat].productions.length;
                
            }

            //asignamos un director a una produccion
            this.assignDirector = function(director,production){
                
                if(!(director instanceof Person) || director === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();

                //console.log("Existe director?: " + sDirectors.findIndex( dir => dir.name === director.name));
                //console.log("Existe Produccion?: " + sProductions.findIndex( pro => pro.title === production.title));

                //si el director no existe, se crea
                var auxIndexDir = sDirectors.findIndex( dir => dir.name === director.name);
                if(auxIndexDir === -1) (vSistem.addDirector(director));

                // si la produccion no existe, se crea
                var auxIndexPro = sProductions.findIndex( pro => pro.title === production.title);
                if(auxIndexPro === -1) vSistem.addProduction(production);

                //recogemos de nuevo las direcciones de los valores en los arrays
                var indexDir = sDirectors.findIndex( dir => dir.name === director.name);
                //var indexPro = sProductions.findIndex( pro => pro.title === production.title);

                //console.log("Dir index: " + indexDir);
                //console.log("pro index: " + indexPro);

                //si no está definido el valor del atributo productions como array dentro del indice concreto, le damos el valor de array 
                //console.log(typeof sDirectors[indexDir].productions === 'undefined');
                if(typeof sDirectors[indexDir].productions === 'undefined' ) {
                    sDirectors[indexDir].productions = [];
                }
                
                //console.log(sDirectors[indexDir].productions.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                //si el array tiene longitud 0, lo introducimos directamente
                if(sDirectors[indexDir].productions.length === 0){
                    //console.log("push directo");

                    //al declarar el array para almacenar las producciones hay que utilizar el splice para sustituir el primer valor
                    sDirectors[indexDir].productions.splice(production,1);
                }else{
                    //si el array tiene valores, comparamos cada valor para evitar que se repitan

                    //var indexCatPro = sDirectors[indexDir].productions.findIndex( pro => pro.title === production.title);
                    //console.log(indexCatPro);

                    while(i < sDirectors[indexDir].productions.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sDirectors[indexDir].productions[i].title === (production.title)));
                        //console.log(sDirectors[indexDir].productions[i].title + " vs " + production.title);
                        if (sDirectors[indexDir].productions[i].title === (production.title)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sDirectors[indexDir].productions.length);
                //console.log("encontrado: " + encontrado);

                //si el valor No existe, lo introducimos
                if(!encontrado) {
                    sDirectors[indexDir].productions.push(production)
                }else{
                    throw new ExistCategoryException(production.title);
                }

                //console.log("Longitud del array: " + sDirectors[indexDir].productions.length);
                return sDirectors[indexDir].productions.length;
                
            }

            //desasignamos un director a una produccion
            this.desassignDirector = function(director,production){
                
                if(!(director instanceof Person) || director === null) throw new InvalidTypeOfException();
                if(!(production instanceof Production) || production === null) throw new InvalidTypeOfException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //recogemos de nuevo las direcciones de los valores en los arrays
                var indexDir = sDirectors.findIndex( dir => dir.name === director.name);
                //var indexPro = sProductions.findIndex( pro => pro.title === production.title);

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(typeof sDirectors[indexDir].productions.length === 0 ) {
                    throw new EmptyArrayException();
                }else{
                    while(i < sDirectors[indexDir].productions.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sDirectors[indexDir].productions[i].title === (production.title)));
                        //console.log(sDirectors[indexDir].productions[i].title + " vs " + production.title);
                        if (sDirectors[indexDir].productions[i].title === (production.title)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexPro].productions.length);
                //console.log("encontrado: " + encontrado);
                if(encontrado) {
                    sDirectors[indexDir].productions.splice(director,1);
                }else{
                    throw new NoExistCategoryException(director.name);
                }

                //console.log("Longitud del array: " + sCategory[indexPro].productions.length);
                return sDirectors[indexDir].productions.length;   
            }

            //asignamos un actor a una produccion
            this.assignActor = function(actor,production,character,main){
                
                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                var auxIndexActor = sActors.findIndex( act => act.name === actor.name);
                var AuxIndexPro = sProductions.findIndex( pro => pro.title === production.title);

                //console.log("Existe actor?: " + auxIndexActor);
                //console.log("Existe Produccion?: " + AuxIndexPro);

                //si la categoria no existe, se crea
                if(auxIndexActor === -1) vSistem.addActor(actor);
                // si la produccion no existe, se crea
                if(AuxIndexPro === -1) vSistem.addProduction(production);

                var indexActor = sActors.findIndex( act => act.name === actor.name);
                //var indexPro = sProductions.findIndex( pro => pro.title === production.title);

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                //preguntar
                //console.log(typeof sActors[indexActor].productions === 'undefined');
                if(typeof sActors[indexActor].productions === 'undefined' ) {
                    sActors[indexActor].productions = [];
                }
                
                //console.log(sActors[indexActor].productions.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(sActors[indexActor].productions.length === 0){
                   //console.log("push directo");
                   sActors[indexActor].productions.splice(actor,1);
                   //console.log(sActors[indexActor].productions)
                }else{
                    while(i < sActors[indexActor].productions.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sActors[indexActor].productions[i].title === (production.title)));
                        //console.log(sActors[indexActor].productions[i].production.title + " vs " + production.title);
                        if (sActors[indexActor].productions[i].production.title === (production.title)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexActor].productions.length);
                //console.log("encontrado: " + encontrado);
                if(!encontrado) {
                    sActors[indexActor].productions.push({   
                        production: production,
                        character: character,
                        main :main
                    });
                }else{
                    throw new ExistCategoryException(production.title);
                }

                //console.log("Longitud del array: " + sCategory[indexActor].productions.length);
                return sActors[indexActor].productions.length;   
            }

            //desasignamos un actor a una produccion
            this.desassignActor = function(actor,production){

                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                var indexActor = sActors.findIndex( act => act.name === actor.name);

                var indexActorProduction = sActors[indexActor].productions.findIndex( pro => pro.production.title === production.title);
                
                if(indexActorProduction > -1){
                    sActors[indexActor].productions.splice(indexActorProduction,1)
                }else{
                    throw new NoExistPersonnException(actor.name);
                };

                //console.log("Existe actor?: " + indexActor);
                //console.log("Existe Produccion?: " + indexPro);

                return sActors[indexActor].productions.length;   
            } 

            this.getCast = function(production){

                if(!(production instanceof Production) || production === null) throw new InvalidTypeOfException();
                var arrayTempCast = [];

                for (var indexActor = 0; indexActor <  sActors.length; indexActor++) {

                   

                    for(let indexPro = 0; indexPro <  sActors[indexActor].productions.length; indexPro++){
                        
                        
                        //si encontramos una coincidencia creamos un objeto literal que incluimos en un array temporal con todos los
                        
                        if(sActors[indexActor].productions[indexPro].production.title === production.title){
                            arrayTempCast.push({
                                //production: sActors[indexActor].productions[indexPro].production.title,
                                name: sActors[indexActor].name + " " + sActors[indexActor].lastName1 + " " + sActors[indexActor].lastName2 ,
                                character: sActors[indexActor].productions[indexPro].character,
                                //main: sActors[indexActor].productions[indexPro].main
                            });
                        }
                    }
                }
                
                var nextIndex = 0;
                return {
                    //devuelve el papel que ha realizado en la produccion y la produccion
                    next: function(){
                        return nextIndex < arrayTempCast.length ? 
                            {name:arrayTempCast[nextIndex].name, character:arrayTempCast[nextIndex++].character , done:false} : {done:true};
                    }
                }
            }

            //iterador que devuelve las producciones de un director concreto una a una
            this.getProductionsDirector = function(director){

                if(!(director instanceof Person) || director === null) throw new InvalidAccesConstructorException();

                var indexDirector = sDirectors.findIndex( dir => dir.name === director.name);

                if(indexDirector === -1) throw new NoExistCategoryException;
                var nextIndex = 0;

                return {
                    //devuelve el papel que ha realizado en la produccion y la produccion
                    next: function(){
                        return nextIndex < sDirectors[indexDirector].productions.length ? 
                            {production:sDirectors[indexDirector].productions[nextIndex++], done:false} : {done:true};
                    }
                }

            }

            //iterador que devuelve las producciones de un actor concreto una a una
            this.getProductionsActor = function(actor){

                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();

                var indexActor = sActors.findIndex( act => act.name === actor.name);

                if(indexActor === -1) throw new NoExistCategoryException;
                var nextIndex = 0;

                return {
                    //devuelve el papel que ha realizado en la produccion y la produccion
                    next: function(){
                        return nextIndex < sActors[indexActor].productions.length ? 
                            {character:sActors[indexActor].productions[nextIndex].character, production:sActors[indexActor].productions[nextIndex++].production, done:false} : {done:true};
                    }
                }

            }

            //iterador que devuelve las producciones de una categoria concreta una a una
            this.getProductionsCategory = function(category){

                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();

                var indexCat = sCategory.findIndex( cat => cat.name === category.name);

                if(indexCat === -1) throw new NoExistCategoryException;
                var nextIndex = 0;

                return {
                    next: function(){
                        return nextIndex < sCategory[indexCat].productions.length ? 
                            {value:sCategory[indexCat].productions[nextIndex++], done:false} : {done:true};
                    }
                }

            }

        }

        VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		//Devolvemos el objeto para que sea una instancia única.
        var vSystem = new VideoSystem();
        Object.freeze(vSystem);
        return vSystem;
    }return{
        getInstance: function(){
            if(!instantiated){
                instantiated = init();
            }
            return instantiated;
        }
    }
})();
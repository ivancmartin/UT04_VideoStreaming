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
            this.addCategory = function(category){
                if(!(category instanceof Category) || category === null) throw new InvalidTypeOfException();
                
                //devuelve la primera coincidencia del valor name de un objeto Categoria
                var index = sCategory.findIndex( categories => categories.name === category.name);

                //si el indice es diferente de -1 es que eiste y por lo tanto no se puede añadir porque estaría repetido
                if( index !== -1) throw new ExistValueException(category);
                sCategory.push(category);
                
                return sCategory.length;
            }

            //borrar categoría
            this.removeCategory = function(category){
                if(!(category instanceof Category) || category === null) throw new InvalidTypeOfException();
                
                //devuelve la primera coincidencia del valor name de un objeto Categoria
                var index = sCategory.findIndex( categories => categories.name === category.name);

                //si no exsiste salta una excepción                
                if (index === -1) throw new NoExistCategoryException(category);

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
            this.addUser = function(user){
                if(!(user instanceof User) || user === null) throw new InvalidTypeOfException();

                //devuelve la primera coincidencia del valor name de un objeto User
                var indexName = sUser.findIndex( usuario => usuario.name === user.name);
                
                //devuelve la primera coincidencia del valor email de un objeto User
                var indexEmail = sUser.findIndex( usuario => usuario.email === user.email);

                if(indexName !== -1 ) throw new ExistUserNameException(user.name);
                if(indexEmail !== -1 ) throw new ExistUserEmailException(user.email);

                sUser.push(user);
                
                return sUser.length;
            }

            //borrar un usuario
            this.removeUser = function(user){
                if(!(user instanceof User) || user === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor name de un objeto User
                var index = sUser.findIndex( usuario => usuario.name === user.name);
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(user);

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
            this.addProduction = function(production){

                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor title de un objeto Production
                var index = sProductions.findIndex( produccion => produccion.title === production.title);
                
                if(index !== -1) throw new ExistValueException(production.title);
                    sProductions.push(production);
                return sProductions.length;
            }

            //borrar produccion
            this.removeProduction = function(production){
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                //devuelve la primera coincidencia del valor title de un objeto Production
                var index = sProductions.findIndex( production => production.title === production.title);
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(production);

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
            this.addActor = function(actor){
                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(sActors.indexOf(actor) !== -1) throw new ExistValueException(actor);
                sActors.push(actor);
                
                return sActors.length;
            }

            //borrar actor
            this.removeActor = function(actor){
                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                var index = sActors.indexOf(actor); //recogemos el indice que coincida
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(actor);

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
            this.addDirector = function(director){
                if(!(director instanceof Person) || director === null) throw new InvalidAccesConstructorException();
                if(sDirectors.indexOf(director) !== -1) throw new ExistValueException(director);
                sDirectors.push(director);
                
                return sDirectors.length;
            }

            //borrar Director
            this.removeDirector = function(director){
                if(!(director instanceof Person) || director === null) throw new InvalidAccesConstructorException();
                var index = sDirectors.indexOf(director); //recogemos el indice que coincida
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(director);

                sDirectors.splice(index,1)
                
                return sDirectors.length;
            }
            
            //asignaciones y desasignaciones

            //asignamos una categoria a una produccion
            this.assignCategory = function(category,production){
                
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                if(sCategory.indexOf(category) === -1) vSistem.addCategory(category);
                // si la produccion no existe, se crea
                if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexCat = (sCategory.indexOf(category));
                //var indexPro = (sProductions.indexOf(production));

                //console.log("cate index: " + indexCat);
                //console.log("pro index: " + indexPro);

                //preguntar
                //console.log(typeof sCategory[indexCat].productions === 'undefined');
                if(typeof sCategory[indexCat].productions === 'undefined' ) {
                    sCategory[indexCat].productions = [];
                }
                
                //console.log(sCategory[indexCat].productions.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(sCategory[indexCat].productions.length === 0){
                    //console.log("push directo");
                    sCategory[indexCat].productions.splice(production,1);
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
                
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                //if(sCategory.indexOf(category) === -1) vSistem.addCategory(category);
                // si la produccion no existe, se crea
                //if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexCat = (sCategory.indexOf(category));
                //var indexPro = (sProductions.indexOf(production));

                //console.log("cate index: " + indexCat);
                //console.log("pro index: " + indexPro);

                //console.log(sCategory[indexCat].productions.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
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

            //asignamos un actor a una produccion
            this.assignDirector = function(director,production){
                
                if(!(director instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                if(sDirectors.indexOf(director) === -1) vSistem.addDirector(director);
                // si la produccion no existe, se crea
                if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexDirector = (sDirectors.indexOf(director));
                var indexPro = (sProductions.indexOf(production));

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                //preguntar
                //console.log(typeof sProductions[indexPro].actors === 'undefined');
                if(typeof sProductions[indexPro].directors === 'undefined' ) {
                    sProductions[indexPro].directors = [];
                }
                
                //console.log(sProductions[indexPro].actors.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(sProductions[indexPro].directors.length === 0){
                    //console.log("push directo");
                    sProductions[indexPro].directors.splice(director,1);
                }else{
                    while(i <sProductions[indexPro].directors.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexPro].productions[i].title === (production.title)));
                        //console.log(sCategory[indexPro].productions[i].title + " vs " + production.title);
                        if (sProductions[indexPro].directors[i].name === (director.name)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexPro].productions.length);
                //console.log("encontrado: " + encontrado);
                if(!encontrado) {
                    sProductions[indexPro].directors.push(director);
                }else{
                    throw new ExistCategoryException(director.name);
                }

                //console.log("Longitud del array: " + sCategory[indexPro].productions.length);
                return sProductions[indexPro].directors.length;   
            }

            //desasignamos un actor a una produccion
            this.desassignDirector = function(director,production){
                
                if(!(director instanceof Person) || director === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                //if(sActors.indexOf(actor) === -1) vSistem.addActor(actor);
                // si la produccion no existe, se crea
                //if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexDirector = (sDirectors.indexOf(director));
                var indexPro = (sProductions.indexOf(production));

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                //preguntar
                //console.log(typeof sProductions[indexPro].actors === 'undefined');
                
                
                //console.log(sProductions[indexPro].actors.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(typeof sProductions[indexPro].directors.length === 0 ) {
                    throw new EmptyArrayException();
                }else{
                    while(i <sProductions[indexPro].directors.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexPro].productions[i].title === (production.title)));
                        //console.log(sCategory[indexPro].productions[i].title + " vs " + production.title);
                        if (sProductions[indexPro].directors[i].name === (director.name)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexPro].productions.length);
                //console.log("encontrado: " + encontrado);
                if(encontrado) {
                    sProductions[indexPro].directors.splice(director,1);
                }else{
                    throw new NoExistCategoryException(director.name);
                }

                //console.log("Longitud del array: " + sCategory[indexPro].productions.length);
                return sProductions[indexPro].directors.length;   
            }

            //asignamos un actor a una produccion
            this.assignActor = function(actor,production,character,main){
                
                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                if(sActors.indexOf(actor) === -1) vSistem.addActor(actor);
                // si la produccion no existe, se crea
                if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexActor = (sActors.indexOf(actor));
                var indexPro = (sProductions.indexOf(production));

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                //preguntar
                //console.log(typeof sProductions[indexPro].actors === 'undefined');
                if(typeof sProductions[indexPro].actors === 'undefined' ) {
                    sProductions[indexPro].actors = [];
                }
                
                //console.log(sProductions[indexPro].actors.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(sProductions[indexPro].actors.length === 0){
                    //console.log("push directo");
                    sProductions[indexPro].actors.splice(actor,1);
                }else{
                    while(i <sProductions[indexPro].actors.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexPro].productions[i].title === (production.title)));
                        //console.log(sCategory[indexPro].productions[i].title + " vs " + production.title);
                        if (sProductions[indexPro].actors[i].actor.name === (actor.name)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexPro].productions.length);
                //console.log("encontrado: " + encontrado);
                if(!encontrado) {
                    sProductions[indexPro].actors.push({   
                        actor: actor,
                        character: character,
                        main :main
                    });
                }else{
                    throw new ExistCategoryException(production.title);
                }

                //console.log("Longitud del array: " + sCategory[indexPro].productions.length);
                return sProductions[indexPro].actors.length;   
            }

            //asignamos un actor a una produccion
            this.desassignActor = function(actor,production){
                
                if(!(actor instanceof Person) || actor === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                //console.log("Existe categoria?: " + (sCategory.indexOf(category) !== -1));
                //console.log("Existe Produccion?: " + (sProductions.indexOf(production) !== -1));

                //si la categoria no existe, se crea
                //if(sActors.indexOf(actor) === -1) vSistem.addActor(actor);
                // si la produccion no existe, se crea
                //if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                //var indexActor = (sActors.indexOf(actor));
                var indexPro = (sProductions.indexOf(production));

                //console.log("sActors index: " + indexActor);
                //console.log("indexPro index: " + indexPro);

                //preguntar
                //console.log(typeof sProductions[indexPro].actors === 'undefined');
                
                
                //console.log(sProductions[indexPro].actors.length);
                
                //comprobamos que la produccion no tenga asociada esa categoria en concreto 
                var i = 0;
                var encontrado = false;
                
                if(typeof sProductions[indexPro].actors.length === 0 ) {
                    throw new EmptyArrayException();
                }else{
                    while(i <sProductions[indexPro].actors.length && !encontrado){
                        //console.log("i " + i);
                        //console.log("El titulo de la produccion existe?: " + (sCategory[indexPro].productions[i].title === (production.title)));
                        //console.log(sCategory[indexPro].productions[i].title + " vs " + production.title);
                        if (sProductions[indexPro].actors[i].actor.name === (actor.name)){
                            encontrado = true;
                        }
                        i++;    
                    }
                }
                //console.log("**Longitud del array: " + sCategory[indexPro].productions.length);
                //console.log("encontrado: " + encontrado);
                if(encontrado) {
                    sProductions[indexPro].actors.splice(actor,1);
                }else{
                    throw new NoExistCategoryException(actor.name);
                }

                //console.log("Longitud del array: " + sCategory[indexPro].productions.length);
                return sProductions[indexPro].actors.length;   
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
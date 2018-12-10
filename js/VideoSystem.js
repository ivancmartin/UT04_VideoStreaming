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
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                if(sCategory.indexOf(category) !== -1) throw new ExistValueException(category);
                sCategory.push(category);
                
                return sCategory.length;
            }

            //borrar categoría
            this.removeCategory = function(category){
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                var index = sCategory.indexOf(category); //recogemos el indice que coincida
                
                //si no exsiste salata una excepción                
                if (index === -1) throw new NoExistValueException(category);

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

            //devuelve la primera coincidencia del valor name de un objeto User
            this.firstIndexname = function(user){
				return sUser.findIndex(
                    function(sUser) {
                        return (sUser.name === user.name)
                    });		
            }
            
            //devuelve la primera coincidencia del valor email de un objeto User
            this.firstIndexEmail = function(user){
				return sUser.findIndex(
                    function(sUser) {
                        return (sUser.email === user.email)
                    });		
            }

            //añadir un usuario
            this.addUser = function(user){
                if(!(user instanceof User) || user === null) throw new InvalidAccesConstructorException();
                
                var indexName = vSistem.firstIndexname(user);
                //console.log(indexName);
                
                var indexEmail = vSistem.firstIndexEmail(user);
                //console.log(indexEmail);

                if(indexName !== -1 ) throw new ExistUserNameException(user.name);
                if(indexEmail !== -1 ) throw new ExistUserEmailException(user.email);

                sUser.push(user);
                
                return sUser.length;
            }

            //borrar un usuario
            this.removeUser = function(user){
                if(!(user instanceof User) || user === null) throw new InvalidAccesConstructorException();
                var index = sUser.indexOf(user); //recogemos el indice que coincida
                
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
                if(sProductions.indexOf(production) !== -1) throw new ExistValueException(production);
                sProductions.push(production);
                
                return sProductions.length;
            }

            //borrar produccion
            this.removeProduction = function(production){
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                var index = sProductions.indexOf(production); //recogemos el indice que coincida
                
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
            
            //asignamos un director a una produccion
            this.assignCategory = function(category,production){
                if(!(category instanceof Category) || category === null) throw new InvalidAccesConstructorException();
                if(!(production instanceof Production) || production === null) throw new InvalidAccesConstructorException();
                
                if(sCategory.indexOf(category) === -1) vSistem.addCategory(category);
                
                if(sProductions.indexOf(production) === -1) vSistem.addProduction(production);

                var indexCat = (sCategory.indexOf(category));
                var indexPro = (sProductions.indexOf(production));

                var i = 0;
                var encontrado = false;
                while(i < sCategory[indexCat].productions.length && !encontrado){
                    if (sCategory[indexCat].productions[i].title === production.title){
                        encontrado = true;
                    }
                    i++;
                }//Fin del while
                if(!encontrado){
                    //Coge la categoria que coincida con la position de la categoria encontrada.La propiedad production de ese elemento.Hace el push al array
                    sCategory[indexCat].productions.push(production);
                }else{
                    throw new AssignCategoryException();
                }


                console.log("cate: " + indexCat);
                console.log("cate: " + indexPro);

                if (sCategory[indexCat].production.length === 0)sCategory[indexCat].production.push(production); 
                console.log(sCategory[indexCat].production.length);
                //comprobamos que la produccion no tenga asociada esa categoria en concreto
                var index = 0; 
                
                
                

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
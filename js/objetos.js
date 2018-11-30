"use strict";

function PersonaException(param){};
PersonaException.prototype = new MyBaseExceptions();
PersonaException.prototype.constructor = PersonaException; 


//archivo donde se guardaran los objetos simples

function Person(name,lastName1,lastName2,born,picture){
    
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
    //if(!(born instanceof Date))
    //    throw new InvalidDateException(born);

    if(!picture) //Suposición: comprobar que la ruta existe y es correcta 
        throw new EmptyValuesException("picture");

    //atributos de la clase
    var pName = name;
    var pLastName1 = lastName1;
    var pLastName2 = lastName2;
    var pBorn = born;
    var pPicture = picture; 

    //recoger y dar los valores al objeto (getters y setters)
    Object.defineProperty(this,'name',{
        get: function(){
            return pName;
        },
        set: function(value){
            pName = value;
        }
    });

    Object.defineProperty(this,'lastName1',{
        get: function(){
            return pLastName1;
        },
        set: function(value){
            pLastName1 = value;
        }
    });

    Object.defineProperty(this,'lastName2',{
        get: function(){
            return pLastName2;
        },
        set: function(value){
            pLastName2 = value;
        }
    });

    Object.defineProperty(this,'born',{
        get: function(){
            return pBorn;
        },
        set: function(value){
            pBorn = value;
        }
    });

    Object.defineProperty(this,'picture',{
        get: function(){
            return pPicture;
        },
        set: function(value){
            pPicture = value;
        }
    });
};

Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function(){
    return "Nombre: " + this.name + ", 1º apellido: " + this.lastName1 + ", 2º apellido: " + this.lastName2 + ", fecha de nacimiento: " + this.born + ",ruta foto: " + this.picture; 
};



function testPerson(){
    
    // ERROR: objeto creado sin parametros
    try {
        var Persona1 ;
        console.log(Persona1= new Person());    
    } catch (error) {
        console.log(error.toString());
    }

    console.log("Declaración de Persona 1:");
    var Persona1 ;
    Persona1 = new Person("ivan","cañizares","martín","23/2/1994","ruta");
    console.log(Persona1.toString());


}
window.onload = testPerson;
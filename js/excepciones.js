"use strict";
// execpciones base

//funcion base para las excepciones
function MyBaseExceptions(){
}

//heredamos de Error
MyBaseExceptions.prototype = new Error();

//definimos el constructor
MyBaseExceptions.prototype.constructor = MyBaseExceptions;

//añadimos la funcion toString para visualizar los errores(nombre y mensage);
MyBaseExceptions.prototype.toString = function(){
    return this.name + " : " + this.message;
}

//InvalidAccesConstructorException: heradado de MyBaseExceptions y su constructor
function InvalidAccesConstructorException(){
    this.name = "InvalidAccesConstructor";
    this.message = "El constructor no puede ser llamado como una función";
} 
InvalidAccesConstructorException.prototype = new MyBaseExceptions();
InvalidAccesConstructorException.prototype.constructor = InvalidAccesConstructorException;

//EmptyValuesException: controlar que los parámetros no estén vacíos.
function EmptyValuesException(param){
    this.name = "EmptyValuesException";
    this.message = "Error: El parámetro introducido \"" + param + "\" no puede estar vacío";
}
EmptyValuesException.prototype = new MyBaseExceptions();
EmptyValuesException.prototype.constructor = EmptyValuesException;

//InvalidDateException: comprobar si la fecha introducida es correcta.
function InvalidDateException(param){
    this.name = "InvalidDateException";
    this.message = "Error: La fecha introducida " + param + " no es correcta";
}
InvalidDateException.prototype = new MyBaseExceptions();
InvalidDateException.prototype.constructor = InvalidDateException;

//InvalidDateException: comprobar si la fecha introducida es correcta.
function InvalidValueException(){
    this.name = "InvalidValueException";
    this.message = "Error: el valor introducido no es correcta";
}
InvalidValueException.prototype = new MyBaseExceptions();
InvalidValueException.prototype.constructor = InvalidValueException;

//ExistValueException: el valor ya existe en el array.
function ExistValueException(param){
    this.name = "ExistValueException";
    this.message = "Error: el valor " + param + " introducido ya existe en el array";
}
ExistValueException.prototype = new MyBaseExceptions();
ExistValueException.prototype.constructor = ExistValueException;

//AbstractClassException: es una clase abstracta.
function AbstractClassException(){
    this.name = "AbstractClassException";
    this.message = "Error: es una clase abstracta, no puede instanciarse";
}
AbstractClassException.prototype = new MyBaseExceptions();
AbstractClassException.prototype.constructor = AbstractClassException;

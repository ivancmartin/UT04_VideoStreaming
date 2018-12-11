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


// **** excepciones sobre VS ****

//NoExistCategoryException: el valor NO existe en el array.
function NoExistCategoryException(param){
    this.name = "NoExistCategoryException";
    this.message = "Error: el valor " + param + " NO existe en el array";
}
NoExistCategoryException.prototype = new MyBaseExceptions();
NoExistCategoryException.prototype.constructor = NoExistCategoryException;

//ExistCategoryException: el valor existe en el array.
function ExistCategoryException(param){
    this.name = "ExistCategoryException";
    this.message = "Error: el valor " + param + " existe en el array";
}
ExistCategoryException.prototype = new MyBaseExceptions();
ExistCategoryException.prototype.constructor = ExistCategoryException;

//ExistValueException: el valor ya existe en el array.
function ExistUserNameException(param){
    this.name = "ExistUserNameException";
    this.message = "Error: ya existe un usuario con el nombre: " + param ;
}
ExistUserNameException.prototype = new MyBaseExceptions();
ExistUserNameException.prototype.constructor = ExistUserNameException;

//ExistValueException: el valor ya existe en el array.
function ExistUserEmailException(param){
    this.name = "ExistUserEmailException";
    this.message = "Error: ya existe un usuario con el email: " + param ;
}
ExistUserEmailException.prototype = new MyBaseExceptions();
ExistUserEmailException.prototype.constructor = ExistUserEmailException;

//ExistValueException: el valor ya existe en el array.
function EmptyArrayException(param){
    this.name = "EmptyArrayException";
    this.message = "Error: el " + param + " esta vacío: ";
}
EmptyArrayException.prototype = new MyBaseExceptions();
EmptyArrayException.prototype.constructor = EmptyArrayException;
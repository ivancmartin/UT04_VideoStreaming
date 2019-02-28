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

//tipo de dato incorrecto
function InvalidTypeOfException(){
    this.name = "InvalidTypeOfException";
    this.message = "El tipo de dato no es correcto";
} 
InvalidTypeOfException.prototype = new MyBaseExceptions();
InvalidTypeOfException.prototype.constructor = InvalidTypeOfException;

//EmptyValuesException: controlar que los parámetros no estén vacíos.
function EmptyValuesException(param){
    this.name = "EmptyValuesException";
    this.message = "El parámetro introducido \"" + param + "\" no puede estar vacío";
}
EmptyValuesException.prototype = new MyBaseExceptions();
EmptyValuesException.prototype.constructor = EmptyValuesException;

//InvalidDateException: comprobar si la fecha introducida es correcta.
function InvalidDateException(param){
    this.name = "InvalidDateException";
    this.message = "La fecha introducida " + param + " no es correcta";
}
InvalidDateException.prototype = new MyBaseExceptions();
InvalidDateException.prototype.constructor = InvalidDateException;

//InvalidDateException: comprobar si la fecha introducida es correcta.
function InvalidStringException(param){
    this.name = "InvalidStringException";
    this.message = "La cadena introducida '"+ param +"'solo tiene que estar formada por letras";
}
InvalidStringException.prototype = new MyBaseExceptions();
InvalidStringException.prototype.constructor = InvalidStringException;

//ExistValueException: el valor ya existe en el array.
function ExistValueException(param){
    this.name = "Duplica:o";
    this.message = "el valor " + param + " introducido ya existe en el sistema";
}
ExistValueException.prototype = new MyBaseExceptions();
ExistValueException.prototype.constructor = ExistValueException;

//AbstractClassException: es una clase abstracta.
function AbstractClassException(){
    this.name = "AbstractClassException";
    this.message = "es una clase abstracta, no puede instanciarse";
}
AbstractClassException.prototype = new MyBaseExceptions();
AbstractClassException.prototype.constructor = AbstractClassException;


// **** excepciones sobre VS ****

//NoExistCategoryException: el valor NO existe en el array.
function NoExistCategoryException(param){
    this.name = "NoExistCategoryException";
    this.message = "el valor " + param + " NO existe en el array";
}
NoExistCategoryException.prototype = new MyBaseExceptions();
NoExistCategoryException.prototype.constructor = NoExistCategoryException;

//NoExistProductionException: el valor NO existe en el array.
function NoExistProductionException(param){
    this.name = "NoExistProductionException";
    this.message = "el valor " + param + " NO existe en el array";
}
NoExistProductionException.prototype = new MyBaseExceptions();
NoExistProductionException.prototype.constructor = NoExistProductionException;


//NoExistPersonnException: el valor NO existe en el array.
function NoExistPersonnException(param){
    this.name = "NoExistPersonnException";
    this.message = "el valor " + param + " NO existe en el array";
}
NoExistPersonnException.prototype = new MyBaseExceptions();
NoExistPersonnException.prototype.constructor = NoExistPersonnException;

//ExistCategoryException: el valor existe en el array.
function ExistCategoryException(param){
    this.name = "ExistCategoryException";
    this.message = "el valor " + param + " existe en el array";
}
ExistCategoryException.prototype = new MyBaseExceptions();
ExistCategoryException.prototype.constructor = ExistCategoryException;


function ExistUserNameException(param){
    this.name = "ExistUserNameException";
    this.message = "ya existe un usuario con el nombre: " + param ;
}
ExistUserNameException.prototype = new MyBaseExceptions();
ExistUserNameException.prototype.constructor = ExistUserNameException;


function ExistUserEmailException(param){
    this.name = "ExistUserEmailException";
    this.message = "ya existe un usuario con el email: " + param ;
}
ExistUserEmailException.prototype = new MyBaseExceptions();
ExistUserEmailException.prototype.constructor = ExistUserEmailException;


function EmptyArrayException(param){
    this.name = "EmptyArrayException";
    this.message = "el " + param + " esta vacío: ";
}
EmptyArrayException.prototype = new MyBaseExceptions();
EmptyArrayException.prototype.constructor = EmptyArrayException;
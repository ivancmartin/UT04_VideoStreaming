"use strict";

console.log("** Instanciación y nombre de nuestro VS **")
var vSistem = VideoSystem.getInstance();
console.log("Nombre del sistema por defecto: " + vSistem.name);
console.log("cambiamos el nombre a " + (vSistem.name = 'Netflix'));
console.log("Nombre actual del sistema : " + vSistem.name);

try {
    console.log("cambiamos el nombre a (sin nombre)" + (vSistem.name = ''));
} catch (err) {
    console.log(err.toString());
}

console.log("** operaciones con categorias **");
var categoria1  = new Category("categoria 1","descripcion: categoria 1"); 
var categoria2  = new Category("categoria 2","descripcion: categoria 2");
var categoria3  = new Category("categoria 3","descripcion: categoria 3");
var categoria4  = new Category("categoria 1","descripcion: categoria 1");

console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria1));
console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria2));
console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria3));
console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria4));

console.log("añadimos la MISMA categoria: ");
try {
    console.log(vSistem.addCategory(categoria1));
} catch (err) {
    console.log(err.toString());
}

console.log("Eliminamos una categoria (categoria2); Tamaño actual del array:" + vSistem.removeCategory(categoria2));

//recorremos el iterador y mostramos los valores
var categorias = vSistem.categories;
var categoria = categorias.next();
while (categoria.done !== true){
    console.log ("" + categoria.value);
    categoria = categorias.next();
}

console.log("** operaciones con usuarios **");

var usuario1 = new User("ivan","ivan@gmail.com","contrasenia");
var usuario2 = new User("ruben","ruben@gmail.com","contrasenia2");
var usuario3 = new User("maria","maria@gmail.com","contrasenia");
var usuario4 = new User("Bea","bea@gmail.com","contrasenia");

try {
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario1));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario2));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario3));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario4));
} catch (err) {
    console.log(err.toString());
}

try {
    console.log("Eliminamos un usuario (usuario3); Tamaño actual del array:" + vSistem.removeUser(usuario3));    
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var usuarios = vSistem.users;
var usuario = usuarios.next();
while (usuario.done !== true){
    console.log ("" + usuario.value);
    usuario = usuarios.next();
}

console.log("** Operaciones con producciones **")

var subtitulos = ["español","Ingles"];
var audios = ["español","Ingles"];
var recurso = new Resource(10,"../video.vwm",audios,subtitulos);  
var coordenadas1 = new Coordinate(444,446);
var localizaciones = [coordenadas1,coordenadas1];

var temporadas = [
    {title: "temporada 1", episode:recurso, scenarios:coordenadas1 },
    {title: "temporada 2", episode:recurso, scenarios:coordenadas1 }
]; 
var fecha = new Date("January 1, 2000");

//la clase series reconoce si tiene una temporada ya repetida
var serie1 = new Serie("GOT","UK",fecha,"La serie GOT","../images/hp_movie.jpg",temporadas);
var peli1 = new Movie("HP","ESP",fecha,"La peli de HP","../images/hp_movie.jpg",recurso,localizaciones);

try {
    console.log("añadimos una serie; Tamaño actual del array: " + vSistem.addProduction(serie1));
    console.log("añadimos una pelicula; Tamaño actual del array: " + vSistem.addProduction(peli1));
    
    //console.log("Eliminamos una categoria (peli1); Tamaño actual del array:" + vSistem.removeProduction(peli1));
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var producciones = vSistem.productions;
var produccion = producciones.next();
while (produccion.done !== true){
    console.log ("" + produccion.value);
    produccion = producciones.next();
}

console.log("** operaciones con actores(Person) **");
var fecha1 = new Date("December 3, 1985");
var fecha2 = new Date("September 25, 1968");

var actriz1 = new Person("Amanda","Michelle","Seyfried",fecha1,"ruta");
var actor1 = new Person("Willard ","Carroll ","Smith",fecha2,"ruta");

try {
    console.log("añadimos una actriz; Tamaño actual del array: " + vSistem.addActor(actriz1));
    console.log("añadimos un actor; Tamaño actual del array: " + vSistem.addActor(actor1));
    
    //console.log("Eliminamos un actor (actor1); Tamaño actual del array:" + vSistem.removeActor(actor1));
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var actores = vSistem.actors;
var actor = actores.next();
while (actor.done !== true){
    console.log ("" + actor.value);
    actor = actores.next();
}

console.log("** operaciones con directores(Person) **");
var fecha1 = new Date("Jun 27, 1966");
var fecha2 = new Date("May 14, 1944");

var director1 = new Person("Jeffrey","Jacob","Abrams",fecha1,"ruta");
var director2 = new Person("George ","Walton","Lucas",fecha2,"ruta");

try {
    console.log("añadimos una director; Tamaño actual del array: " + vSistem.addDirector(director1));
    console.log("añadimos un director; Tamaño actual del array: " + vSistem.addDirector(director2));
    
    //console.log("Eliminamos un director (director1); Tamaño actual del array:" + vSistem.removeDirector(director1));
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var directores = vSistem.directors;
var director = directores.next();
while (director.done !== true){
    console.log ("" + director.value);
    director = directores.next();
}

console.log("** asignaciones con categorías **");

vSistem.assignCategory(categoria1,serie1);
vSistem.assignCategory(categoria1,serie1);
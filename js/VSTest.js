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
var categoriaAux  = new Category("categoria 2","descripcion: categoria 2");

console.log("** añadimos categorías hasta que una categoría esté repetida **");
try {
    console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria1));
    console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria2));
    console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria3));
    console.log("añadimos una categoria; Tamaño actual del array: " + vSistem.addCategory(categoria4));
} catch (err) {
    console.log(err.toString());
};

console.log("Eliminamos una categoria (categoria2); Tamaño actual del array:" + vSistem.removeCategory(categoria2));

console.log("Eliminamos una categoria que no exista: ");
try {
    console.log("Eliminamos una categoria (categoria2); Tamaño actual del array:" + vSistem.removeCategory(categoriaAux));
} catch (err) {
    console.log(err.toString());
};

//recorremos el iterador y mostramos los valores
var categorias = vSistem.categories;
var categoria = categorias.next();
console.log("recorremos las categorías:");
while (categoria.done !== true){
    console.log ("" + categoria.value);
    categoria = categorias.next();
}


console.log("** operaciones con usuarios **");

var usuario1 = new User("ivan","ivan@gmail.com","contrasenia");
var usuario2 = new User("ruben","ruben@gmail.com","contrasenia2");
var usuario3 = new User("maria","maria@gmail.com","contrasenia");
var usuario4 = new User("Bea","bea@gmail.com","contrasenia");
var usuarioAux = new User("Bea","bea@gmail.com","contrasenia");

console.log("añadimos usuarios al array hasta que uno esté repetido:");
try {
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario1));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario2));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario3));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuario4));
    console.log("añadimos un usuario; Tamaño actual del array: " + vSistem.addUser(usuarioAux));
} catch (err) {
    console.log(err.toString());
}

console.log("Eliminamos un usuario (usuario4); Tamaño actual del array:" + vSistem.removeUser(usuario4));    

try {
    console.log("Eliminamos un usuario (usuario4) que ya no existe");
    vSistem.removeUser(usuarioAux);    
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

var episodios = [
    {title: "episodio1 temporada 1", episode:recurso, scenarios:coordenadas1, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} },
    {title: "episodio2 temporada 1", episode:recurso, scenarios:coordenadas1, toString(){return "\ntitulo: " + this.title + " recurso: " + this.episode + " escenarios: " + this.scenarios} }
]; 

var season1 = new Season("temp 1",episodios);
var season2 = new Season("temp 2",episodios);

var fecha = new Date("January 1, 2000");

//la clase series reconoce si tiene una temporada ya repetida
var serie1 = new Serie("GOT","UK",fecha,"La serie GOT","../images/hp_movie.jpg",season1);
var serie2 = new Serie("The Simpsons","USA",fecha,"La serie de 'The Simpsons'","../images/hp_movie.jpg",season1);
var peli1 = new Movie("HP","ESP",fecha,"La peli de HP","../images/hp_movie.jpg",recurso,localizaciones);
var serieAux = new Serie("GOT","UK",fecha,"La serie GOT","../images/hp_movie.jpg",season1);

console.log("añadimos series hasta que una esté repetida");
try {
    console.log("añadimos una serie; Tamaño actual del array: " + vSistem.addProduction(serie2));
    console.log("añadimos una pelicula; Tamaño actual del array: " + vSistem.addProduction(peli1));
    console.log("añadimos una serie; Tamaño actual del array: " + vSistem.addProduction(serie1));
    console.log("añadimos una serie; Tamaño actual del array: " + vSistem.addProduction(serieAux));
} catch (err) {
    console.log(err.toString());
}

console.log("Eliminamos una pelicula (peli1); Tamaño actual del array:" + vSistem.removeProduction(peli1));

console.log("Eliminamos una serie/pelicula (peli1) que ya no existe:");
try {
    console.log("Eliminamos una serie (peli1); Tamaño actual del array:" + vSistem.removeProduction(peli1));
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var producciones = vSistem.productions;
var produccion = producciones.next();
while (produccion.done !== true){
    console.log("***************************");
    console.log (produccion.value.toString() );
    produccion = producciones.next();
}

console.log("** operaciones con actores(Person) **");
var fecha1 = new Date("December 3, 1985");
var fecha2 = new Date("September 25, 1968");

var actriz1 = new Person("Amanda","Michelle","Seyfried",fecha1,"ruta");
var actor1 = new Person("Willard ","Carroll ","Smith",fecha2,"ruta");
var actorAux = new Person("Willard ","Carroll ","Smith",fecha2,"ruta");

console.log("añadimos actores hasta que uno esté repetido");
try {
    console.log("añadimos una actriz; Tamaño actual del array: " + vSistem.addActor(actriz1));
    console.log("añadimos un actor; Tamaño actual del array: " + vSistem.addActor(actor1));
    console.log("añadimos un actor; Tamaño actual del array: " + vSistem.addActor(actorAux));
    
} catch (err) {
    console.log(err.toString());
}

console.log("Eliminamos un actor (actor1); Tamaño actual del array:" + vSistem.removeActor(actor1));

console.log("Eliminamos una serie/pelicula (peli1) que ya no existe:");
try {
    vSistem.removeActor(actorAux);
} catch (err) {
    console.log(err.toString());
}

//recorremos el iterador y mostramos los valores
var actores = vSistem.actors;
var actor = actores.next();
while (actor.done !== true){
    console.log ("" + actor.value);
    console.log("***************************");
    actor = actores.next();
}

console.log("** operaciones con directores(Person) **");
var fecha1 = new Date("Jun 27, 1966");
var fecha2 = new Date("May 14, 1944");

var director1 = new Person("Jeffrey","Jacob","Abrams",fecha1,"ruta");
var director2 = new Person("George ","Walton","Lucas",fecha2,"ruta");
var directorAux = new Person("George ","Walton","Lucas",fecha2,"ruta");

console.log("añadimos directores hasta que uno esté repetido");
try {
    console.log("añadimos un director; Tamaño actual del array: " + vSistem.addDirector(director1));
    console.log("añadimos un director; Tamaño actual del array: " + vSistem.addDirector(director2));
    console.log("añadimos un director; Tamaño actual del array: " + vSistem.addDirector(directorAux));
} catch (err) {
    console.log(err.toString());
}

console.log("Eliminamos un director (director1); Tamaño actual del array:" + vSistem.removeDirector(directorAux));

console.log("Eliminamos un director (director1) que ya no existe:");
try {
    vSistem.removeDirector(directorAux);
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


console.log("** asignaciones de categorías **");
console.log("asignamos categorías hasta que una se repita: ");

try {
    console.log("asignamos a la categotia: '" + categoria1.name + "' a la produccion: '"  + serie1.title + "' total array: " + vSistem.assignCategory(categoria1,serie1));
    console.log("asignamos a la categotia: '" + categoria1.name + "' a la produccion: '"  + serie2.title + "' total array: " + vSistem.assignCategory(categoria1,serie2));
    //console.log("asignamos a la categotia(valor repetido): '" + categoria1.name + "' a la produccion: '"  + serie2.title + "' total array: " + vSistem.assignCategory(categoria1,serie2));
    console.log("asignamos a la categotia: '" + categoria2.name + "' a la produccion: '"  + serie1.title + "' total array: " + vSistem.assignCategory(categoria2,serie1));
    console.log("asignamos a la categotia: '" + categoria3.name + "' a la produccion: '"  + serie1.title + "' total array: " + vSistem.assignCategory(categoria3,serie1));
    console.log("asignamos a la categotia: '" + categoriaAux.name + "' a la produccion: '"  + serieAux.title + "' total array: " + vSistem.assignCategory(categoriaAux,serieAux));
} catch (err) {
    console.log(err.toString());
}

console.log("recorremos las categorías:");
var categorias = vSistem.categories;
var categoria = categorias.next();
while (categoria.done !== true){
    console.log ("" + categoria.value);
    categoria = categorias.next();
}

console.log("** desasignaciones de categorías **");

var serieAux = new Serie("GOT","UK",fecha,"La serie GOT","../images/hp_movie.jpg",""); 

try {
    console.log("desasignamos a la categotia: '" + categoria1.name + "' a la produccion: '"  + serieAux.title + "' total array: " + vSistem.deassignCategory(categoria1,serieAux));
    console.log("desasignamos a la categotia: '" + categoriaAux.name + "' a la produccion: '"  + serieAux.title + "' total array: " + vSistem.deassignCategory(categoriaAux,serieAux));
} catch (err) {
    console.log(err.toString());
}

console.log("** asignaciones de Directores **");
try {
    console.log("asignamos la produccion: '" +  serie1.title + "' al director: '"  + director1.name + "' total array: " + vSistem.assignDirector(director1,serie1));
    console.log("asignamos la produccion: '" +  serie1.title + "' al director: '"  + directorAux.name + "' total array: " + vSistem.assignDirector(directorAux,serie1));
    console.log("asignamos la produccion(valor repetido): '" + serie1.title + "' al director: '"  +   directorAux.name + "' total array: " + vSistem.assignDirector(director2,serie1));
} catch (err) {
    console.log(err.toString());
}

console.log("** desasignaciones de Directores **");
try {
    console.log("desasignamos el director: '" + director1.name + "' de la produccion: '"  + serie1.title + "' total array: " + vSistem.desassignDirector(director1,serie1));
    console.log("desasignamos el director: '" + directorAux.name + "' de la produccion: '"  + serie1.title + "' total array: " + vSistem.desassignDirector(directorAux,serie1));
    console.log("desasignamos el director: '" + director2.name + "' de la produccion: '"  + serie1.title + "' total array: " + vSistem.desassignDirector(director2,serie1));
} catch (err) {
    console.log(err.toString());
}

console.log("** asignaciones de actores **");


try {
    console.log("asignamos el actor: '" + actor1.name + "' a la produccion: '"  + serie1.title + " as 'El Personaje' " + "' total array: " + vSistem.assignActor(actor1,serie1,"El Personaje",false) + "\n" );
    console.log("asignamos el actor: '" + actriz1.name + "' a la produccion: '"  + serie2.title + " as 'Homer Simpson' " + "' total array: " + vSistem.assignActor(actriz1,serie2,"Homer Simpson",true) + "\n" ); 
    console.log("asignamos el actor: '" + actriz1.name + "' a la produccion: '"  + serie1.title + " as 'extra' " + "' total array: " + vSistem.assignActor(actriz1,serie1,"extra",false) + "\n" );   
    console.log("asignamos el actor: '" + actor1.name + "' a la produccion: '"  + serie1.title + " as 'Homer Simpson' " + "' total array: " + vSistem.assignActor(actor1,serie1,"Homer Simpson",true) + "\n" );    
} catch (err) {
    console.log(err.toString());
}

console.log("** desasignaciones de actores **");

try {
    console.log("desasignamos el actor: '" + actriz1.name + "' a la produccion: '"  + serie1.title + "' total array: " + vSistem.desassignActor(actriz1,serie1)); 
    console.log("desasignamos el actor: '" + actriz1.name + "' a la produccion: '"  + serie2.title + "' total array: " + vSistem.desassignActor(actriz1,serie2));   
    console.log("desasignamos el actor: '" + actriz1.name + "' a la produccion: '"  + serie1.title + "' total array: " + vSistem.desassignActor(actriz1,serie1));
} catch (err) {
    console.log(err.toString());
}

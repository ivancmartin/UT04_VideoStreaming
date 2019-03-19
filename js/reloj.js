var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function comprobarTiempo() {
    var tiempo = sessionStorage.getItem('cronometro');
    if (tiempo !== null) {
        var arrayTiempo = tiempo.split(":");
        console.log(arrayTiempo);

        centesimas = arrayTiempo[3];
        segundos = arrayTiempo[2];
        minutos = arrayTiempo[1];
        horas = arrayTiempo[0];

        Centesimas.innerHTML = ":" + centesimas;
        Segundos.innerHTML = ":" + segundos;
        Minutos.innerHTML = ":" + minutos;
        Horas.innerHTML = horas;  
    }
}
comprobarTiempo()
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
    document.getElementById("reinicio").disabled = true;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
    document.getElementById("inicio").disabled = false;
    document.getElementById("reinicio").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":0";
	Segundos.innerHTML = ":0";
	Minutos.innerHTML = ":0";
	Horas.innerHTML = "0";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
    document.getElementById("reinicio").disabled = true;
    sessionStorage.setItem('cronometro', horas.toString()+":"+minutos.toString()+":"+segundos.toString()+":"+centesimas.toString());
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
    }
    sessionStorage.setItem('cronometro', horas.toString()+":"+minutos.toString()+":"+segundos.toString()+":"+centesimas.toString());
}
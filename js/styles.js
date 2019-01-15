"use strict";

var vSistem = VideoSystem.getInstance();

//cambia el formulario de ingreso o de registro
function changeForm(value){
    var formReg = document.getElementsByClassName("login");
    var formIni = document.getElementsByClassName("regist");

    //console.log(value);

    //formReg[0].setAttribute("style","display:none");

    

    if (value === 1) {
        formReg[0].setAttribute("style","display:none");
        formIni[0].setAttribute("style","display:inline");
    }else{
        reset();
        formIni[0].setAttribute("style","display:none");
        formReg[0].setAttribute("style","display:inline");
    }

}

function reset(){
    var formReg = document.getElementsByClassName("login");
    var formIni = document.getElementsByClassName("regist");
    formReg.reset;
    formIni.reset;    
}

function createUser(){
    var name = document.getElementById("nUsuario").value;
    var email = document.getElementById("correo").value;
    var pass = document.getElementById("nPass").value;
    
    var usuario = new User(name,email,pass);

    console.log(usuario);

    vSistem.addUser(usuario);
}


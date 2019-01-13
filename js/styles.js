"use strict";

function loginMenu(){
    var head = document.getElementsByTagName("header");
    head[0].setAttribute("style","display:none");
    console.log(head.length);
}

function changeForm(value){
    var formReg = document.getElementsByClassName("login");
    var formIni = document.getElementsByClassName("regist");

    //console.log(value);

    //formReg[0].setAttribute("style","display:none");

    if (value === 1) {
        formReg[0].setAttribute("style","display:none");
        formIni[0].setAttribute("style","display:inline");
    }else{
        formReg[0].setAttribute("style","display:inline");
        formIni[0].setAttribute("style","display:none");
    }

}

window.onload = loginMenu;
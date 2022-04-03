'use strict'


document.querySelector('#miForm').addEventListener('submit', e => {

    e.preventDefault();
    
    let correo = document.querySelector("#Correo").value;

    if(correo == '' || correo.indexOf("@") == -1)
    {
        document.querySelector("#loginError").setAttribute('style','display:flex'); 
    }
    else
    {
        window.location.href="main.html"
    }
});

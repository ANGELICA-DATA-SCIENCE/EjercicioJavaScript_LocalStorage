const btnGuardar = document.getElementById("btnGuardar");


btnGuardar.addEventListener("click", function (event){

    event.preventDefault();
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none";
    if(txtNombre.value.length<3) {
        alertValidaciones.innerHTML="El nombre no es correcto.";
        alertValidacionesTexto="block";
        return false;
    }//if
    localStorage
});




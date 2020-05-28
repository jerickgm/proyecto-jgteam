import Profesor from "./clases/Profesor.js"

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();


    //Imprimir en el DOM
    function mostrarUsuario(usuario){
        
    }

    const profe = new Profesor("Jorge", "Garcia", 46048531, 30, "erick_surface@hotmail.com", 977382591, "M", ["HTML", "CSS", "Python"])
    console.log(profe);
    
});
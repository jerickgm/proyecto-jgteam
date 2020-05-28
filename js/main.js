import Profesor from "./clases/Profesor.js"

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    const padre = document.getElementById('profesor')
    
    //Imprimir en el DOM
    function mostrarUsuario(profe){
        const hijo = document.createElement('tr')
        hijo.innerHTML=`        
            <td>${profe.getNombres()} ${profe.getApellidos()}</td>
            <td>${profe.getDni()}</td>
            <td>${profe.getSexo()}</td>
            <td>${profe.getEdad()}</td>
            <td>${profe.getEmail()}</td>
            <td>${profe.getTelefono()}</td>
            <td>${profe.getCursoImpartido()}</td>        
        `       
        padre.appendChild(hijo)
    }

    const formulario = document.getElementById('formUser')
    formulario.addEventListener('submit', e =>{
        e.preventDefault()
        const datos = e.target
        const profesor = new Profesor(datos.nombreUser.value, datos.apellidosUser.value, datos.dniUser.value, datos.edadUser.value, datos.emailUser.value, datos.telefonoUser.value, datos.sexoUser.value, datos.cursoUser.value )
        if (profesor.getSexo() == 1) {
            profesor.setSexo('M')
        }else{
            profesor.setSexo('F')
        }        
        mostrarUsuario(profesor)
        formulario.reset()
        
    })
    
});
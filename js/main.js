import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    const formulario = document.getElementById('formUser')
    formulario.addEventListener('submit', e =>{
        e.preventDefault()
        const datos = e.target
        if (datos.selectUser.value == 1) {
            const profesor = new Profesor(datos.nombreUser.value, datos.apellidosUser.value, datos.dniUser.value, datos.edadUser.value, datos.emailUser.value, datos.telefonoUser.value, datos.sexoUser.value, datos.cursoUser.value )
            if (profesor.getSexo() == 1) {
                profesor.setSexo('M')
                mostrarProfesor(profesor)
            }else{
                profesor.setSexo('F')
                mostrarProfesor(profesor)
            }   
        }else{
            const alumno = new Alumno(datos.nombreUser.value, datos.apellidosUser.value, datos.dniUser.value, datos.edadUser.value, datos.emailUser.value, datos.telefonoUser.value, datos.sexoUser.value, datos.cursoUser.value )
            if (alumno.getSexo() == 1) {
                alumno.setSexo('M')
                mostrarAlumno(alumno)
            }else{
                alumno.setSexo('F')
                mostrarAlumno(alumno)
            } 
        }             
        formulario.reset()        
    })

    //Imprimir en el DOM   
    const padre = document.getElementById('userProfesor')
    function mostrarProfesor(user){        
        if (document.getElementById('valideHead')) {
            const hijo2 = document.createElement('tr')
            hijo2.innerHTML=`
            <tbody>        
                <td>${user.getNombres()} ${user.getApellidos()}</td>
                <td>${user.getDni()}</td>
                <td>${user.getSexo()}</td>
                <td>${user.getEdad()}</td>
                <td>${user.getEmail()}</td>
                <td>${user.getTelefono()}</td>
                <td>${user.getCursoImpartido()}</td>
            </tbody>        
            `
            padre.appendChild(hijo2)
        } else {     
            const hijo1 = document.createElement('thead')
            const hijo2 = document.createElement('tr')
            hijo1.setAttribute('id', 'valideHead')       
            hijo1.innerHTML = `
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>DNI</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Curso impartido</th>                      
                </tr>
            </thead>
            `  
            hijo2.innerHTML=`
            <tbody>        
                <td>${user.getNombres()} ${user.getApellidos()}</td>
                <td>${user.getDni()}</td>
                <td>${user.getSexo()}</td>
                <td>${user.getEdad()}</td>
                <td>${user.getEmail()}</td>
                <td>${user.getTelefono()}</td>
                <td>${user.getCursoImpartido()}</td>
            </tbody>        
            `
            padre.appendChild(hijo1)
            padre.appendChild(hijo2)
        }         
    }

    const padre2 = document.getElementById('userAlumno')
    function mostrarAlumno(user){        
        if (document.getElementById('valideHead2')) {
            const hijo2 = document.createElement('tr')
            hijo2.innerHTML=`
            <tbody>        
                <td>${user.getNombres()} ${user.getApellidos()}</td>
                <td>${user.getDni()}</td>
                <td>${user.getSexo()}</td>
                <td>${user.getEdad()}</td>
                <td>${user.getEmail()}</td>
                <td>${user.getTelefono()}</td>
                <td>${user.getCursoInscrito()}</td>
            </tbody>        
            `
            padre2.appendChild(hijo2)
        } else {     
            const hijo1 = document.createElement('thead')
            const hijo2 = document.createElement('tr')
            hijo1.setAttribute('id', 'valideHead2')       
            hijo1.innerHTML = `
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>DNI</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Curso inscrito</th>                      
                </tr>
            </thead>
            `  
            hijo2.innerHTML=`
            <tbody>        
                <td>${user.getNombres()} ${user.getApellidos()}</td>
                <td>${user.getDni()}</td>
                <td>${user.getSexo()}</td>
                <td>${user.getEdad()}</td>
                <td>${user.getEmail()}</td>
                <td>${user.getTelefono()}</td>
                <td>${user.getCursoInscrito()}</td>
            </tbody>        
            `
            padre2.appendChild(hijo1)
            padre2.appendChild(hijo2)
        }         
    }

    
});
import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"
import Curso from "./clases/Curso.js"

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

    //Obteniendo valores del formulario Usuarios
    const formUser = document.getElementById('formUser')
    formUser.addEventListener('submit', e =>{
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
        formUser.reset()        
    })

    //Obteniendo valores del formulario Cursos
    const formCurso = document.getElementById('formCurso')
    formCurso.addEventListener('submit', e =>{
        e.preventDefault()
        const datos = e.target
        const curso = new Curso(datos.nombreCurso.value, datos.imgPoster.value, datos.descripcionCurso.value, datos.cantClases.value)
        mostrarCurso(curso)
        formCurso.reset()        
    })

    //Imprimir en el DOM
    //Imprimir profesor   
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

    //Imprimir Alumno
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

    //Imprimir Curso
    const cursoPadre = document.getElementById('cardCurso')
    function mostrarCurso(curso){
        const hijoCurso = document.createElement('div')
        hijoCurso.classList.add('col', 's12', 'm6', 'l4')
        hijoCurso.innerHTML = `
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${curso.getPoster()}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${curso.getNombreCurso()}<i class="material-icons right">more_vert</i></span>
                <p>Cant de clases: ${curso.getCantClases()}</p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${curso.getNombreCurso()}<i class="material-icons right">close</i></span>
                <p>${curso.getDescripcion()}</p>
            </div>
        </div>
        `
        cursoPadre.appendChild(hijoCurso)
    }
    
});
import Usuario from "./Usuario.js"

export default class Alumno extends Usuario{
    constructor(nombres, apellidos, dni, edad, email, telefono, sexo, cursoInscrito){
        super(nombres, apellidos, dni, edad, email, telefono, sexo)
        this.cursoInscrito = cursoInscrito
    }

    getCursoInscrito() { return this.cursoInscrito }
    setCursoInscrito(cursoInscrito) { this.cursoInscrito = cursoInscrito }
}
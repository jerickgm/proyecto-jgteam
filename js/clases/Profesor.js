import Usuario from "./Usuario.js"

export default class Profesor extends Usuario{
    constructor(nombres, apellidos, dni, edad, email, telefono, sexo, cursoImpartido){
        super(nombres, apellidos, dni, edad, email, telefono, sexo)
        this.cursoImpartido = cursoImpartido
    }

    getCursoImpartido() { return this.cursoImpartido }
    setCursoImpartido(cursoImpartido) { this.cursoImpartido = cursoImpartido }
}
export default class Curso {
    constructor(nombreCurso, poster, descripcion, cantClases ){
        this.nombreCurso = nombreCurso,
        this.poster = poster,
        this.descripcion = descripcion,
        this.cantClases = cantClases,
        this.inscritos = []
    }

    getNombreCurso(){ return this.nombreCurso }
    getPoster(){ return this.poster }
    getDescripcion() { return this.descripcion }
    getCantClases(){ return this.cantClases }
    getInscritos(){ return this.inscritos }

    setNombreCurso(nombreCurso){ this.nombreCurso = nombreCurso }
    setPoster(poster){ this.poster = poster }
    setDescripcion(descripcion){ this.descripcion = descripcion }
    setCantClases(cantClases){ this.cantClases = cantClases }
    setInscritos(inscritos){ this.inscritos = inscritos }
}
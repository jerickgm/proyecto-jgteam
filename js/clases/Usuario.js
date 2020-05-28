export default class Usuario {

    constructor(nombres, apellidos, dni, edad, email, telefono, sexo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.dni = dni,
        this.edad = edad,
        this.email = email,
        this.telefono = telefono,
        this.sexo = sexo
    }

    getNombres(){ return this.nombres}
    getApellidos(){ return this.apellidos}
    getDni(){ return this.dni}
    getEdad(){ return this.edad}
    getEmail(){ return this.email}
    getTelefono(){ return this.telefono }
    getSexo(){ return this.sexo }

    setNombres(nombres){ this.nombres = nombres}
    setApellidos(apellidos){ this.apellidos = apellidos}
    setDni(dni){ this.dni = dni }
    setEdad(edad){ this.edad = edad }
    setEmail(email){ this.email = email }
    setTelefono(telefono){ this.telefono = telefono }
    setSexo(sexo){ this.sexo = sexo }
}
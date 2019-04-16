const persona = {
  altura: 180,
  edad: 40,
  nombre: "Juan",
 "nombre completo": "Juan Navaja"
}

console.log("Datos de la persona", persona)

console.log("Nombre = ", persona["nombre"] )

console.log("Edad = ", persona.edad )

console.log("Nombre completo = ",persona["nombre completo"])

console.log("Nombre completo = ",persona.nombreCompleto)

persona.peso = 80

console.log("Con nuevo dato", persona)

persona.experiencialaboral = {
trabajo: "BCP",
tiempo: "6 meses",

cargo: "Analista funcional"

}

console.log("con experiencia", persona)


console.log("Cargo = ", persona.experiencialaboral.cargo)

console.log("otra forma 01 = ",persona["experiencialaboral"].cargo)

console.log("otra forma 02 = ",persona["experiencialaboral"]["cargo"])

console.log("otra forma 03 = ",persona.experiencialaboral["cargo"])

delete persona.peso

console.log("Nueva persona = ", persona)




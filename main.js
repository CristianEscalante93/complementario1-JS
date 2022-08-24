// 3 ACERTIJOS

let respuesta1 = "pera"
let respuestaIngresada1 = prompt ("Blanca por dentro, verde por fuera. Si quieres te lo digo, espera.")

while (respuesta1 != respuestaIngresada1) {
    console.log("Respuesta incorrecta");
    respuestaIngresada1 = prompt ("Blanca por dentro, verde por fuera. Si quieres te lo digo, espera.")
}
console.log("Primer acertijo correcto");


let respuesta2 = "banana"
let respuestaIngresada2 = prompt ("Amarillo por fuera, blanco por dentro, tienes que pelarlo para comerlo.")

while (respuesta2 != respuestaIngresada2) {
    console.log("Respuesta incorrecta");
    respuestaIngresada2 = prompt ("Amarillo por fuera, blanco por dentro, tienes que pelarlo para comerlo.")
}
console.log("Segundo acertijo correcto");


let respuesta3= "tomate"
let respuestaIngresada3 = prompt ("No toma té, ni toma café, y está colorado,¿sabes quién es?")

while (respuesta3 != respuestaIngresada3) {
    console.log("Respuesta incorrecta");
    respuestaIngresada3 = prompt ("No toma té, ni toma café, y está colorado,¿sabes quién es?")
}
console.log("Tercer acertijo correcto \nFelicitaciones pasaste el reto de las 3 adivinanzas")

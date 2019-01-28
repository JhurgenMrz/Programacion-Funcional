const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = $('#description')
let carbs = $('#carbs')
let calories = $('#calories')
let protein = $('#protein')

// Object.assign({},"Objeto_a_copiar")  
// Esto es para copiar un objeto, 
// no la referencia sino el valor del objeto aunq solo sirve para un objeto de primer nivel
 
//JSON.parse() y JSON.stringify()  
// Esto funciona de la siguiente forma
//JSON.parse(JSON.stringify("OBJETO_A_COPIAR"))
//Ej. let new Car = JSON.parse(JSON.stringify(car))
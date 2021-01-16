

//  1) transformar en un array cada elemento del objeto
const data = {

    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana',
}

const entries = Object.entries(data)
console.log(entries)
/*
0: (2) ["frontend", "Oscar"]
1: (2) ["backend", "Isabel"]
2: (2) ["design", "Ana"]
*/

//Ahora si puedo saber cuantos elementos tengo
console.log(entries.length)



// 2) Obtener de un objeto los values y transformar a un array

const data2 = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana',
}

const values = Object.values(data2)
console.log(values)

//  RESPUESTA => ["Oscar", "Isabel", "Ana"]


// 3) pading


const string = 'hello'
console.log(string.padStart(7,'hi'))

console.log(string.padEnd(12, '-----'))




// Promesas con asyn y await

//https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/
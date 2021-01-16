//Con ec6 asignacion de variables directamente en el atributo
function newFucntion2(name = 'oscar', age = 32 , country = 'mx'){
    console.log(name, age, country)
}
newFucntion2()


// 1)Template literal
let hello = 'hello'
let world = 'world'
let prhaseEpic = `${hello} ${world}`
 console.log(prhaseEpic)


 // 2) multilineas
 let lorem2 = `Otra frase epica que necesitamos
 ahora es otra frase
 tercera frase` 

 console.log(lorem2)



 // 3) Desestructurar
 let person = {
     name : 'Oscar',
     edad : 32,
     country : 'MX'
 }

 // antes => console.log(person.name, person.edad)
 let {name, age, country} = person
 console.log(name)

 // 4) 
 let team1 = ['Oscar', 'Julian', 'Ricardo']
 let team2 = ['Valeria', 'Yesica', 'Camila']
 
 let education = ['David', ...team1, ...team2]

 console.log(education)


// 5) LET y CONST


// 6) LLave y valor el mismo nombre de la variable

let name2 = 'OScar'
let age2 = 32
let obj = { name2, age2}
console.log(obj)


// 7) arrow functions

const names = [
    { name : 'Oscar', age : 32 },
    { name : 'Yesica', age : 27 }
]

let listOfnames = names.map(function (item) {
    console.log(item.name)
})


let listOfnames2 = names.map( item => console.log( item.name ))
let listOfnames3 = names.map(({name}) =>console.log(name))



// 8 ) Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("hey todo bien!!")
        } else {
            reject('UPSS! Error')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))


    // 9 ) Clases

    class calculator{
         constructor() {
            this.valueA = 0
            this.valueB = 0
         }
         sum(valueA, valueB) {
            this.valueA = valueA
            this.valueB = valueB
            return this.valueA + this.valueB
         }


    }
    const calc = new calculator()
    console.log(calc.sum(2,3))


    // 10) import - export

    import { hellomessaje } from  './module.js';
    console.log(hellomessaje())
    


    // 11 ) Generators Yield

    function* helloWorld() {
        if (true) {
            yield 'hello, '
        }
        if (true) {
            yield 'World'
        }
    }

    const generatorHello = helloWorld()
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)
    


    // ES 7


    
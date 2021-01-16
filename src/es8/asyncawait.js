


const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=>resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
}
/*
const helloAsync  = async () => {
    let hello = await helloWorld()
    console.log(hello)
}

helloAsync()

*/


const anotherFunction = async () => {
    try {
        let hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}


anotherFunction()
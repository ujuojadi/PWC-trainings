//Data Types
let named = "child" //str
let age = 24 //int
let z = null //null
let y = undefined //undefined
let isMarried = true;
console.log(age);
console.log(named);
console.log(typeof(y))
console.log(typeof(isMarried))

let favColor = ['red', 'green', "yellow", "blue"]
let s = 'hello world'
console.log(s.toUpperCase())
console.log(s.length)

let m= 'i am'
let n = 'i go to Pwc bootcamp'
let p = 'i love to learn js'

console.log(m + 'jessica' + 'and' + n + p)
console.log(`${m} jessica and ${n} ${p}`)
console.error('this is an error');
console.warn('thus is a (warning)')
let fruits = ['apple', 'banana', 'grape']
fruits.push('coconut')
fruits.pop()
fruits.shift()
fruits.unshift('kiwi')
fruits[4]='mango'
console.log(fruits)

const person = {
    name:'marie',
    age: 12,
    height: 5.5,
    isMarried: false,
    general: function(){
        console.log('hello')
    }
}
console.log(person.name)


for(let i =0; i <10; i++){
    console.log(i)
}
for(let i =0; i<10; i+=2){
    console.log(i)
}

for(let i = 12; i<=19; i++){
    console.log(i)
}

for(let i = 12; i<=19; i++){
    console.log(`Number is ${i}`)
}

let i =0;
while(i<20){
    console.log(`Number is ${i}`)
    i++
}

// const x = 10;
// if(x===20){
//     console.log('x is 20')
// }else if(x===10) {
//     console.log('x is not 20')
// }else{
//     console.log('x is not 20 or 10')
//}

// const x = 80;
// if(x===90){
//     console.log('Excellent')
// }else if(x===80) {
//     console.log('Very Good')
// }
// else if(x===50) {
//         console.log('Average')
// }else if(x===30) {
//     console.log('Failed')
// }else{
//     console.log('You did not write the test')
// }

const x = 50;
if(x>=70){
    console.log('Distinction')
}else if(x>=60) {
    console.log('Very Good')
}
else if(x>=50) {
        console.log('Good')
}else if(x>=40) {
    console.log('Pass')
}else{
    console.log('You Failed')
}

for(let i =2; i<=20; i+=2){
    console.log(i)
}





// object literals


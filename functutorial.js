function addNum(a, b){
    return a + b
}

function subNum(a, b){
    return a - b
}
function divNum(a, b){
    return a / b
}
function multNum(a, b){
    return a * b
}

console.log(addNum(2,3))
console.log(subNum(2,3))
console.log(divNum(2,3))
console.log(multNum(2,3))

// const addNum= (a, b)=>{
//     return a + b
// }
 const sqNum = (n)=>{
        return n*n
 }

 console.log(sqNum(5))

 const moNum = (n)=>{
    return n%2 
}
console.log(moNum(20))

let someword = 'Adamu'
console.log(someword.split(''))

let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(someArray.reverse())

let randomString = 'this is my string'

function strToarray(n){
    return n.split('').reverse().join()
}
console.log(strToarray(randomString))

function isPalindrom(str){
    str.toUpperCase()
    let newStr = str.split("").reverse().join("")
    if(str === newStr){
        return true;
    }else{
        return false;
    }
}


console.log(isPalindrom('eve'))

// let ver = '15'
// ver = parseInt(ver)
// console.log(ver)


function inPalindrome(num){
    let numTostring = num.ToString()
    numTostring.split("").reverse().join("")
    {numTostring === num ? true : false}
}
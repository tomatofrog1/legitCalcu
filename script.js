const display = document.querySelector('.displayPanel')
const numFirst = document.querySelector('.firstNum')
const numSecond = document.querySelector('.secondNum')
const ope = document.querySelector('.ope')
const num1 = document.querySelector('#one')
const num2 = document.querySelector('#two')
const num3 = document.querySelector('#three')
const num4 = document.querySelector('#four')
const num5 = document.querySelector('#five')
const num6 = document.querySelector('#six')
const num7 = document.querySelector('#seven')
const num8 = document.querySelector('#eight')
const num9 = document.querySelector('#nine')
const num0 = document.querySelector('#zero')
const div = document.querySelector('#divide')
const multi = document.querySelector('#multiply')
const diff = document.querySelector('#minus')
const add = document.querySelector('#add')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const result = document.querySelector('.result')


let numFi = 0;
let numSec = 0;
let operator = "";
let isOperatorClicked = false;

let nums = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

for (let i = 0; i < 10; i++) {
    nums[i].addEventListener('click', function(){

        if(numFirst.textContent == "ERROR"){
            numFirst.textContent = ""
        } else if (isOperatorClicked == false){
            numFirst.textContent += i
        } else if (isOperatorClicked == true){
            numSecond.textContent += i
        }
        
    })
    
}

add.addEventListener('click', function(){
    ope.textContent = "+"
    isOperatorClicked = true
})

diff.addEventListener('click', function(){
    ope.textContent = "-"
    isOperatorClicked = true
})

div.addEventListener('click', function(){
    ope.textContent = "/"
    isOperatorClicked = true
})

multi.addEventListener('click', function(){
    ope.textContent = "*"
    isOperatorClicked = true
})


clear.addEventListener('click', function(){
    numFirst.textContent = ""
    numSecond.textContent = ""
    numFi = 0
    numSec = 0
    operator = ""
    ope.textContent = ""
    numFirst.style.display = 'block'
    numSecond.style.display = 'block'
    ope.style.display = 'block'
    result.style.display = 'none'
    result.textContent = ""


})

equals.addEventListener('click', function(){
    numFi = Number(numFirst.textContent);
    numSec = Number(numSecond.textContent);
    operator = ope.textContent
    // numFirst.style.display = 'none'
    // numSecond.style.display = 'none'
    // ope.style.display = 'none'
    result.style.display = 'block'  
    isOperatorClicked = false

    // result.textContent = numFi + numSec
    
    if (operator == "+"){
        numFirst.textContent = numFi + numSec
        
    } else if (operator == "-"){
        numFirst.textContent = numFi - numSec
    } else if (operator == "*"){
        numFirst.textContent = numFi * numSec
    } else if (operator == "/"){
        if (numSec == 0){
            numFirst.textContent = "ERROR"
        } else {
            numFirst.textContent = numFi / numSec
        }
        
    }

    operator = ""
    ope.textContent = ""
    numSecond.textContent = ""


})

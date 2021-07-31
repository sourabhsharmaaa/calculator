let keys = document.querySelector('.keys')
let display = document.querySelector('.display')
let calculator = document.querySelector('.calculator')
// let operator = document.querySelectorAll('.operator')

keys.addEventListener('click', (event) =>{
    let key = event.target                     //target element
    let keyValue= key.textContent              //text written inside the key element
    let dispValue = display.textContent        //text written on display panel4
    let {type} = key.dataset
    let { previousKeyType } = calculator.dataset   //object destructuring
    // if(keyValue == operator.textContent){
    //     output.textContent = ''
    // }
    // else{
    //     output.textContent = keyValue
    // }

    // Is this a number key?
    if(type === 'number'){      //if the targeted elements have class "number" then {do this}
        if(dispValue === '0'){
            display.textContent = keyValue
        }
        else if(previousKeyType === 'operator'){  //"previousKeyType" can also be written as "calculator.dataset.previousKeyType"
            display.textContent = keyValue
        }
        else if(previousKeyType === 'equal'){
            display.textContent = keyValue
        } 
        else{
            display.textContent = dispValue + keyValue
        }
    }

    // Is this an operator key?

    if(type === 'operator'){    //if the targeted elements have class "operator" then {do this}
        let operatorKeys = document.querySelectorAll('[data-type = "operator"]')
        operatorKeys.forEach(el => {el.dataset.state = ''})
    
        key.dataset.state = 'selected'
        calculator.dataset.firstNumber = dispValue
        calculator.dataset.operator = key.dataset.key
    }

    if(type === 'equal'){
        let firstNumber = calculator.dataset.firstNumber
        let operator  = calculator.dataset.operator
        let secondNumber = dispValue

        if(operator === 'plus'){
         display.textContent = parseInt(firstNumber) + parseInt(secondNumber)    
        }
        if(operator === 'minus'){
            display.textContent = parseInt(firstNumber) - parseInt(secondNumber)    
         }
        if(operator === 'times'){
            display.textContent = parseInt(firstNumber) * parseInt(secondNumber)    
        }
        if(operator === 'divide'){
            display.textContent = parseInt(firstNumber) / parseInt(secondNumber)    
        }
        // console.log(firstNumber, operator, secondNumber)
    }

    if(type === 'clear'){
        console.log(key)
        display.textContent = ''
    }
   
    calculator.dataset.previousKeyType = type
        
})
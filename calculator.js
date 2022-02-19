document.getElementById('calculator').addEventListener('click', function(event){
    // console.log(event.target.innerText)
    if(isNaN(event.target.innerText) != true){
        const calcInput = getInput()
        let calcInputValue = calcInput.value
        calcInput.value = calcInputValue + event.target.innerText
    }
})

function clearField(){
    const calcInput = getInput()
    calcInput.value = ''
}

// get input value 
function getInput(){
    const calcInput = document.getElementById('calc-input')
    return calcInput
}

// clearPreviousValue
function clearPreviousValue(){
    const calcInput = getInput()
    let calcInputValue = calcInput.value
    calcInput.value -= calcInputValue 
}

// get calc symbol 
function getCalcSymbol(fieldId){
    const field = document.getElementById(fieldId).innerText
    return field
}

document.getElementById('division').addEventListener('click', function(){
    const calcInput = getInput()
    calcInput.value += getCalcSymbol('division')
})
document.getElementById('maltiply').addEventListener('click', function(){
    const calcInput = getInput()
    calcInput.value += getCalcSymbol('maltiply')
})
document.getElementById('addition').addEventListener('click', function(){
    const calcInput = getInput()
    calcInput.value += getCalcSymbol('addition')
})
document.getElementById('subtraction').addEventListener('click', function(){
    const calcInput = getInput()
    calcInput.value += getCalcSymbol('subtraction')
})
document.getElementById('dot').addEventListener('click', function(){
    const calcInput = getInput()
    calcInput.value += getCalcSymbol('dot')
})
document.getElementById('result').addEventListener('click', function(){
    const calcInput = getInput()
    let calcInputValue = calcInput.value
    const resul = eval(calcInputValue)
    calcInput.value = resul
})
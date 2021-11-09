$(".first").on("click", () => {
    $("body").removeClass()
    $("body").toggleClass("first-theme")
})

$(".second").on("click", () => {
    $("body").removeClass()
    $("body").toggleClass("second-theme")
})

$(".third").on("click", () => {
    $("body").removeClass()
    $("body").toggleClass("third-theme")
})

$(document).ready(() => {
    var result = 0
    var prevEnt = 0
    var operation = null
    var currentEnt = '0'
    updateScreen(result)

    $('.key').on('click',
    function(evt) {
        var buttonPressed = $(this).html()
        
        if (buttonPressed === "reset") {
            result = 0
            currentEnt = '0'
        } else if (buttonPressed === "del") {
            currentEnt = currentEnt.substring(0, currentEnt.length-1)
        } else if (buttonPressed === ".") {
            currentEnt += "."
        } else if (isNumber(buttonPressed)) {
            if (currentEnt === '0') {
                currentEnt = buttonPressed
            } else {
                currentEnt = currentEnt + buttonPressed
            }
        } else if (isOperator(buttonPressed)) {
            prevEnt = parseFloat(currentEnt)
            operation = buttonPressed
            currentEnt = ''
        } else if (buttonPressed === '=') {
            currentEnt = operate(prevEnt, currentEnt, operation)
            operation = null
        }

        updateScreen(currentEnt)
    })
})

updateScreen = function(dispValue) {
    var dispValue = dispValue.toString()
    $('.display').html(dispValue.substring(0, 10))
} 

isNumber = function(value) {
    return !isNaN(value)
}

isOperator = function(value) {
    return value === '/' || value === 'x' || value === '+' || value === '-'
}

operate = function(x, y, operator) {
    x = parseFloat(x)
    y = parseFloat(y)
    
    if(operator === '+') return x + y
    if(operator === '-') return x - y
    if(operator === 'x') return x * y
    if(operator === '/') return x / y
}
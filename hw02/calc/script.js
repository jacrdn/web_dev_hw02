// a class to represent the calculator
class Calc {

    // takes in the storedNumber CurrentNumber and chosenOperations' text elements
    constructor(strNumTE, currNumTE, choseOpTE) {
        this.strNumTE = strNumTE
        this.currNumTE = currNumTE
        this.choseOpTE = choseOpTE
        this.strNum = '0'
        this.currNum = '0'
        this.op = ""
    }

    // displays/updates the text changes based on the stored number, 
    // the operation and the current number being worked on
    disp() {
	"use strict";
        this.strNumTE.innerText = this.strNum
        this.currNumTE.innerText = this.currNum
        this.choseOpTE.innerText = this.op
    }

    // clears the calculator
    clear() {
	"use strict";
        this.strNum = "0"
        this.currNum = "0"
        this.op = ""
        this.disp()
    }

    // computes the equation using the equal sign
    equal() {
	"use strict";
        if(this.op === "+") {
            this.currNum = parseFloat(this.currNum) + parseFloat(this.strNum)
        } else if (this.op === "-") {
            this.currNum = parseFloat(this.strNum) - parseFloat(this.currNum)
        } else if (this.op === "/") {
            this.currNum = parseFloat(this.strNum) / parseFloat(this.currNum)
        } else if (this.op === "x") {
            this.currNum = parseFloat(this.strNum) * parseFloat(this.currNum)
        }
        this.op = ""
        this.strNum = ""
        this.disp()
    }

    // sets the operation "+", "-", "x", "/"
    setOp(o) {
	"use strict";
        if(this.op === "") {
            this.strNum = this.currNum
            this.currNum = ""
            this.op = o
        } else if(this.op !== o) {
            this.op = o
        }
        this.disp()
    }

    add() {
	"use strict";
        this.setOp("+")
    }

    divide() {
	"use strict";
        this.setOp("/")
    }

    multiply() {
	"use strict";
        this.setOp("x")
    }

    minus() {
	"use strict";
        this.setOp("-")
    }

    // appends a number or . and then displays it
    appendNum(num) {
	"use strict";
        if (this.currNumTE.innerText === "0") {
            this.currNum = num.toString()
        } else if (!(this.currNumTE.innerText.toString().includes(".") && num === ".")) {
            this.currNum = this.currNum.toString() + num.toString()
        }
        this.disp()
    }

}

// setting the buttons as constants
const numButtons = document.querySelectorAll('#num')
const addButton = document.querySelector('#add')
const strNumTE = document.querySelector('#str-num')
const currNumTE = document.querySelector('#curr-num')
const choseOpTE = document.querySelector('#op')
const eqButton = document.querySelector('#eq')
const clearButton = document.querySelector('#clear')
const minusButton = document.querySelector('#minus')
const multButton = document.querySelector('#multiply')
const divButton = document.querySelector('#divide')

const calc = new Calc(strNumTE, currNumTE, choseOpTE)



numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNum(button.innerText)
    })
})

clearButton.addEventListener('click', () => {
    calc.clear()
})

addButton.addEventListener('click', () => {
    calc.add()
})

minusButton.addEventListener('click', () => {
    calc.minus()
})

divButton.addEventListener('click', () => {
    calc.divide()
})

multButton.addEventListener('click', () => {
    calc.multiply()
})

eqButton.addEventListener('click', () => {
    calc.equal()
})

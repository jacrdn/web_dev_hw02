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

// doing the numbers one at a time for style pts
const b1 = document.querySelector('#num1')
const b2 = document.querySelector('#num2')
const b3 = document.querySelector('#num3')
const b4 = document.querySelector('#num4')
const b5 = document.querySelector('#num5')
const b6 = document.querySelector('#num6')
const b7 = document.querySelector('#num7')
const b8 = document.querySelector('#num8')
const b9 = document.querySelector('#num9')
const b0 = document.querySelector('#num0')
const bDot = document.querySelector('#num-dot')

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

// doing the numbers one at a time for style pts
b1.addEventListener('click', () => {calc.appendNum("1")})
b2.addEventListener('click', () => {calc.appendNum("2")})
b3.addEventListener('click', () => {calc.appendNum("3")})
b4.addEventListener('click', () => {calc.appendNum("4")})
b5.addEventListener('click', () => {calc.appendNum("5")})
b6.addEventListener('click', () => {calc.appendNum("6")})
b7.addEventListener('click', () => {calc.appendNum("7")})
b8.addEventListener('click', () => {calc.appendNum("8")})
b9.addEventListener('click', () => {calc.appendNum("9")})
b0.addEventListener('click', () => {calc.appendNum("0")})
bDot.addEventListener('click', () => {calc.appendNum(".")})

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

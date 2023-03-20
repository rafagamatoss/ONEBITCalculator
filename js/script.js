const previousOperationText = document.querySelector('#previous-op')
const currentOperationText = document.querySelector('#current-op')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }

    //adiciionando o digito na tela da calculadora
    addDigit(digit){
        this.currentOperation = digit
        this.updateScreen()

    }

    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const value = e.target.innerText
        if(+value >= 0 || value === '.'){
            calc.addDigit(value)
            console.log(value)
        }else{
            console.log('operação')
        }
    })
})
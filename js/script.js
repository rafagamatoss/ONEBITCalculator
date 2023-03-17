const previousOperationText = document.querySelector('#previous-op')
const currentOperationText = document.querySelector('#current-op')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator{

}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        console.log(value)
    })
})
const state = {
    displayNumber: 'Result',
};

const updateDisplay = () => {
    document.querySelector('#display').innerText = state.displayNumber
}

const buttons = document.querySelectorAll('.box')
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '=':
                try{
                let result = eval(state.displayNumber)
                state.displayNumber = result
                }catch(error){
                    state.displayNumber = 'NaN, coba lagi'
                    setTimeout(() => {
                        state.displayNumber = 'Result'
                        updateDisplay()
                    }, 2000)
                }
                
            updateDisplay()
            break;
            case 'C':
            state.displayNumber = 'Result'
            updateDisplay()
            break
            default:
                if(state.displayNumber === 'Result'){
                    state.displayNumber = e.target.innerText
                } else {
                    state.displayNumber += e.target.innerText
                }
                updateDisplay()
        }
    })
}

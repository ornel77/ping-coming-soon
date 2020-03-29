const button = document.querySelector('button')
const form = document.querySelector('form')

const errMsg = document.querySelector('.err-msg')
const inputField = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = inputField.value
    
    let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if(inputValue === '' ||  !mailRegex.test(inputValue))  {
        errMsg.style.display = 'block'
        inputField.style.border = '1px solid red'
    } else {
        errMsg.style.display = 'none'
        inputField.style.border = '1px solid var(--pale-blue)'
    }
})
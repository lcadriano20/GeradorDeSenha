// SELEÇÃO DE ELEMENTOS 
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector('#generated-password')
const openGeneratePasswordBtn = document.querySelector('#open-generate-password')

const generateOptions = document.querySelector('#generate-options')

const lengthInput  = document.querySelector('#length')
const lettersInput = document.querySelector('#letters')
const numbersInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')
const copyPasswordButton = document.querySelector('#copy-password')



// FUNÇÕES 
function getLetterLowerCase() {
    return (String.fromCharCode(Math.floor(Math.random() * 26)+97));
}
function getLetterUpperCase() {
    return (String.fromCharCode(Math.floor(Math.random() * 26)+65));
}
function getNumber() {
    return Math.floor(Math.random() *10).toString()
}
function getSymbol() {
    const symbols = "(){}[]=<>/,.!@#$%&*+-"

    return symbols[Math.floor(Math.random()* symbols.length)]
}
function generatePassword(getLetterLowerCase,getLetterUpperCase,getNumber,getNumber,getSymbol) {


    let password = ""


    const passwordLength = +lengthInput.value

    const generators = []

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase,getLetterUpperCase)
    }
    
    if (numbersInput.checked) {
        generators.push(getNumber)
    }
    
    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }
    if (generators.length === 0) {
        return;
    }
    for(i=0; i<passwordLength; i += generators.length) {
        generators.forEach(()=>{
            const randomValue = generators[Math.floor(Math.random()*generators.length)]()

            password += randomValue
        })
    }  
    password = password.slice(0,passwordLength)
 
    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
    
}
function showOptions() {

    generateOptions.classList.toggle('hide')
}
function copyPassword() {
    window.location.h
}

// EVENTOS
generatePasswordButton.addEventListener('click',() =>{
    generatePassword(getLetterLowerCase,getLetterUpperCase,getNumber,getNumber,getSymbol)
})
openGeneratePasswordBtn.addEventListener('click',showOptions)

copyPasswordButton.addEventListener('click',(e) =>{
    e.preventDefault()

    const password = generatedPasswordElement.querySelector('h4').innerText

    navigator.clipboard.writeText(password).then(()=>{
        copyPasswordButton.innerText = 'Copiado!'

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 1000);
    })
    
})



let form = document.getElementById('form-sec')
let button = document.getElementById('sign')
let inputContainer = null;
let passwordContainer = null;

button.addEventListener('click' , function(event){
    event.preventDefault()

    if(inputContainer && passwordContainer){
        inputContainer.remove() 
        passwordContainer.remove()
        inputContainer = null;
        passwordContainer = null;
        return;
    }
//creatin the div
inputContainer = document.createElement('div')
inputContainer.classList.add('input-container')

const label = document.createElement('label')
label.setAttribute('for', 'Fullname')
label.textContent='Fullname'

//CREATE input field
const input = document.createElement('input')
input.id = 'Fullname';
input.type  = 'text'
input.placeholder = "enter your Full name";

// Create the error message span
const errorSpan = document.createElement('span');
errorSpan.id = 'name-error';


inputContainer.appendChild(label)
inputContainer.appendChild(input)
inputContainer.appendChild(errorSpan)

const emailfield = document.getElementById('email').parentNode
form.insertBefore(inputContainer,emailfield)


//input 2 for confrim password

passwordContainer = document.createElement('div')
passwordContainer.classList.add('input-container')

//confirm password label
const passwordLabel = document.createElement('label')
passwordLabel.setAttribute('for', 'confirm-password')
passwordLabel.textContent = 'confrim Password'

//confrm you password
const confrimpasswordInput = document.createElement('input')
confrimpasswordInput.id = 'confirm-password'
confrimpasswordInput.type = 'password'
confrimpasswordInput.placeholder = 'retype password'

//confirm password sapn section
const confirmPassworSpan = document.createElement('span')
confirmPassworSpan.id = 'confirm-password-error'

passwordContainer.appendChild(passwordLabel)
passwordContainer.appendChild(confrimpasswordInput)
passwordContainer.appendChild(confirmPassworSpan)


const passwordField = document.getElementById('password').parentNode
passwordField.insertAdjacentElement('afterend',passwordContainer)



let header = document.querySelector('h1')
header.innerText = 'Sign up'

button.innerText = 'Sign in'

})



let submit = document.getElementById('submit')
submit.addEventListener('click', function(e){
    e.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')
    
    let emailerror = document.getElementById('email-error')
    let passworderror = document.getElementById('password-error')


    emailerror.textContent = ''
    passworderror.textContent = ''

    let valid = true;
    if (email.value == ' ' || password.value === '') {
        emailerror.innerText = 'empty field'
        passworderror.innerText = 'empty field'
        return;
    }

    if (!email.value.includes('@') || !email.value.includes('.') || email.value.indexOf('@') === 0 || email.value.lastIndexOf('.')< email.value.indexOf('@')) {
        emailerror.innerText = 'invalid format'
        valid = false ;
        
    }
    if(password.value.length < 6){
        passworderror.innerText = 'pasword must be 6 charachter long'
        valid = false

    }
    if(valid){
        alert( `succesfully submitted`)
        form.reset()
    }


})

let signbutton = document.getElementById('signup-bottom')
let signbutton2 = document.getElementById('signup-bottom2')

signbutton.addEventListener('click', function(){
    alert(`currently under development`)

})

signbutton2.addEventListener('click', function(){
    alert(`currently under development`)
    
})
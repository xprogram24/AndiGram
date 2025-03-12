

let form = document.getElementById('form-sec')
let button = document.getElementById('sign')
let submitButton = document.getElementById('submit');
let inputContainer = null;
let passwordContainer = null;
//admin email
let usersEmail =  'test@gmail.com'
let userPassword =  'test123'
//
let islogin = true;

button.addEventListener('click' , function(event){
    event.preventDefault()

    if(islogin){
        //switch to signup mode
        islogin = false

        //removes extra fields
        if(inputContainer && passwordContainer){
            inputContainer.remove() 
            passwordContainer.remove()
           
          
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
submitButton.value = 'Sign Up'
header.innerText = 'Sign up'
button.innerText = 'Sign in'
}

else{
    //switching back to login mode
    islogin = true;

    if(inputContainer && passwordContainer){
        inputContainer.remove() 
        passwordContainer.remove()
     
    }
    let header = document.querySelector('h1')
    submitButton.value = 'Sign in'
    header.innerText = 'Sign in'
    button.innerText = 'Sign up'

}
})

//subit login validation

submitButton.addEventListener('click', function(e){
    e.preventDefault()

    let email = document.getElementById('email')
    let password = document.getElementById('password')
    
    let emailerror = document.getElementById('email-error')
    let passworderror = document.getElementById('password-error')

//ensure the error message is empty
    emailerror.textContent = ''
    passworderror.textContent = ''
//form validation logic
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
    if(islogin){
       //handle login 
       let storedUser = JSON.parse(localStorage.getItem(email.value))
        if (storedUser && storedUser.password == password.value || password.value == userPassword && email.value == usersEmail) {
            
           window.location.href = "maindashboard/dashboard.html";
          
        }
         else{
            alert(`invalid password or email`) 
        }
       
    }

    else{
        //handle user signup
        let nameInput =  document.getElementById('Fullname');
        let confirmPassworinput = document.getElementById('confirm-password')
        let nameError = document.getElementById('name-error')
        let confrimpasswordError = document.getElementById('confirm-password-error')

        nameError.textContent = ''
        confrimpasswordError.textContent = ''

        if (!nameInput.value){
            nameError.innerText  = 'name is required'
            valid = false; 
        }
        if(password.value !== confirmPassworinput.value){
            confrimpasswordError.innerText = 'does not match'
            valid= false
        }

        if (valid){
            if(localStorage.getItem(email.value)){
                alert('user already exists')
            }
            else{
                //stored as an object
               let newUser = {
                name: nameInput.value,
                email: email.value,
                password : password.value
               };

               localStorage.setItem(email.value, JSON.stringify(newUser))
               alert('signup sucessful')

               //switch back to login
               islogin = true
               document.querySelector('h1').innerText = 'Login';
               submitButton.innerText = 'Login';
               button.innerText = 'Sign Up';

               if (inputContainer && passwordContainer) {
                    inputContainer.remove();
                    passwordContainer.remove();
              }

            }
        }
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




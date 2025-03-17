let form = document.getElementById('form-sec');
let forgotpassword = document.getElementById('reset-password');
let otpbutton = document.getElementById('submit-button')
let forgotemail = document.getElementById('forgotemail');
let labelemail = document.querySelector('label[for="forgotemail"]'); // Get the correct label
let emailerror = document.getElementById('forgotemail-error');
let p = document.querySelector('.dont-forgotemail'); // Get the first matching element
let otpcontainer  =null;
forgotpassword.addEventListener('click', function(e) {
    e.preventDefault();

    

    emailerror.textContent = '';
    let valid = true;

    if (forgotemail.value === "") {
        emailerror.innerText = 'Empty field';
        return;
    }

    if (!forgotemail.value.includes('@') || 
        !forgotemail.value.includes('.') || 
        forgotemail.value.indexOf('@') === 0 || 
        forgotemail.value.lastIndexOf('.') < forgotemail.value.indexOf('@')) {
        
<<<<<<< HEAD
        emailerror.innerText = 'Invalid email format';
        valid = false;
    }

    if (valid) {
    // Remove existing elements
    forgotemail.remove();
    emailerror.remove();
    if (labelemail) labelemail.remove();

    // Change heading text
    let h1 = document.querySelector('h1');
    h1.innerText = 'Reset OTP';

    let p1 = document.getElementById('p1');
    p1.innerText = 'Your OTP has been sent to ' + forgotemail.value;

    forgotpassword.value = 'continue'

    // Check if form and forgotpassword exist
    console.log(form);  // Debugging
    console.log(forgotpassword);  // Debugging

    if (!form || !forgotpassword) {
        console.error("Form or forgotpassword button not found!");
        return;
    }

    // Create OTP container
   

    if (otpcontainer) {
        otpcontainer.remove()
=======

        emailerror.innerText = 'Invalid email format';
        valid = false;
    }
   
   

    if (valid) {
    // Remove existing elements
    forgotemail.remove();
    emailerror.remove();
    if (labelemail) labelemail.remove();

    // Change heading text
    let h1 = document.querySelector('h1');
    h1.innerText = 'Reset OTP';

    let p1 = document.getElementById('p1');
    p1.innerText = 'Your OTP has been sent to ' + forgotemail.value;

    forgotpassword.value = 'continue'

    // Check if form and forgotpassword exist
    console.log(form);  // Debugging
    console.log(forgotpassword);  // Debugging

    if (!form || !forgotpassword) {
        console.error("Form or forgotpassword button not found!");
        return;
    }

    // Create OTP container
   

    if (otpcontainer) {
        otpcontainer.remove()
    
    }
    otpcontainer = document.createElement('div')
    otpcontainer.classList.add('otpfield');

    // Generate 4 OTP inputs
    for (let i = 0; i < 4; i++) {
        let input = document.createElement('input');
        input.id = 'otp' + i;
        input.type = 'text';
        input.placeholder = '*';
        input.setAttribute('maxlength', '1');
        input.classList.add('otpfield-input');

        otpcontainer.appendChild(input);
    }
    
    form.appendChild(otpcontainer)
    // Insert OTP container before the button
    form.insertBefore(otpcontainer, otpbutton);

    // add the otp validation
    let otpvalue = '1234'
>>>>>>> new-function
    
    }
    otpcontainer = document.createElement('div')
    otpcontainer.classList.add('otpfield');

<<<<<<< HEAD
    // Generate 4 OTP inputs
    for (let i = 0; i < 4; i++) {
        let input = document.createElement('input');
        input.id = 'otp' + i;
        input.type = 'text';
        input.placeholder = '*';
        input.setAttribute('maxlength', '1');
        input.classList.add('otpfield-input');

        otpcontainer.appendChild(input);
    }
    
    form.appendChild(otpcontainer)
    // Insert OTP container before the button
    form.insertBefore(otpcontainer, otpbutton);

    // add the otp validation

    
=======
    
>>>>>>> new-function
}


});

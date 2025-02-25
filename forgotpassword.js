let form = document.getElementById('form-sec');
let forgotpassword = document.getElementById('reset-password');
let forgotemail = document.getElementById('forgotemail');
let labelemail = document.querySelector('label[for="forgotemail"]'); // Get the correct label
let emailerror = document.getElementById('forgotemail-error');
let p = document.querySelector('.dont-forgotemail'); // Get the first matching element

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
        
        emailerror.innerText = 'Invalid email format';
        valid = false;
    }

    if (valid) {
        // Remove existing elements
        forgotpassword.remove();
        forgotemail.remove();
        emailerror.remove();
        if (labelemail) labelemail.remove();
        
        // Create OTP container once
        let otpcontainer = document.createElement('div');
        otpcontainer.classList.add('otpfield');

        for (let i = 0; i < 4; i++) {
            let input = document.createElement('input');
            input.id = 'otp' + i;
            input.type = 'number';
            input.placeholder = '*';
            input.setAttribute('maxlength', '1');

            input.classList.add('otpfield-input');

            otpcontainer.appendChild(input);
        }

        // Insert OTP container before the paragraph
        form.insertBefore(otpcontainer, p);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            // If validation fails, prevent form submission
            event.preventDefault();
        }
    });

    // Age validation
    const birthdate = form.querySelector('#birthdate');
    const today = new Date();
    const minAge = 18; 
    const minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

    birthdate.addEventListener('change', function () {
        const selectedDate = new Date(birthdate.value);
        if (selectedDate > minDate) {
            birthdate.setCustomValidity('Πρέπει να είστε τουλάχιστον ' + minAge + ' ετών.');
        } else {
            birthdate.setCustomValidity('');
        }
    });

    // Event listeners for password field
    const password = form.querySelector('#password');
    password.addEventListener('input', function () {
        validatePassword();
    });
    password.addEventListener('blur', function () {
        validatePassword();
    });

    // Event listeners for confirm password field
    const confirmPassword = form.querySelector('#confirmPassword');
    confirmPassword.addEventListener('input', function () {
        validateConfirmPassword();
    });
    confirmPassword.addEventListener('blur', function () {
        validateConfirmPassword();
    });

});

function validateForm() {
    const form = document.getElementById('registrationForm');

    // Apply validation rules using the Constraint Validation API
    if (!form.checkValidity()) {
        // If the form is not valid, display error messages
        form.reportValidity();
        return false;
    }

    // Password matching validation
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirmPassword');

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Οι κωδικοί πρόσβασης δεν ταιριάζουνasd');
        return false;
    } else {
        confirmPassword.setCustomValidity('');
    }

    // Password length validation
    if (password.value.length < 8) {
        password.setCustomValidity('Ο κωδικός πρέπει να περιλαμβάνει τουλάχιστον 8 χαρακτήρες.');
        return false;
    } else {
        password.setCustomValidity('');
    }


    return true;
}

function validatePassword() {
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    if (password.value.length < 8) {
        passwordError.textContent = '*Ο κωδικός πρέπει να περιλαμβάνει τουλάχιστον 8 χαρακτήρες.';
    } else {
        passwordError.textContent = '';
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = '*Οι κωδικοί πρόσβασης δεν ταιριάζουν';
    } else {
        confirmPasswordError.textContent = '';
    }
}

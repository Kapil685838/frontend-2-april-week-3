// Form Elements
const form = document.getElementById('form');
const emailEl = document.getElementById('user-email');
const passwordEl = document.getElementById('user-password');
const errMsgs = document.querySelectorAll('.error-msg');
const successMsg = document.querySelector('.success-msg');

const userData = {
    email: "",
    password: ""
}

const validation = {
    email: false,
    password: false,
}

// Check Email Function
emailEl.addEventListener('input', (event) => {
    userData.email = event.target.value;
    handleValidation();
})

// Check Password Function
passwordEl.addEventListener('input', (event) => {
    userData.password = event.target.value;
    handleValidation();
})

// Handle Validation
const handleValidation = () => {
    if (userData.email.length > 3 && userData.email.includes('@') && userData.email.includes('.')) {
        errMsgs[0].classList.add('hide');
        validation.email = true;
    } else {
        errMsgs[0].classList.remove('hide');
        validation.email = false;
    }

    if (userData.password.length > 8) {
        errMsgs[1].classList.add('hide');
        validation.password = true;
    } else {
        errMsgs[1].classList.remove('hide');
        validation.password = false;
    }

    if (validation.email && validation.password) {
        successMsg.classList.remove('hide');
    } else {
        successMsg.classList.add('hide');
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!userData.email) {
        alert('Please enter an Email address');
        return;
    }

    if (!validation.email) {
        alert('Please enter a valid email');
        return;
    }

    if (!userData.password) {
        alert('Please enter a password');
        return;
    }

    if (!validation.password) {
        alert('Please enter a valid password');
        return;
    }

    if (confirm('Are you sure you want to Submit?')) {
        alert("successful signup!");
    } else {
        return;
    }

    userData.email = ""
    userData.password = "";
    validation.email = false;
    validation.password = false;
    form.reset();
    handleValidation();
})






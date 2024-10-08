import { fancyHtml, fancyText } from '../modal/modalText.js';

function contactForm() { 
    const form = document.getElementById('form');
     
    // avoid error in console on the other pages
    if (form) {
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);
        console.log(formData)

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('phpmailer/sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();

                form.reset();
                form.classList.remove('_sending');
                fancyHtml(fancyText.successSend);
            } else {
                fancyHtml(fancyText.errorSend);
                form.classList.remove('_sending');
            }
        } else {
            fancyHtml(fancyText.requiredFields)
        }
    }

}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let i=0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}


function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) { 
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


}

contactForm()
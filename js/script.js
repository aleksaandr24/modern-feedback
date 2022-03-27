"use strict";

const phoneInput = document.querySelector('.phone-input');
const phonePlaceholder = document.querySelector('.phone-placeholder');

phoneInput.addEventListener('input', (e) => {
    let inputMask = 'XXX-XXX-XXXX';
    let inputText = e.target.value;
    let inputTextNew = inputText + inputMask.substring(inputText.length, 12);
    phonePlaceholder.innerHTML = inputTextNew;
});

function validateForm() {
    
    let requiredFields = ['theme', 'e-mail', 'name', 'question'];
    let form = document.forms[1];
    let i, j
    let flag = true;

    for (j = 0; j < requiredFields.length; j++) {
        for (i = 0; i < form.length; i++) {
            form.elements[i].style.outline = 'none';
            form.elements[i].style.color = 'initial';
        }
    }

    for (j = 0; j < requiredFields.length; j++) {
        for (i = 0; i < form.length; i++) {
            if ((form.elements[i].name === requiredFields[j]) && (form.elements[i].value === '')) {
                form.elements[i].style.outline = '1px solid red';
                form.elements[i].style.color = 'red';
                flag = false;
            }
        }
    }

    if (flag === true) {
        sendAjaxForm('form-feedback', 'action_form.php');
    } 
        
    return false;
}

function sendAjaxForm(form, url) {
    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        data: $('#'+form).serialize(),
        success: function() {
            let popup_id = $('.popup-container');
            $(popup_id).show(0).delay(3000).hide(0);
            $('body').click(function() {
                $(popup_id).hide();
            });
            $('.popup-close').click(function() {
                $(popup_id).hide();
            });
            console.log('Form sended');
        },
        error: function() {
            console.log('Form sending error');
        }
    });
}
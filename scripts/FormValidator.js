class FormValidator {
    constructor(validationConfig, artist) {
        this.validationConfig = validationConfig;
    }

    _checkInputValidity(form, input, config) {
        if (!input.validity.valid) {
            showError(form, input, config);
        } else {
            hideError(form, input, config);
        }
    }

    _setButtonState(button, isActive, config) {
        if (isActive) {
            button.classList.remove(config.buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(config.buttonInvalidClass);
            button.disabled = true;
        }
    }

    _setEventListeners(form, config) {
        const inputsList = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);

        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(form, input, config);
                setButtonState(submitButton, form.checkValidity(), config);
            });
        });
    }

    enableValidation(config) {
        const forms = document.querySelectorAll(config.formSelector);
        forms.forEach((form) => {
            setEventListeners(form, config);

            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });

            const submitButton = form.querySelector(config.submitButtonSelector);
            setButtonState(submitButton, form.checkValidity(), config)
        });
    }

}

function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputInvalidClass);
}

/////////////////////////////////////////////////////////////////////////////////////
function resetValidationState(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    inputsList.forEach((input) => {
        hideError(form, input, config);
    });
    const submitButton = form.querySelector(config.submitButtonSelector);
    submitButton.classList.add(config.buttonInvalidClass);
    submitButton.disabled = true;
}
///////////////////////////////////////////////////////////////////////////////

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputInvalidClass: 'popup__input_state_invalid',
    buttonInvalidClass: 'popup__save-button_invalid',
};

enableValidation(validationConfig);
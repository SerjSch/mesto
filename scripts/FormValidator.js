export class FormValidator {
    constructor(form, validationConfig) {
        this._form = form;
        this._validationConfig = validationConfig;
    }
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            showError(this._form, input, this._config);
        } else {
            hideError(this._form, input, this._config);
        }
    }
    _setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this._config.buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.buttonInvalidClass);
            button.disabled = true;
        }
    }
    _setEventListeners() {
        const inputsList = this._form.querySelectorAll(this._config.inputSelector);
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);

        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(this._form, input, this._config);
                setButtonState(submitButton, this._form.checkValidity(), this._config);
            });
        });
    }
    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalidClass);
    }
    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalidClass);
    }
    enableValidation() {
        this._setEventListeners(this._form, this._config);
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);
        this._setButtonState(submitButton, this._form.checkValidity(), this._config);
    }
    resetValidationState() {
        const inputsList = this._form.querySelectorAll(this._config.inputSelector);
        inputsList.forEach((input) => {
            hideError(this._form, input, this._config);
        });
        const submitButton = this._form.querySelector(this._config.submitButtonSelector);
        submitButton.classList.add(this._config.buttonInvalidClass);
        submitButton.disabled = true;
    }
}
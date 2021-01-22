export class FormValidator {
    constructor(form, validationConfig) {
        this._form = form;
        this._config = validationConfig;
        this._inputsList = this._form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }
    _checkInputValidity(_form, input, _config) {
        if (!input.validity.valid) {
            this._showError(this._form, input, this._config);
        } else {
            this._hideError(this._form, input, this._config);
        }
    }
    _setButtonState(button, isActive, _config) {
        if (isActive) {
            button.classList.remove(this._config.buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.buttonInvalidClass);
            button.disabled = true;
        }
    }
    _setEventListeners() {
        this._inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(this._form, input, this._config);
                this._setButtonState(this._submitButton, this._form.checkValidity(), this._config);
            });
        });
    }
    _showError(_form, input, _config) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalidClass);
    }
    _hideError(_form, input, _config) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalidClass);
    }
    enableValidation() {
        this._setEventListeners(this._form, this._config);
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setButtonState(this._submitButton, this._form.checkValidity(), this._config);
    }
    resetValidationState() {
        this._inputsList.forEach((input) => {
            this._hideError(this._form, input, this._config);
        });
        this._submitButton.classList.add(this._config.buttonInvalidClass);
        this._submitButton.disabled = true;
    }
}

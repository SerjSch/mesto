import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this.popupSelector = popupSelector;
        this.submitForm = submitForm;
    }
    open() {
        super.open();
    }

    close() {
        super.close();
        this.popupSelector.removeEventListener('submit', this.submitForm);
        formNewplace.reset();
        formNewplaceValidator.resetValidationState();

    }
    _getInputValues() {
        this._inputList = this.popupSelector.querySelectorAll('.popup__input');
        this._formValues = [];
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;

    }
    _submitFormAndGetInfo(evt) {
        evt.preventDefault();
        this.submitForm(this._getInputValues());
    }

    _setEventListeners() {
        super._setEventListeners();
        this._submit = this._submitFormAndGetInfo.bind(this);
        this.popupSelector.addEventListener('submit', this._submit);
    }
}
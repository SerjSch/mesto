import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        //this._popupSelector = popupSelector;
        this._submitForm = submitForm;
    }
    open() {
        super.open();
    }

    // Перезаписывает родительский метод setEventListeners. 
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.

    _setEventListeners() {
        super._setEventListeners();

        this._submit = this.submitFormAndGetInfo.bind(this);
        this._popupSelector.addEventListener('submit', this._submit);
    }

    submitFormAndGetInfo(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close()
    }


    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;

    }


    //Перезаписывает родительский метод close,
    // так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        super.close();
        this._popupSelector.removeEventListener('submit', this.submitForm);
        //formNewplace.reset();
        //formNewplaceValidator.resetValidationState();
    }
}
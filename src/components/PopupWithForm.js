import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
            super(popup);
            this._submitForm = submitForm;
            this._inputList = this._popup.querySelectorAll('.popup__input');
        }
        //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        // достаём все элементы полей
        // this._inputList = this._popup.querySelectorAll('.popup__input');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        // возвращаем объект значений
        return this._formValues;
    }

    // Перезаписывает родительский метод setEventListeners.
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика
    // иконке закрытия, но и добавлять обработчик сабмита формы.

    setEventListeners() {
        super.setEventListeners();
        this._submit = this.submitFormAndGetInfo.bind(this);
        this._popup.addEventListener('submit', this._submit);
    }

    submitFormAndGetInfo(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close()
    }

    //Перезаписывает родительский метод close,
    // так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        super.close();
        this._form = this._popup.querySelector('.popup__form').reset();
    }
}
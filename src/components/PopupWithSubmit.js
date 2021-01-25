import { Popup } from "./Popup.js"

export class PopupWithSubmit extends Popup {
    constructor(popup) {
        super(popup);
        this._submitCallback = null;
    }
    setCallback(callback) {
        this._submitCallback = callback;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('click', () => {
            this._submitCallback();
        })
    }
}
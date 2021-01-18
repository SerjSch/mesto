export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        this._setEventListeners();
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');
        this._popupSelector.querySelector('.popup__close-button').removeEventListener('click', () => this.close());
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._closePopupWithMouseclickOnOverlay);
    }
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close()
        }
    }
    _closePopupWithMouseclickOnOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close()
        }
    }
    _setEventListeners() {
        this._handleClose = this.close.bind(this);
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', this._handleClose);

        this._handleEsc = this._handleEscClose.bind(this);
        document.addEventListener('keydown', this._handleEsc);

        this._handleClick = this._closePopupWithMouseclickOnOverlay.bind(this);
        document.addEventListener('click', this._handleClick);
    }
}
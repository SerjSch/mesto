export class Popup {
    constructor(popup) {
        this._popup = popup; //Артем Евсяков писал так тоже можно)
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClick = this._handleOverlayClick.bind(this);
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('mousedown', this._handleOverlayClick);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('mousedown', this._handleOverlayClick);
        //this._popup.querySelector('.popup__close-button').removeEventListener('click', this.close)
    }
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close()
        }
    }
    _handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close()
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', this.close);
    }
}

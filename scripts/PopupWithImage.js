import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        super.popupSelector = popupSelector;
        this.bigFoto = this.popupSelector.querySelector('.popup__big-foto');
        this.placeNameinZoom = this.popupSelector.querySelector('.popup__place-name_zoom');
    }
    open(data) {
        super.open(); // вызываем родительский метод
        // дополним  новой функциональностью:
        this.bigFoto.src = data.link
        this.bigFoto.alt = data.name;
        this.placeNameinZoom.textContent = data.name;

    }
    close() {
        super.close();
    }
}
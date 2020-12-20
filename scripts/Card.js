import { zoomFoto } from './utils.js';
export class Card {
    constructor(data, cardTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
    }
    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
        const cardElement = this._cardTemplate.querySelector('.photo-grid__item-fotocard')
            .cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }
    _createCard() {
        this._cardElementemplate = this._getTemplate();
        this._cardElementemplate.querySelector(".photo-grid__item").src = this._link;
        this._cardElementemplate.querySelector(".photo-grid__item").alt = this._name;
        this._cardElementemplate.querySelector(".photo-grid__place-name")
            .textContent = this._name;
        this._setEventListeners();
        return this._cardElementemplate;
    }
    _setEventListeners() {
        this._cardElementemplate.querySelector('.photo-grid__heart').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._cardElementemplate.querySelector('.photo-grid__trash-bin').addEventListener('click', () => {
            this._handleDelClick();
        });
        this._cardElementemplate.querySelector(".photo-grid__item").addEventListener('click', () => {
            zoomFoto(this._name, this._link);
        });
    }
    _handleLikeClick() {
        this._cardElementemplate.querySelector('.photo-grid__heart').classList.toggle('photo-grid__heart_liked');
    }
    _handleDelClick() {
        this._cardElementemplate.querySelector('.photo-grid__trash-bin').closest('.photo-grid__item-fotocard').remove();
    }
}
import { zoomFoto } from './utils.js';

class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
        this._zoomFoto = zoomFoto;
    }
    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
        const cardElement = document.querySelector('.fotocards').content.querySelector('.photo-grid__item-fotocard').cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }
    _createCard() {
        this._cardElementemplate = this._getTemplate();
        this._setEventListeners();
        this._cardName = this._name; //Имя из объекта
        this._cardUrl = this._link; //Ссылка из объекта
        this._cardItem = this._cardElementemplate.querySelector(".photo-grid__item"); //Картинка карточки
        this._cardTitel = this._cardElementemplate.querySelector(".photo-grid__place-name"); //h2 карточки
        this._cardItem.src = this._cardUrl; //вставляем данные в карточку из объекта массива
        this._cardItem.alt = this._cardName; //вставляем данные в карточку из объекта массива
        this._cardTitel.textContent = this._cardName; //вставляем данные в карточку из объекта массива
        this._zoomFoto = zoomFoto;
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
// Переберём весь исходный массив
initialCards.forEach((item) => {
    const card = new Card(item);
    const cardElement = card._createCard();
    ulPhotoGridList.prepend(cardElement); //вставляет в разметку
});
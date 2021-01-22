export class Card {
    constructor({
            data,
            handleCardClick
        },
        cardTemplate) {
        this._name = data.name;
        this._link = data.link;
        this.handleCardClick = handleCardClick;
        this._cardTemplate = cardTemplate;
    }
    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
        const cardElement = this._cardTemplate.querySelector('.photo-grid__item-fotocard')
            .cloneNode(true);
        // вернём DOM-элемент карточки
        return cardElement;
    }
    createCard() {
        this._cardElementemplate = this._getTemplate();
        this._photoGridItem = this._cardElementemplate.querySelector(".photo-grid__item")
        this._photoGridHeart = this._cardElementemplate.querySelector('.photo-grid__heart')
        this._photoGridTrashBin = this._cardElementemplate.querySelector('.photo-grid__trash-bin')
        this._photoGridItem.src = this._link;
        this._photoGridItem.alt = this._name;
        this._cardElementemplate.querySelector(".photo-grid__place-name")
            .textContent = this._name;
        this._setEventListeners();
        return this._cardElementemplate;
    }
    _setEventListeners() {
        this._photoGridHeart.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._photoGridTrashBin.addEventListener('click', () => {
            this._handleDelClick();
        });
        this._photoGridItem.addEventListener('click', () => {
            this.handleCardClick();
        });
    }
    _handleLikeClick() {
        this._photoGridHeart.classList.toggle('photo-grid__heart_liked');
    }
    _handleDelClick() {
        this._cardElementemplate.remove();
    }
}

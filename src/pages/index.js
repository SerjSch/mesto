import { FormValidator } from '../../scripts/FormValidator.js';
import { Card } from '../../scripts/Card.js';
import { Section } from '../../scripts/Section.js';
import { PopupWithImage } from '../../scripts/PopupWithImage.js';
import { PopupWithForm } from '../../scripts/PopupWithForm.js';
import { UserInfo } from '../../scripts/UserInfo.js';
import {
    initialCards,
    ulPhotoGridList,
    validationConfig,
    ProfileInfo,
    form,
    formNewplace,
    profilePopupReal,
    cardTemplate,
    popupImageZoom,
    editButton,
    addButton,
    inputName,
    inputDiscription,
    popupNewplace
} from '../../scripts/utils.js';

//Класс FormValidator
export const profileFormValidator = new FormValidator(form, validationConfig);
profileFormValidator.enableValidation();
export const formNewplaceValidator = new FormValidator(formNewplace, validationConfig);
formNewplaceValidator.enableValidation();

//НОВЫЕ КЛАССЫ ////////////////////////////////////////////////////////////////
const userInfoClass = new UserInfo(ProfileInfo);
//Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.

//////////// КЛАСС ФОРМЫ ПРОФИЛЯ ////////////////////////////////////////
const profilePopupWithForm = new PopupWithForm(
    //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    profilePopupReal,
    (data) => {
        userInfoClass.setUserInfo(data);
        console.log(data);
    }
    //profileFormValidator.resetValidationState();
);
profilePopupWithForm._setEventListeners();
//////////////////////////////////////////////////////////////////////////////////
function addCardToContainer(data) {
    const card = new Card({
            data: data,
            handleCardClick: () => {
                popupWithImage.open(item);
            }
        },
        cardTemplate
    );
    const cardElement = card._createCard();
    cards.addItemPrepend(cardElement);
};
const newplacePopupWithForm = new PopupWithForm(
    popupNewplace,
    (data) => {
        addCardToContainer(data);
        console.log(data);

    }
);
newplacePopupWithForm._setEventListeners();
///////////////////////////////////////////////////////////////////
const popupWithImage = new PopupWithImage(popupImageZoom);
popupWithImage._setEventListeners();
//////////////////////////////////////////////////////////////
//Создайте класс Section, который отвечает за отрисовку элементов на странице.
// Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
//Свойство items— это массив данных, которые нужно добавить на страницу при инициализации класса.
// Свойство renderer— это функция, которая отвечает за создание и отрисовку данных на странице.
const cards = new Section({
        initialCards,
        renderer: (item) => {
            const card = new Card({
                    data: item,
                    handleCardClick: () => {
                        popupWithImage.open(item);
                    }
                },
                cardTemplate
            );
            const cardElement = card._createCard();
            cards.addItemAppend(cardElement);
        },
    },
    ulPhotoGridList); //Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.

cards.renderItems();

//////////////Слушатели/////////////////////////////////////////////////
editButton.addEventListener('click', () => profilePopupWithForm.open(), () => userInfoClass.getUserInfo());
addButton.addEventListener('click', () => newplacePopupWithForm.open());
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
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
} from './utils.js';

//Класс FormValidator
const profileFormValidator = new FormValidator(form, validationConfig);
profileFormValidator.enableValidation();
const formNewplaceValidator = new FormValidator(formNewplace, validationConfig);
formNewplaceValidator.enableValidation();

//НОВЫЕ КЛАССЫ ////////////////////////////////////////////////////////////////
const userInfoClass = new UserInfo(ProfileInfo);
//Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.



const profilePopupWithForm = new PopupWithForm(
    //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    profilePopupReal,
    (data) => {
        userInfoClass.setUserInfo(data);
    }
    //profilePopupWithForm.submitFormAndGetInfo();
    //profileFormValidator.resetValidationState();
);

profilePopupWithForm._setEventListeners();

const newplacePopupWithForm = new PopupWithForm(
    popupNewplace, {
        submitForm: (item) => {
            const card = new Card(item, cardTemplate);
            const cardElement = card._createCard();
            putCardElementInDom(cardElement);
        }
    });
newplacePopupWithForm._setEventListeners();

///////////////////////////////////////////////////////////////////
const popupWithImage = new PopupWithImage(popupImageZoom);
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
    ulPhotoGridList);
cards.renderItems();

//////////////Слушатели/////////////////////////////////////////////////
editButton.addEventListener('click', () => profilePopupWithForm.open(), () => userInfoClass.getUserInfo());
addButton.addEventListener('click', () => newplacePopupWithForm.open());

console.log(ProfileInfo);
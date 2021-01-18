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
// const profilePopupWithForm = new PopupWithForm({
//     profilePopupReal,
//     submitForm: () => {
//         inputName.value = profileName.textContent;
//         inputDiscription.value = discription.textContent;
//         profileFormValidator.resetValidationState();
//     }

// });
// profilePopupWithForm._setEventListeners();

// const newplacePopupWithForm = new PopupWithForm({
//     popupNewplace,
//     submitForm: (item) => {
//         const card = new Card(item, cardTemplate);
//         const cardElement = card._createCard();
//         putCardElementInDom(cardElement);
//     }
// });

const popupWithImage = new PopupWithImage(popupImageZoom);

const cards = new Section({
        initialCards,
        renderer: (item) => {
            const card = new Card({
                    data: item,
                    handleCardClick: (item) => {
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

const userInfo = new UserInfo(ProfileInfo);

//////////////Слушатели//////////////////
editButton.addEventListener('click', () => profilePopupWithForm.open());
addButton.addEventListener('click', () => newplacePopupWithForm.open());
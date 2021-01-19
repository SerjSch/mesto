export const ulPhotoGridList = document.querySelector(".photo-grid__list");
export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const ProfileInfo = {
    profileName: document.querySelector('.profile__name'),
    discription: document.querySelector('.profile__discription')
};

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputInvalidClass: 'popup__input_state_invalid',
    buttonInvalidClass: 'popup__save-button_invalid',
};

export const cardTemplate = document.querySelector('.fotocards').content;
//Попапы
const profilePopup = document.querySelector('.popup');
export const profilePopupReal = document.querySelector('.popup_profilePopup');
export const popupNewplace = document.querySelector('.popup_newplace');
export const popupImageZoom = document.querySelector('.popup_image-zoom');
//Кнопки
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__addbutton');
const closeButton = profilePopup.querySelector('.popup__close-button');
const closeButtonNewplace = popupNewplace.querySelector('.popup__close-button_newplace');
//Форма профиля
export const form = profilePopup.querySelector('.popup__form');
export const inputName = profilePopup.querySelector('.popup__input_name_name');
export const inputDiscription = profilePopup.querySelector('.popup__input_name_discription');
//Форма карточки
export const formNewplace = popupNewplace.querySelector('.popup__form_newplace');
const inputPlaceName = popupNewplace.querySelector('.popup__input_name_place');
const inputPlaceUrl = popupNewplace.querySelector('.popup__input_name_url');

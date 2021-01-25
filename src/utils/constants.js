export const ulPhotoGridList = document.querySelector(".photo-grid__list");
export const profileInfo = {
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
const popup = document.querySelector('.popup');
export const profilePopupReal = document.querySelector('.popup_profilePopup');
export const popupNewplace = document.querySelector('.popup_newplace');
export const popupImageZoom = document.querySelector('.popup_image-zoom');
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupCardDelConfirm = document.querySelector('.popup_delConfirm');
//Кнопки
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__addbutton');
const closeButton = popup.querySelector('.popup__close-button');
const closeButtonNewplace = popupNewplace.querySelector('.popup__close-button_newplace');
export const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
//Форма профиля
export const profileForm = popup.querySelector('.popup__form_profile');
export const inputName = popup.querySelector('.popup__input_name_name');
export const inputDiscription = popup.querySelector('.popup__input_name_discription');
//Форма карточки
export const formNewplace = popupNewplace.querySelector('.popup__form_newplace');
const inputPlaceName = popupNewplace.querySelector('.popup__input_name_place');
const inputPlaceUrl = popupNewplace.querySelector('.popup__input_name_url');
///
export const avatarForm = popupAvatar.querySelector('.popup__form_avatar');

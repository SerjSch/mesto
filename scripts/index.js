/////////////// ПОЛУЧАЕМ ФОТО ИЗ МАССИВА/////////////////////////////////////////////////////////////////
const initialCards = [{
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

const ulPhotoGridList = document.querySelector(".photo-grid__list"); //Разметка куда вставляем карточки



//Попапы
const profilePopup = document.querySelector('.popup');
const popupNewplace = document.querySelector('.popup_newplace');

//Кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__addbutton');
const closeButton = profilePopup.querySelector('.popup__close-button');
const closeButtonNewplace = popupNewplace.querySelector('.popup__close-button_newplace');


//Формы
const profileName = document.querySelector('.profile__name');
const discription = document.querySelector('.profile__discription');
const form = profilePopup.querySelector('.popup__form');
const inputName = profilePopup.querySelector('.popup__input_name_name');
const inputDiscription = profilePopup.querySelector('.popup__input_name_discription');
const formNewplace = popupNewplace.querySelector('.popup__form_newplace');
const inputPlaceName = popupNewplace.querySelector('.popup__input_name_place');
const inputPlaceUrl = popupNewplace.querySelector('.popup__input_name_url');


//Добавляем в форму текст профиля и открываем попап
function showProfilePopup() {
    inputName.value = profileName.textContent;
    inputDiscription.value = discription.textContent;
    //resetValidationState(profilePopup, validationConfig);
    showPopup(profilePopup);
}
//Открываем попап
function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandlerEscape);
    document.addEventListener('mousedown', closePopupWithMouseclickOnOverlay);
}
//Закрываем попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandlerEscape);
    document.removeEventListener('mousedown', closePopupWithMouseclickOnOverlay);
}
//Закрытие попапа кликом на оверлей
function closePopupWithMouseclickOnOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target)
    }
}
//Закрываем попап с Escape
const escape = 'Escape';

function keyHandlerEscape(event) {
    if (event.key === escape) { closePopup(document.querySelector('.popup_opened')) }
}

//Заполняем форму профиля
function submitForm(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    discription.textContent = inputDiscription.value;
    closePopup(profilePopup);
}
//Заполняем форму добавления карточки
function submitFormNewplace(e) {
    e.preventDefault();
    const newCard = {
        name: inputPlaceName.value,
        link: inputPlaceUrl.value
    };
    addCardToContainer(newCard);
    closePopup(popupNewplace);
    formNewplace.reset();
    resetValidationState(formNewplace, validationConfig);
}

//Слушатели
form.addEventListener('submit', submitForm); //форма профиля
formNewplace.addEventListener('submit', submitFormNewplace); //форма фотокарточки
//Слушатели кнопки открываения
editButton.addEventListener('click', () => showProfilePopup());
addButton.addEventListener('click', () => showPopup(popupNewplace));
//Слушатели кнопки закрывания
closeButton.addEventListener('click', () => closePopup(profilePopup));
closeButtonNewplace.addEventListener('click', () => closePopup(popupNewplace));
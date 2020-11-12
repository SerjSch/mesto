///////////////POPUP для Имени и профессии//////////////////////////////
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const forma = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const discription = document.querySelector('.profile__discription');
const inputName = document.querySelector('.popup__input_name_name');
const inputDiscription = document.querySelector('.popup__input_name_discription');

function showPopup() {
    popup.classList.add('popup_opened')
    inputName.value = profileName.textContent;
    inputDiscription.value = discription.textContent;
}
editButton.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened')
}
closeButton.addEventListener('click', closePopup);

function submitForm(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    discription.textContent = inputDiscription.value;
    closePopup();
}
forma.addEventListener('submit', submitForm);

////////POPUP для Места и ссылки на фото/////////////////////////////
const popupNewplace = document.querySelector('.popup_newplace');
const addButton = document.querySelector('.profile__addbutton');
const closeButtonNewplace = popupNewplace.querySelector('.popup__close-button_newplace');
const formaNewplace = document.querySelector('.popup__form_newplace');
const inputPlaceName = document.querySelector('.popup__input_name_place');
const inputPlaceUrl = document.querySelector('.popup__input_name_url');

function showPopupNewplace() {
    popupNewplace.classList.add('popup_opened');
    inputPlaceName.value = "";
    inputPlaceUrl.value = "";
}
addButton.addEventListener('click', showPopupNewplace);

function closePopupNewplace() {
    popupNewplace.classList.remove('popup_opened')
}
closeButtonNewplace.addEventListener('click', closePopupNewplace);


function submitFormNewplace(e) {
    e.preventDefault();
    initialCards.push({
        name: inputPlaceName.value,
        link: inputPlaceUrl.value
    });
    closePopupNewplace();
    initialCards.forEach(addCardToContainer)
}
formaNewplace.addEventListener('submit', submitFormNewplace);


////////////////Добавляем новые фото////////////////////
const ulPhotoGridList = document.querySelector(".photo-grid__list")

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

function createCard(arrayElement) {
    const cardElementemplate = document.querySelector(".fotocards").content.cloneNode(true); // Клонируем шаблон
    cardElementemplate.querySelector(".photo-grid__item").src = arrayElement.link; //вставляем данные в карточки из объекта data
    cardElementemplate.querySelector(".photo-grid__item").alt = arrayElement.name;
    cardElementemplate.querySelector(".photo-grid__place-name").textContent = arrayElement.name;
    return cardElementemplate;
}
//Функция получает объект массива, создав константу отправляет его в функцию createCard, там получает шаблон
function addCardToContainer(arrayElement) {
    const cardElement = createCard(arrayElement);
    ulPhotoGridList.prepend(cardElement) //вставляет в разметку
        //// навешивание обработчиков /////////
        ////////////// ЛАЙКИ //////////////////
    const likebutton = document.querySelector('.photo-grid__heart');
    likebutton.addEventListener('click', function Liked() {
        if (likebutton.classList.contains('photo-grid__heart_liked')) {
            likebutton.classList.remove('photo-grid__heart_liked');
        } else {
            likebutton.classList.add('photo-grid__heart_liked');
        }
    })
}
// Берем элементы массива - объекты и выполняем для них функцию
initialCards.forEach(addCardToContainer)
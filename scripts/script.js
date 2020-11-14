///////////////POPUP для Имени и профессии////////////////////////////////////////////////////////////
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const form = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const discription = document.querySelector('.profile__discription');
const inputName = document.querySelector('.popup__input_name_name');
const inputDiscription = document.querySelector('.popup__input_name_discription');

function showPopup() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDiscription.value = discription.textContent;
}
editButton.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup);

function submitForm(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    discription.textContent = inputDiscription.value;
    closePopup();
}
form.addEventListener('submit', submitForm);
///////////////КОНЕЦ - POPUP для Имени и профессии////////////////////////////////////////////////////////////


/////////////// ПОЛУЧАЕМ ФОТО ИЗ МАССИВА/////////////////////////////////////////////////////////////////
const ulPhotoGridList = document.querySelector(".photo-grid__list");
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
]; //сама переносится расширением авторедактором 

function createCard(arrayElement) {
    const cardElementemplate = document.querySelector(".fotocards").content.cloneNode(true); // Клонируем шаблон
    const cardName = arrayElement.name;
    cardElementemplate.querySelector(".photo-grid__item").src = arrayElement.link; //вставляем данные в карточки из объекта data
    cardElementemplate.querySelector(".photo-grid__item").alt = cardName;
    cardElementemplate.querySelector(".photo-grid__place-name").textContent = cardName;
    return cardElementemplate;
}
//Функция получает объект массива, создав константу отправляет его в функцию createCard, там получает шаблон
function addCardToContainer(arrayElement) {
    const cardElement = createCard(arrayElement);
    ulPhotoGridList.prepend(cardElement); //вставляет в разметку

    //// навешивание обработчиков /////////

    ////////////// ЛАЙКИ /////////////////////////////////////////////////////////////////////////////////////////
    const likebutton = document.querySelector('.photo-grid__heart');

    likebutton.addEventListener('click', function addOrRemoveLike() {
        likebutton.classList.toggle("photo-grid__heart_liked");
    });
    ////////////// УДАЛЯЕМ КАРТОЧКИ  //////////////////
    const trashBin = document.querySelector('.photo-grid__trash-bin');

    trashBin.addEventListener('click', function delFotocard() {
        const listItem = trashBin.closest('.photo-grid__item-fotocard');
        listItem.remove();
    });

    ///////////////POPUP для Фотозума//////////////////////////////////////////////////////////////////////////
    const popupImageZoom = document.querySelector('.popup_image-zoom');
    const fotoToZoom = document.querySelector('.photo-grid__item');
    const closeZoomFotoButton = document.querySelector('.popup__close-button_zoom');
    const bigFoto = document.querySelector('.popup__big-foto');
    const placeNameFotobeforZoom = document.querySelector('.photo-grid__place-name');
    const placeNameinZoom = document.querySelector('.popup__place-name_zoom');

    //Открываем попап
    function zoomFoto() {
        bigFoto.src = fotoToZoom.src;
        placeNameinZoom.textContent = placeNameFotobeforZoom.textContent;
        popupImageZoom.classList.add('popup_opened');
    }
    fotoToZoom.addEventListener('click', zoomFoto);

    //Закрываем попап
    function closePopupImageZoom() {
        popupImageZoom.classList.remove('popup_opened');
    }
    closeZoomFotoButton.addEventListener('click', closePopupImageZoom);



}
///////////////POPUP для Добавления ФОТОКАРТОЧЕК ////////////////////////////////////////////////////////
const addButton = document.querySelector('.profile__addbutton');
const popupNewplace = document.querySelector('.popup_newplace');
const closeButtonNewplace = popupNewplace.querySelector('.popup__close-button_newplace');
const formNewplace = document.querySelector('.popup__form_newplace');
const inputPlaceName = document.querySelector('.popup__input_name_place');
const inputPlaceUrl = document.querySelector('.popup__input_name_url');
///ОТКРЫВАЕМ ПОПАП/////
function showPopupNewplace() {
    popupNewplace.classList.add('popup_opened');
}
addButton.addEventListener('click', showPopupNewplace);
///ЗАКРЫВАЕМ ПОПАП/////
function closePopupNewplace() {
    popupNewplace.classList.remove('popup_opened');
}
closeButtonNewplace.addEventListener('click', closePopupNewplace);
//ДОБАВЛЯЕМ НОВУЮ КАРТОЧКУ
function submitFormNewplace(e) {
    e.preventDefault();
    const newCard = {
        name: inputPlaceName.value,
        link: inputPlaceUrl.value
    };
    addCardToContainer(newCard);
    closePopupNewplace();
    formNewplace.reset();
}
formNewplace.addEventListener('submit', submitFormNewplace);
///////////////КОНЕЦ - POPUP для Добавления ФОТОКАРТОЧЕК ////////////////////////////////////////////////////////


////////// СОЗДАЕМ КАРТОЧКИ - Берем элементы массива - объекты и выполняем для них функцию создания карточек////////////
initialCards.forEach(addCardToContainer);
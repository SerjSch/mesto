import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
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
    popupNewplace
} from '../utils/constants.js';

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
    }
);
profilePopupWithForm.setEventListeners();

//////////////////////////////////////////////////////////////////////////////////
function createCard(data) {
    const card = new Card({
            data: data,
            handleCardClick: () => {
                popupWithImage.open(data);
            }
        },
        cardTemplate
    );
    const cardElement = card.createCard();
    return cardElement;
};

function addCardToContainer(data) {
    const newCard = createCard(data);
    cards.addItemPrepend(newCard);
};


//////////////// ПОПАП НОВОЕ МЕСТО/////////////////
const newplacePopupWithForm = new PopupWithForm(
    popupNewplace,
    (data) => {
        addCardToContainer(data);
    }
);
newplacePopupWithForm.setEventListeners();

//////////////////ПОПАП КАРТИНКА/////////////////////////////////////////////////
const popupWithImage = new PopupWithImage(popupImageZoom);
popupWithImage.setEventListeners();
//////////////////////////////////////////////////////////////
//Создайте класс Section, который отвечает за отрисовку элементов на странице.
// Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
//Свойство items— это массив данных, которые нужно добавить на страницу при инициализации класса.
// Свойство renderer— это функция, которая отвечает за создание и отрисовку данных на странице.
const cards = new Section({
        initialCards,
        renderer: (item) => {
            const allCards = createCard(item);
            cards.addItemAppend(allCards);
        },
    },
    ulPhotoGridList); //Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
cards.renderItems();

//////////////Слушатели/////////////////////////////////////////////////
editButton.addEventListener('click', () => {
    const userData = userInfoClass.getUserInfo();
    user_name.value = userData.profileName;
    about.value = userData.discription;
    profilePopupWithForm.open();
    profileFormValidator.resetValidationState();
});

addButton.addEventListener("click", () => {
    newplacePopupWithForm.open()
    formNewplaceValidator.resetValidationState();
});

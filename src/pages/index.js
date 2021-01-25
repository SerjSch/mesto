import './index.css';
import { Api } from '../components/Api.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import {
    avatarEditButton,
    popupAvatar,
    avatarForm,
    popupCardDelConfirm,
    ulPhotoGridList,
    validationConfig,
    profileInfo,
    profileForm,
    formNewplace,
    profilePopupReal,
    cardTemplate,
    popupImageZoom,
    editButton,
    addButton,
    popupNewplace
} from '../utils/constants.js';

let cards
    //Класс FormValidator
export const profileFormValidator = new FormValidator(profileForm, validationConfig);
profileFormValidator.enableValidation();
export const formNewplaceValidator = new FormValidator(formNewplace, validationConfig);
formNewplaceValidator.enableValidation();
export const formAvatarValidator = new FormValidator(avatarForm, validationConfig);
formAvatarValidator.enableValidation();

///////////////НОВЫЕ КЛАССЫ ////////////////////////////////////////////////////////////////
const userInfoClass = new UserInfo(profileInfo, '.profile__avatar-foto');
const popupWithImage = new PopupWithImage(popupImageZoom);
const delCardSubmitPopup = new PopupWithSubmit(popupCardDelConfirm);

const profilePopupWithForm = new PopupWithForm(profilePopupReal, (inputData) => {
    profilePopupWithForm.showLoading(true, 'Сохранение...');
    api.sendUserInfo(inputData)
        .then((res) => {
            userInfoClass.setUserInfo(res.name, res.about)
            profilePopupWithForm.showLoading(false, 'Сохранить')
            profilePopupWithForm.close()
        })
        .catch((err) => {
            console.log(err);
        })
});
const newplacePopupWithForm = new PopupWithForm(popupNewplace, (values) => {
    newplacePopupWithForm.showLoading(true, 'Создание...');
    api.sendNewCard(values)
        .then(res => {
            cards.addItem(createCard(res))
            newplacePopupWithForm.showLoading(false, 'Создать')
            newplacePopupWithForm.close()
        })
        .catch((err) => {
            console.log(err);
        })
});

const classAvatarPopup = new PopupWithForm(popupAvatar, (inputData) => {
    classAvatarPopup.showLoading(true, 'Сохранение...');
    api.sendUserAvatar(inputData)
        .then((result) => {
            userInfoClass.setUserAvatar(result.avatar)
            classAvatarPopup.showLoading(false, 'Сохранить')
            classAvatarPopup.close()
        })
        .catch((err) => {
            console.log(err);
        })
});

profilePopupWithForm.setEventListeners();
newplacePopupWithForm.setEventListeners();
popupWithImage.setEventListeners();
classAvatarPopup.setEventListeners();
delCardSubmitPopup.setEventListeners()

//функция создания карточки//////-----------------------------------------------------------------------------------------------
const handleCardClick = (result) => {
    popupWithImage.open(result)
}

const handleLikeClick = (card) => {
    const handleLikeResponse = (res) => {
        card.counterOfLikes(res.likes, res.likes.some(
            (user) => user._id === userInfoClass.getUserId()
        ))
    }
    if (!card.getCardLiked()) {
        api.likeTheCard(card.getCardId())
            .then(handleLikeResponse)
            .catch((err) => {
                console.log(err);
            })
    } else {
        api.delCardsLike(card.getCardId())
            .then(handleLikeResponse)
            .catch((err) => {
                console.log(err);
            })
    }
}
const handleDelClick = (card) => {
    delCardSubmitPopup.open();
    delCardSubmitPopup.setCallback(() => {
        delCardSubmitHandler(card);
    })

}
const delCardSubmitHandler = (card) => {
    api.delCardFromServer(card.getCardId())
        .then(() => {
            card.delCard()
            delCardSubmitPopup.close()
        })
        .catch((err) => {
            console.log(err);
        })
}


const createCard = (result) => {
    const card = new Card({
        data: result,
        liked: result.likes.some((user) => user._id === userInfoClass.getUserId()),
        owned: result.owner._id === userInfoClass.getUserId(),
        handleCardClick,
        handleLikeClick,
        handleDelClick
    }, cardTemplate);
    const newCardElement = card.createCard();
    return newCardElement;
}

///////////////ПРОЕКТНАЯ 9 ////////////////////////////////////////////

//Класс для поключения к серверу
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
        authorization: '35a14b0b-ee14-4289-9936-131b6a5ac6f5',
        'Content-Type': 'application/json'
    }
})

Promise.all([
        api.getUserData(),
        api.getInitialCards()
    ])
    .then(values => {
        const [userData, initialCards] = values; //деструктуризация массива

        userInfoClass.setUserInfo(userData.name, userData.about);
        userInfoClass.setUserAvatar(userData.avatar);
        userInfoClass.setUserId(userData._id);
        cards = new Section({ items: initialCards, renderer: createCard }, ulPhotoGridList);
        cards.renderItems();
    })
    .catch((err) => {
        console.log(err);
    })

//////////////Слушатели/////////////////////////////////////////////////
editButton.addEventListener('click', () => {
    const userData = userInfoClass.getUserInfo();
    user_name.value = userData.profileName;
    about.value = userData.discription;
    profilePopupWithForm.open();
    profileFormValidator.resetValidationState();
});

addButton.addEventListener("click", () => {
    newplacePopupWithForm.open();
    formNewplaceValidator.resetValidationState();
});

avatarEditButton.addEventListener('click', () => {
    classAvatarPopup.open();
    formAvatarValidator.resetValidationState();
});

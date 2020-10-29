const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
//const saveButton = popup.querySelector('.popup__save-button');

function showPopup(){
  popup.classList.add('popup__opend')
}
function closePopup(){
  popup.classList.remove('popup__opend')
}
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);

const forma = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const discription = document.querySelector('.profile__discription');
const inputName = document.querySelector('.popup__input-name');
const inputDiscription = document.querySelector('.popup__input-discription');

function submitForm(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  discription.textContent = inputDiscription.value;
}
forma.addEventListener('submit', submitForm);
//saveButton.addEventListener('click', closePopup);
forma.addEventListener('submit', closePopup);
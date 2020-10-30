const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const forma = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const discription = document.querySelector('.profile__discription');
const inputName = document.querySelector('.popup__input_name');
const inputDiscription = document.querySelector('.popup__input_discription');

function showPopup(){
  popup.classList.add('popup_opened')
inputName.value = profileName.textContent;
inputDiscription.value = discription.textContent;

}
function closePopup(){
  popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);



function submitForm(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  discription.textContent = inputDiscription.value;
  closePopup();
}
forma.addEventListener('submit', submitForm);
forma.addEventListener('submit', closePopup);
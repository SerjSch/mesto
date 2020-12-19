export function zoomFoto(name, link) {
    bigFoto.src = link;
    placeNameinZoom.textContent = name;
    showPopup(popupImageZoom);
}

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
/////////////////POPUP для Фотозума//////////////////////////////////////////////////////////////////////////
const popupImageZoom = document.querySelector('.popup_image-zoom');
const closeZoomFotoButton = popupImageZoom.querySelector('.popup__close-button_zoom');
const placeNameinZoom = popupImageZoom.querySelector('.popup__place-name_zoom');
const bigFoto = popupImageZoom.querySelector('.popup__big-foto');

closeZoomFotoButton.addEventListener('click', () => closePopup(popupImageZoom));
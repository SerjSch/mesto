/////////////////POPUP для Фотозума//////////////////////////////////////////////////////////////////////////
const popupImageZoom = document.querySelector('.popup_image-zoom');

const closeZoomFotoButton = popupImageZoom.querySelector('.popup__close-button_zoom');
const placeNameinZoom = popupImageZoom.querySelector('.popup__place-name_zoom');

const bigFoto = popupImageZoom.querySelector('.popup__big-foto');
//Открываем попап
export function zoomFoto(name, link) {
    bigFoto.src = link;
    placeNameinZoom.textContent = name;
    showPopup(popupImageZoom);
}

closeZoomFotoButton.addEventListener('click', () => closePopup(popupImageZoom));
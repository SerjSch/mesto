export class Api {
    constructor(settings) {
        this._baseUrl = settings.baseUrl;
        this._headers = settings.headers;
    }

    /////Получаем данные пользователя с сервера////////////////
    getUserData() {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

    /////Получаем карточки с сервера//////////////////////////////
    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

    /////Отправляем измененные данные пользователя на сервер////////////////
    sendUserInfo(values) {
        return fetch(this._baseUrl + '/users/me', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: values.name,
                    about: values.discription
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });

    }

    /////Отправляем аватар на сервер////////////////
    sendUserAvatar(picture) {
        return fetch(this._baseUrl + '/users/me/avatar', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: picture.avatar
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });

    }

    /////////////Отправляем новую фотокарточку///////////////
    sendNewCard(values) {
        return fetch(this._baseUrl + '/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: values.name,
                    link: values.link
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

    /////////////Поставим Лайк///////////////
    likeTheCard(cardId) {
        return fetch(this._baseUrl + `/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

    /////////////Удалим Лайк///////////////
    delCardsLike(cardId) {
        return fetch(this._baseUrl + `/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

    /////////////Удалим Фотокарточку///////////////
    delCardFromServer(cardId) {
        return fetch(this._baseUrl + `/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка, что-то пошло не так: ${res.status}`);
            });
    }

}
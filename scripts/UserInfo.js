export class UserInfo {
    //Принимает в конструктор объект с селекторами двух элементов:
    // элемента имени пользователя и элемента информации о себе.
    constructor({
        profileName,
        discription
    }) {
        this._profileName = profileName;
        this._discription = discription;
    }

    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
    //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
        const userInfo = {
            profileName: this._profileName.textContent,
            discription: this._discription.textContent
        }
        return userInfo;
    }

    ///Содержит публичный метод setUserInfo, 
    //который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo({ name, discription }) {
        this._profileName.textContent = name;
        this._discription.textContent = discription;
    }

}
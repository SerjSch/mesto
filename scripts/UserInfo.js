export class UserInfo {
    constructor({
        profileName,
        discription
    }) {
        this._profileName = profileName;
        this._discription = discription;
    }

    getUserInfo() {
        const userInfo = {
            profileName: this._profileName.textContent,
            discription: this._discription.textContent
        }
        return userInfo;
    }

    setUserInfo(data) {
        this._profileName.textContent = data.profileName;
        this._discription.textContent = data.discription;
    }

}
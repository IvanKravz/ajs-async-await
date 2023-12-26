export default class GameSaving {
    constructor (jsonObj) {
        const obj = JSON.parse(jsonObj);
        this.id = obj.id;
        this.created = obj.created;
        this.userInfo = obj.userInfo;
    }
}

class TwitterBotModel {
    constructor() {
        this.ComPort = null;
        this.SharedData = null;
        this.lastMsg = null;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
class TwitterBotController {
    constructor() {
        this.twitterBotView = new TwitterBotView();
    }

    init() {
        this.createComPort();
        console.log("SETUp!");
    }

    createComPort() {
        this.twitterBotModel.ComPort = chrome.runtime.connect({
            name: "twitter"
        });
        this.twitterBotModel.ComPort.onMessage.addListener(this.onMessageReceive.bind(this));

        window.addEventListener("message", (event) => {
            if (event.source != window) return;
            if (event.data.Tag && event.data.Tag == "SharedData") {
                this.twitterBotModel.SharedData = event.data.SharedData;
            }
        }, false);
    }

    onMessageReceive(msg) {
        console.log(msg);
        this.twitterBotModel.lastMsg = msg;
        if (msg.Tag == "UpdateTwitter") {
            console.log(msg.story);
        } else if (msg.Tag == "LikeFollow") {
            this.twitterBotModel.scrollLike(3);
        }
    }
}
import { Message, MessageType } from "./message"

let lastKeyword: string = "";

browser.runtime.onMessage.addListener((msg: Message) => {

    switch (msg.type) {
        case MessageType.NOTIFY_KEYWORD:
            lastKeyword = msg.keyword;
        break;

        case MessageType.REQUEST_KEYWORD:
            browser.runtime.sendMessage(new Message(MessageType.NOTIFY_KEYWORD, lastKeyword));
        break;
    }
});
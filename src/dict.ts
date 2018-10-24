import { Message, MessageType } from "./message"

const iframe  = document.getElementById("dict_iframe");
const log     = document.getElementById("log");

browser.runtime.sendMessage(new Message(MessageType.REQUEST_KEYWORD, ""));
browser.runtime.onMessage.addListener((msg: Message) => {

    switch (msg.type) {
        case MessageType.NOTIFY_KEYWORD: {
            log.innerText = msg.keyword;

            if (iframe instanceof HTMLIFrameElement)
                (iframe as HTMLIFrameElement).src = "https://www.merriam-webster.com/dictionary/" + msg.keyword;
        }
        break;
    }
});
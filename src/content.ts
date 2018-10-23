import { Message, MessageType } from "./message"

document.addEventListener("selectionchange", () => {
    const str: string = window.getSelection().toString();
    const msg: Message = new Message(MessageType.NOTIFY_KEYWORD, str);
    browser.runtime.sendMessage(msg);
});
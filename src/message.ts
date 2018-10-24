export enum MessageType {
    NONE = 0,
    NOTIFY_KEYWORD,
    REQUEST_KEYWORD,
}

export class Message {
    public type: MessageType = MessageType.NONE;
    public keyword: string   = "";

    constructor(type: MessageType, keyword: string) {
        this.type    = type;
        this.keyword = keyword;
    }
}
let lastKeyword: string = "";

browser.runtime.onMessage.addListener((obj: object) => {
    if (typeof obj === "string") {
        lastKeyword = obj;
    }
    else if (typeof obj === "object") {
        browser.runtime.sendMessage(lastKeyword);
    }
});
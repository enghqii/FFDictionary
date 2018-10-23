const iframe  = document.getElementById("dict_iframe");
const log     = document.getElementById("log");

browser.runtime.sendMessage({})
browser.runtime.onMessage.addListener((obj: object) => {
    if (typeof obj === "string") {
        log.innerText = obj as string;

        if (iframe instanceof HTMLIFrameElement)
            (iframe as HTMLIFrameElement).src = "https://www.merriam-webster.com/dictionary/" + (obj as string);
    }
});
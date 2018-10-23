document.addEventListener("selectionchange", () => {
    const str: string = window.getSelection().toString();
    browser.runtime.sendMessage(str);
});
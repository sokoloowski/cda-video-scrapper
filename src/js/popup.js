// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener("load", function (evt) {
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
        file: "src/js/payload.js",
    });
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
    document.getElementById("m3u8").innerText = message;
});

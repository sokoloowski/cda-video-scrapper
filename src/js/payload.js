// send the page title as a chrome message
var video = document.getElementsByTagName("video");
if (video.length > 0) {
    var videoUrl = video[0].getAttribute("src");
    chrome.runtime.sendMessage(videoUrl);
}

var video = JSON.parse(document.querySelector('div[player_data]').attributes['player_data'].value)['video']
chrome.runtime.sendMessage(
    video['file'] ||
    video['manifest_apple']
);

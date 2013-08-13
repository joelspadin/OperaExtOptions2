chrome.runtime.onInstalled.addListener(function (details) {
    settings.init();

    antiSettings.init();
});

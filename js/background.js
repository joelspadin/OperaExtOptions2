/// <reference path="settings.ts" />
/// <reference path="lib/chrome.d.ts" />
chrome.runtime.onInstalled.addListener(function (details) {
    settings.init();

    // This is just to show off changing which storage object the options page uses.
    // Normally, you wouldn't need two storage objects.
    antiSettings.init();
});
//@ sourceMappingURL=background.js.map

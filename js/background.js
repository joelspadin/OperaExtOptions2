/// <reference path="settings.ts" />
/// <reference path="chrome.d.ts" />
chrome.runtime.onInstalled.addListener(function (details) {
    settings.init();
});

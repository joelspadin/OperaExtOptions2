/// <reference path="settings.ts" />
/// <reference path="lib/options-page.ts" />
/**
* Add some extra logic to the options page
*/
/* Transform functions for the 'transform' setting */
function linesToArray(lines) {
    return lines.split('\n').map(function (val) {
        return val.trim();
    });
}

function arrayToLines(array) {
    return array.join('\n');
}

/* Switch between storage sets when the user clicks the swap button */ var settingsSwapped = false;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#switch-settings').addEventListener('click', function () {
        if (settingsSwapped) {
            window.optionsPage.setStorage(settings);
        } else {
            window.optionsPage.setStorage(antiSettings);
        }

        settingsSwapped = !settingsSwapped;
    });
});
//@ sourceMappingURL=options.js.map

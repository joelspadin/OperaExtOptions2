function linesToArray(lines) {
    return lines.split('\n').map(function (val) {
        return val.trim();
    });
}

function arrayToLines(array) {
    return array.join('\n');
}

var settingsSwapped = false;
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

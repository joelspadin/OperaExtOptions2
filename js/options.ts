/// <reference path="settings.ts" />
/// <reference path="lib/options-page.ts" />

/**
 * Add some extra logic to the options page
 */



/* Transform functions for the 'transform' setting */

function linesToArray(lines: string) {
	return lines.split('\n').map((val) => val.trim());
}

function arrayToLines(array: string[]) {
	return array.join('\n');
}



/* Switch between storage sets when the user clicks the swap button */ 

var settingsSwapped = false;
document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('#switch-settings').addEventListener('click', () => {
		if (settingsSwapped) {
			window.optionsPage.setStorage(settings);
		} else {
			window.optionsPage.setStorage(antiSettings);
		}

		settingsSwapped = !settingsSwapped;
	});

});
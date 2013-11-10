/// <reference path="lib/storage.ts" />

interface SettingStorage {
	// If useAccessors is not disabled, give the names and types of all your settings 
	// here so they can be referenced in TypeScript code.

	checkbox: boolean;
	radio: string;
	select: string;
	selectmany: string[];
	textbox: string;
	mediumtext: string;
	widetext: string;
	textarea: string;
	bigarea: string;
	biggestarea: string;
	transform: string[];
	numeric: number;
	range: number;
	color: string;
	date: string;
	month: string;
	week: string;
	time: string;
}

var settings = CreateSettings({
	checkbox: true,
	radio: 'one',
	select: 'two',
	selectmany: ['one', 'three'],
	textbox: 'foo',
	mediumtext: 'This is a textbox with more text in it.',
	widetext: 'This is a textbox with a very large amount of text inside of it.',
	textarea: 'This is a <textarea>.\nIt has multiple lines.',
	bigarea: 'This is a <textarea> with lots of space.',
	biggestarea: 'This is a really big <textarea>.',
	transform: ['foo', 'bar', 'baz'],
	numeric: 42,
	range: 0,
	color: '#ff0000',
	date: '1970-01-01',
	month: '1970-01',
	week: '1970-W1',
	time: '00:00',
});

// This is just to show off changing which storage object the options page uses.
// Normally, you wouldn't need two storage objects.
var antiSettings = CreateSettings({
	checkbox: false,
	radio: 'two',
	select: 'one',
	selectmany: ['two'],
	textbox: 'bar',
	mediumtext: 'This is not a textbox with more text in it.',
	widetext: 'This is not a textbox with a very large amount of text inside of it.',
	textarea: 'This is not a <textarea>.\nIt has multiple lines.',
	bigarea: 'This is not a <textarea> with lots of space.',
	biggestarea: 'This is not a really big <textarea>.',
	transform: ['oof', 'rab', 'zab'],
	numeric: -42,
	range: 0,
	color: '#00ffff',
	date: '1970-01-01',
	month: '1970-01',
	week: '1970-W1',
	time: '00:00',
}, {
	prefix: 'anti_',
});